import { notFound } from "next/navigation";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

// Mock data para especies
interface EspecieData {
  name: string;
  scientificName: string;
  image: string;
  description: string;
  difficulty: string;
  lifespan: string;
  size: string;
  weight: string;
  origin: string;
  temperament: string[];
  habitat: {
    temperature: string;
    humidity: string;
    space: string;
    substrate: string;
  };
  diet: {
    primary: string;
    frequency: string;
    supplements: string;
    forbidden: string[];
  };
  care: {
    grooming: string;
    exercise: string;
    veterinary: string;
    socialization: string;
  };
  products: Array<{
    name: string;
    category: string;
    rating: number;
    price: string;
    affiliate: string;
  }>;
}

const especiesData: { [key: string]: EspecieData } = {
  "huron": {
    name: "Hurón",
    scientificName: "Mustela putorius furo",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800",
    description: "El hurón doméstico es un mamífero carnívoro muy activo y social que pertenece a la familia de las comadrejas. Son compañeros leales y juguetones que requieren atención y cuidados específicos.",
    difficulty: "Intermedio",
    lifespan: "7-10 años",
    size: "Mediano (35-50 cm)",
    weight: "0.5-2 kg",
    origin: "Europa",
    temperament: ["Juguetón", "Social", "Curioso", "Activo"],
    habitat: {
      temperature: "18-22°C",
      humidity: "40-60%",
      space: "Jaula grande multi-nivel + tiempo libre diario",
      substrate: "Papel, toallas o mantas lavables"
    },
    diet: {
      primary: "Alimento comercial para hurones de alta calidad",
      frequency: "3-4 veces al día",
      supplements: "Vitaminas según recomendación veterinaria",
      forbidden: ["Chocolate", "Cebolla", "Ajo", "Lácteos", "Frutas dulces"]
    },
    care: {
      grooming: "Baño mensual, corte de uñas quincenal",
      exercise: "Mínimo 4 horas de juego libre diario",
      veterinary: "Vacunación anual, desparasitación semestral",
      socialization: "Requiere interacción social constante"
    },
    products: [
      {
        name: "Jaula Marshall Ferret Nation",
        category: "Hábitat",
        rating: 4.8,
        price: "$2,499",
        affiliate: "https://amazon.com.mx/"
      },
      {
        name: "Alimento Wysong Epigen 90",
        category: "Alimentación",
        rating: 4.7,
        price: "$899",
        affiliate: "https://amazon.com.mx/"
      },
      {
        name: "Hammock para Hurón",
        category: "Accesorios",
        rating: 4.6,
        price: "$299",
        affiliate: "https://mercadolibre.com.mx/"
      }
    ]
  },
  "erizo-africano": {
    name: "Erizo Africano",
    scientificName: "Atelerix albiventris",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800",
    description: "El erizo africano pigmeo es un pequeño mamífero nocturno cubierto de espinas. Son mascotas únicas que requieren cuidados específicos de temperatura y manejo.",
    difficulty: "Intermedio",
    lifespan: "3-5 años",
    size: "Pequeño (15-20 cm)",
    weight: "300-600 g",
    origin: "África Central",
    temperament: ["Nocturno", "Tímido", "Independiente", "Territorial"],
    habitat: {
      temperature: "22-26°C (crítico)",
      humidity: "30-70%",
      space: "Terrario mínimo 75x50 cm",
      substrate: "Virutas de papel o fleece"
    },
    diet: {
      primary: "Alimento comercial para erizos + insectos",
      frequency: "1-2 veces al día",
      supplements: "Proteína animal (grillos, tenebrios)",
      forbidden: ["Lácteos", "Nueces", "Semillas", "Frutas ácidas"]
    },
    care: {
      grooming: "Baño ocasional con agua tibia",
      exercise: "Rueda de ejercicio + exploración",
      veterinary: "Revisión anual, cuidado de uñas",
      socialization: "Manipulación suave y gradual"
    },
    products: [
      {
        name: "Terrario para Erizo 80x50",
        category: "Hábitat",
        rating: 4.5,
        price: "$1,299",
        affiliate: "https://mercadolibre.com.mx/"
      },
      {
        name: "Calentador Cerámico 50W",
        category: "Calefacción",
        rating: 4.7,
        price: "$399",
        affiliate: "https://amazon.com.mx/"
      }
    ]
  }
};

type Props = {
  params: Promise<{ especie: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const especie = especiesData[resolvedParams.especie];
  if (!especie) {
    return {
      title: "Especie no encontrada - ExoMascotas"
    };
  }

  return {
    title: `${especie.name} - Ficha Completa | ExoMascotas`,
    description: `Guía completa para el cuidado de ${especie.name} (${especie.scientificName}). Alimentación, hábitat, cuidados y productos recomendados.`,
    keywords: `${especie.name.toLowerCase()}, ${especie.scientificName}, cuidado ${especie.name.toLowerCase()}, mascota exótica`,
  };
}

export default async function EspeciePage({ params }: Props) {
  const resolvedParams = await params;
  const especie = especiesData[resolvedParams.especie];

  if (!especie) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="fichas" />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-500 hover:text-emerald-600">Inicio</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/fichas" className="text-gray-500 hover:text-emerald-600">Fichas</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-emerald-600 font-medium">{especie.name}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={especie.image} 
                  alt={especie.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{especie.name}</h1>
                <p className="text-gray-600 italic mb-4">{especie.scientificName}</p>
                <p className="text-gray-700 mb-6">{especie.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Expectativa de vida:</span>
                    <p className="text-gray-600">{especie.lifespan}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Tamaño:</span>
                    <p className="text-gray-600">{especie.size}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Peso:</span>
                    <p className="text-gray-600">{especie.weight}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Origen:</span>
                    <p className="text-gray-600">{especie.origin}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Temperamento */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Temperamento</h2>
            <div className="flex flex-wrap gap-2">
              {especie.temperament.map((trait: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Hábitat */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hábitat y Entorno</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌡️ Temperatura</h3>
                <p className="text-gray-600">{especie.habitat.temperature}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">💧 Humedad</h3>
                <p className="text-gray-600">{especie.habitat.humidity}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Espacio</h3>
                <p className="text-gray-600">{especie.habitat.space}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛏️ Sustrato</h3>
                <p className="text-gray-600">{especie.habitat.substrate}</p>
              </div>
            </div>
          </div>

          {/* Alimentación */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Alimentación</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🍽️ Dieta Principal</h3>
                <p className="text-gray-600">{especie.diet.primary}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">⏰ Frecuencia</h3>
                <p className="text-gray-600">{especie.diet.frequency}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">⚠️ Alimentos Prohibidos</h3>
                <div className="flex flex-wrap gap-2">
                  {especie.diet.forbidden.map((food: string, index: number) => (
                    <span key={index} className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">
                      {food}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Productos Recomendados */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos Recomendados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {especie.products.map((product, index: number) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <span className="text-emerald-600 font-bold">{product.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="text-sm text-gray-600">{product.rating}/5</span>
                  </div>
                  <a 
                    href={product.affiliate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Ver precio
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* AdSense Placeholder */}
          <div className="bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-8">
            <p className="text-gray-500">Google AdSense - Banner publicitario</p>
            <p className="text-sm text-gray-400 mt-1">728x90 Leaderboard</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <Link 
              href="/fichas"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              ← Volver a fichas
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(especiesData).map((especie) => ({
    especie,
  }));
}