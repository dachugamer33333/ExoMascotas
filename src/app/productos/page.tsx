import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos Recomendados - ExoMascotas | Reseñas y Guías",
  description: "Reseñas de productos para mascotas exóticas. Alimentos, juguetes, hábitats y accesorios recomendados por expertos con enlaces de afiliados.",
  keywords: "productos mascotas exóticas, alimento hurones, terrarios reptiles, accesorios erizos",
};

// Mock data para productos
const productos = [
  {
    id: 1,
    name: "Jaula Marshall Ferret Nation Double Unit",
    category: "Hábitats",
    species: ["Hurones"],
    image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400",
    rating: 4.8,
    price: "$2,499",
    originalPrice: "$2,999",
    description: "La jaula más recomendada para hurones. Construcción de acero resistente con múltiples niveles y bandejas extraíbles para fácil limpieza.",
    pros: ["Muy espaciosa", "Fácil de limpiar", "Construcción resistente", "Múltiples niveles"],
    cons: ["Precio elevado", "Requiere espacio"],
    affiliateAmazon: "https://amazon.com.mx/",
    affiliateMercado: "https://mercadolibre.com.mx/",
    featured: true
  },
  {
    id: 2,
    name: "Alimento Premium Wysong Epigen 90",
    category: "Alimentación",
    species: ["Hurones"],
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400",
    rating: 4.9,
    price: "$899",
    originalPrice: "$1,099",
    description: "Alimento súper premium para hurones con 90% de proteína. Formulado según las necesidades nutricionales específicas de los mustélidos.",
    pros: ["Alta proteína", "Ingredientes naturales", "Digestión fácil", "Recomendado por veterinarios"],
    cons: ["Solo en tiendas especializadas"],
    affiliateAmazon: "https://amazon.com.mx/",
    affiliateMercado: null,
    featured: true
  },
  {
    id: 3,
    name: "Terrario de Vidrio Exo Terra 90x45x60",
    category: "Hábitats",
    species: ["Reptiles", "Anfibios"],
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400",
    rating: 4.7,
    price: "$3,299",
    originalPrice: "$3,799",
    description: "Terrario de vidrio diseñado especialmente para reptiles y anfibios. Incluye ventilación superior e inferior y puertas frontales de fácil acceso.",
    pros: ["Excelente ventilación", "Fácil acceso", "Cristal transparente", "Diseño profesional"],
    cons: ["Pesado", "Instalación compleja"],
    affiliateAmazon: "https://amazon.com.mx/",
    affiliateMercado: "https://mercadolibre.com.mx/",
    featured: false
  },
  {
    id: 4,
    name: "Calentador Cerámico para Reptiles 100W",
    category: "Calefacción",
    species: ["Reptiles", "Erizos"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25d6cd8d2?w=400",
    rating: 4.6,
    price: "$599",
    originalPrice: "$749",
    description: "Emisor de calor cerámico que proporciona calor sin luz. Ideal para mantener temperaturas constantes día y noche.",
    pros: ["No emite luz", "Calor constante", "Duradero", "Termostato compatible"],
    cons: ["Requiere termostato", "Consumo energético"],
    affiliateAmazon: "https://amazon.com.mx/",
    affiliateMercado: "https://mercadolibre.com.mx/",
    featured: false
  },
  {
    id: 5,
    name: "Rueda de Ejercicio Silent Runner",
    category: "Ejercicio",
    species: ["Erizos", "Hurones"],
    image: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=400",
    rating: 4.5,
    price: "$1,299",
    originalPrice: "$1,499",
    description: "Rueda de ejercicio ultra silenciosa diseñada para pequeños mamíferos. Superficie de carrera segura y fácil de limpiar.",
    pros: ["Completamente silenciosa", "Superficie segura", "Fácil limpieza", "Base estable"],
    cons: ["Precio alto", "Tamaño limitado"],
    affiliateAmazon: "https://amazon.com.mx/",
    affiliateMercado: null,
    featured: false
  },
  {
    id: 6,
    name: "Mix de Semillas para Aves Exóticas",
    category: "Alimentación",
    species: ["Aves"],
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400",
    rating: 4.4,
    price: "$399",
    originalPrice: "$499",
    description: "Mezcla premium de semillas y frutas deshidratadas formulada específicamente para aves exóticas tropicales.",
    pros: ["Variedad de semillas", "Rico en vitaminas", "Aves lo prefieren", "Precio accesible"],
    cons: ["Requiere refrigeración", "Caducidad corta"],
    affiliateAmazon: "https://amazon.com.mx/",
    affiliateMercado: "https://mercadolibre.com.mx/",
    featured: false
  }
];

const categorias = ["Todos", "Hábitats", "Alimentación", "Calefacción", "Ejercicio", "Accesorios"];
const especies = ["Todos", "Hurones", "Erizos", "Reptiles", "Aves", "Anfibios"];

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="productos" />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 border border-emerald-200 mb-6">
              🛍️ Recomendaciones de Expertos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
              Productos Recomendados
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reseñas detalladas de productos para mascotas exóticas. Seleccionados y probados por expertos en el cuidado de especies especiales.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtros de búsqueda</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>{categoria}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Especie</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  {especies.map((especie) => (
                    <option key={especie} value={especie}>{especie}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
                  Filtrar
                </button>
              </div>
            </div>
          </div>

          {/* Featured Products */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos Destacados</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {productos.filter(p => p.featured).map((producto) => (
                <div key={producto.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={producto.image} 
                        alt={producto.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">
                          {producto.category}
                        </span>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">⭐</span>
                          <span className="text-sm text-gray-600">{producto.rating}/5</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{producto.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{producto.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-emerald-600">{producto.price}</span>
                          {producto.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">{producto.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {producto.affiliateAmazon && (
                            <a 
                              href={producto.affiliateAmazon}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded hover:bg-orange-600 transition-colors"
                            >
                              Amazon
                            </a>
                          )}
                          {producto.affiliateMercado && (
                            <a 
                              href={producto.affiliateMercado}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded hover:bg-yellow-600 transition-colors"
                            >
                              MercadoLibre
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Products */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos los Productos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.map((producto) => (
                <div key={producto.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={producto.image} 
                      alt={producto.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-medium rounded-full">
                        {producto.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-white rounded-full px-2 py-1">
                        <span className="text-yellow-500 mr-1">⭐</span>
                        <span className="text-xs text-gray-700">{producto.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{producto.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{producto.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-1">Ideal para:</div>
                      <div className="flex flex-wrap gap-1">
                        {producto.species.map((especie, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {especie}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-bold text-emerald-600">{producto.price}</span>
                        {producto.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">{producto.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {producto.affiliateAmazon && (
                        <a 
                          href={producto.affiliateAmazon}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors text-center"
                        >
                          Amazon
                        </a>
                      )}
                      {producto.affiliateMercado && (
                        <a 
                          href={producto.affiliateMercado}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 bg-yellow-500 text-white text-sm font-medium rounded-lg hover:bg-yellow-600 transition-colors text-center"
                        >
                          MercadoLibre
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AdSense Placeholder */}
          <div className="mt-16 bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500">Google AdSense - Banner publicitario</p>
            <p className="text-sm text-gray-400 mt-1">728x90 Leaderboard</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}