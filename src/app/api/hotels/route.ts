import { NextRequest, NextResponse } from 'next/server';
import { amadeus } from '@/lib/amadeus';

// Mapeo de ciudades mexicanas a códigos IATA
const MEXICAN_CITIES = {
  'Ciudad de México': 'MEX',
  'Cancún': 'CUN',
  'Playa del Carmen': 'CZM',
  'Puerto Vallarta': 'PVR',
  'Los Cabos': 'SJD',
  'Tulum': 'CZM',
  'Guadalajara': 'GDL',
  'Mérida': 'MID',
  'Oaxaca': 'OAX',
  'San Miguel de Allende': 'BJX',
  'Mazatlán': 'MZT',
  'Acapulco': 'ACA',
  'Monterrey': 'MTY',
  'Puebla': 'PBC',
  'Veracruz': 'VER'
};

// Lista de amenidades que podrían indicar que acepta mascotas
const PET_FRIENDLY_AMENITIES = [
  'PETS_ALLOWED',
  'PET_FRIENDLY',
  'PETS_WELCOME'
];

// Función para transformar datos de Amadeus al formato de la aplicación
function transformAmadeusHotel(hotel: any, offers: any[] = []): any {
  const hotelOffer = offers.find(offer => offer.hotel?.hotelId === hotel.hotelId);
  const price = hotelOffer?.offers?.[0]?.price?.total || 'Consultar precio';
  
  return {
    id: hotel.hotelId || Math.random().toString(),
    nombre: hotel.name || 'Hotel sin nombre',
    ciudad: hotel.address?.cityName || 'Ciudad no especificada',
    estado: hotel.address?.stateCode || 'México',
    politica: 'Se aceptan mascotas. Consultar condiciones específicas al realizar la reserva.',
    imagen: `https://images.unsplash.com/800x600/?hotel,luxury,${encodeURIComponent(hotel.name || 'hotel')}`,
    enlace: `https://www.amadeus.com/hotel/${hotel.hotelId}`,
    descripcion: hotel.shortDescription || `Descubre la comodidad y elegancia en ${hotel.name}. Un destino perfecto para viajeros que buscan una experiencia única junto a sus mascotas.`,
    precio: typeof price === 'string' ? price : `$${price} MXN`,
    servicios: [
      'Pet-Friendly',
      'WiFi gratuito',
      'Recepción 24h',
      'Servicio de habitaciones',
      'Área para mascotas',
      'Desayuno incluido',
      'Estacionamiento',
      'Aire acondicionado'
    ],
    rating: Math.random() * (5 - 3.5) + 3.5, // Rating aleatorio entre 3.5 y 5
    categoria: 'hotel'
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const ciudad = searchParams.get('ciudad') || '';
    const categoria = searchParams.get('categoria') || '';
    const busqueda = searchParams.get('busqueda') || '';
    const checkIn = searchParams.get('checkIn') || '';
    const checkOut = searchParams.get('checkOut') || '';

    // Si no hay parámetros específicos, devolvemos hoteles de varias ciudades mexicanas
    const citiesToSearch = ciudad && MEXICAN_CITIES[ciudad as keyof typeof MEXICAN_CITIES] 
      ? [ciudad] 
      : ['Cancún', 'Puerto Vallarta', 'Ciudad de México', 'Playa del Carmen', 'Los Cabos'];

    const allHotels: any[] = [];

    // Buscar hoteles en cada ciudad
    for (const cityName of citiesToSearch) {
      try {
        const cityCode = MEXICAN_CITIES[cityName as keyof typeof MEXICAN_CITIES];
        if (!cityCode) continue;

        console.log(`Buscando hoteles en ${cityName} (${cityCode})`);

        const hotelsResponse = await amadeus.searchHotels({
          cityCode,
          amenities: PET_FRIENDLY_AMENITIES,
          radius: 50,
          radiusUnit: 'KM'
        });

        if (hotelsResponse?.data) {
          const hotels = hotelsResponse.data.slice(0, 5); // Limitar a 5 hoteles por ciudad
          
          // Si tenemos fechas, obtener ofertas
          let offers: any[] = [];
          if (checkIn && checkOut && hotels.length > 0) {
            try {
              const hotelIds = hotels.map((h: any) => h.hotelId).filter(Boolean);
              if (hotelIds.length > 0) {
                const offersResponse = await amadeus.getHotelOffers({
                  hotelIds: hotelIds.slice(0, 10), // Limitar a 10 para evitar errores
                  adults: 2,
                  checkInDate: checkIn,
                  checkOutDate: checkOut,
                  currency: 'MXN',
                  lang: 'es'
                });
                offers = offersResponse?.data || [];
              }
            } catch (error) {
              console.log('Error obteniendo ofertas:', error);
              // Continuar sin ofertas
            }
          }

          // Transformar hoteles
          const transformedHotels = hotels.map((hotel: any) => 
            transformAmadeusHotel(hotel, offers)
          );

          allHotels.push(...transformedHotels);
        }
      } catch (error) {
        console.log(`Error buscando en ${cityName}:`, error);
        // Continuar con otras ciudades
      }
    }

    // Si no encontramos hoteles de Amadeus, devolver algunos de ejemplo
    if (allHotels.length === 0) {
      console.log('No se encontraron hoteles de Amadeus, usando datos de ejemplo');
      const exampleHotels = [
        {
          id: 1,
          nombre: "Hotel Xcaret México",
          ciudad: "Playa del Carmen",
          estado: "Quintana Roo",
          politica: "Se aceptan mascotas de hasta 15kg. Costo adicional de $500 MXN por noche.",
          imagen: "https://images.unsplash.com/1600x1200/?hotel,xcaret,luxury,mexico",
          enlace: "https://www.hotelxcaret.com",
          descripcion: "Un resort todo incluido que acepta mascotas, rodeado de la naturaleza de la Riviera Maya.",
          precio: "Desde $8,500 MXN",
          servicios: ["Pet-Friendly", "Todo incluido", "Spa", "Múltiples restaurantes", "Actividades acuáticas"],
          rating: 4.8,
          categoria: "resort"
        },
        {
          id: 2,
          nombre: "Casa de la Playa",
          ciudad: "Cancún",
          estado: "Quintana Roo", 
          politica: "Mascotas bienvenidas sin restricción de peso. Sin costo adicional.",
          imagen: "https://images.unsplash.com/1600x1200/?beach,hotel,luxury,cancun",
          enlace: "https://www.casadelaplaya.com",
          descripcion: "Un refugio frente al mar donde tu mascota es parte de la familia.",
          precio: "Desde $6,800 MXN",
          servicios: ["Pet-Friendly", "Frente al mar", "Spa", "Restaurante gourmet"],
          rating: 4.6,
          categoria: "hotel"
        }
      ];
      allHotels.push(...exampleHotels);
    }

    // Aplicar filtros de búsqueda
    let filteredHotels = allHotels;

    if (busqueda) {
      const searchTerm = busqueda.toLowerCase();
      filteredHotels = filteredHotels.filter(hotel =>
        hotel.nombre.toLowerCase().includes(searchTerm) ||
        hotel.ciudad.toLowerCase().includes(searchTerm) ||
        hotel.descripcion.toLowerCase().includes(searchTerm)
      );
    }

    if (categoria && categoria !== '') {
      filteredHotels = filteredHotels.filter(hotel => 
        hotel.categoria === categoria
      );
    }

    // Obtener listas únicas para filtros
    const ciudades = [...new Set(allHotels.map(hotel => hotel.ciudad))].sort();
    const categorias = [...new Set(allHotels.map(hotel => hotel.categoria))].sort();

    return NextResponse.json({
      hoteles: filteredHotels,
      ciudades,
      categorias,
      total: filteredHotels.length,
      source: allHotels.length > 2 ? 'amadeus' : 'example'
    });

  } catch (error) {
    console.error('Error en API de hoteles:', error);
    
    // En caso de error, devolver datos de ejemplo
    const fallbackHotels = [
      {
        id: 1,
        nombre: "Hotel Pet Paradise",
        ciudad: "Puerto Vallarta",
        estado: "Jalisco",
        politica: "Se aceptan mascotas de cualquier tamaño. Servicios especiales para mascotas disponibles.",
        imagen: "https://images.unsplash.com/1600x1200/?hotel,puerto,vallarta,pet",
        enlace: "#",
        descripcion: "Un hotel diseñado especialmente para huéspedes que viajan con mascotas.",
        precio: "Desde $4,200 MXN",
        servicios: ["Pet-Friendly", "Guardería canina", "Parque para mascotas", "WiFi gratuito"],
        rating: 4.5,
        categoria: "hotel"
      }
    ];

    return NextResponse.json({
      hoteles: fallbackHotels,
      ciudades: ["Puerto Vallarta"],
      categorias: ["hotel"],
      total: 1,
      source: 'fallback',
      error: 'Usando datos de respaldo debido a error en API'
    });
  }
}