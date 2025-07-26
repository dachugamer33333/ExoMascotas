import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fichas de Especies - ExoMascotas | Guías Completas",
  description: "Fichas detalladas de mascotas exóticas: hurones, erizos, reptiles, aves. Cuidados, alimentación, hábitat y productos recomendados.",
  keywords: "fichas mascotas exóticas, guía hurones, cuidado reptiles, erizos domésticos, aves exóticas",
};

// Mock data para especies
const especies = [
  {
    id: "huron",
    name: "Hurón",
    scientificName: "Mustela putorius furo",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400",
    description: "Mamífero doméstico muy activo y social, ideal para familias experimentadas.",
    difficulty: "Intermedio",
    lifespan: "7-10 años",
    size: "Mediano"
  },
  {
    id: "erizo-africano",
    name: "Erizo Africano",
    scientificName: "Atelerix albiventris",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400",
    description: "Pequeño mamífero nocturno con espinas, requiere cuidados específicos de temperatura.",
    difficulty: "Intermedio",
    lifespan: "3-5 años",
    size: "Pequeño"
  },
  {
    id: "gecko-leopardo",
    name: "Gecko Leopardo",
    scientificName: "Eublepharis macularius",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400",
    description: "Reptil nocturno ideal para principiantes, fácil de cuidar y manejar.",
    difficulty: "Principiante",
    lifespan: "15-20 años",
    size: "Pequeño"
  },
  {
    id: "iguana-verde",
    name: "Iguana Verde",
    scientificName: "Iguana iguana",
    image: "https://images.unsplash.com/photo-1555825380-60eeb97e2dd4?w=400",
    description: "Reptil grande que requiere terrarios amplios y cuidados especializados.",
    difficulty: "Avanzado",
    lifespan: "20+ años",
    size: "Grande"
  },
  {
    id: "conure-sol",
    name: "Conure del Sol",
    scientificName: "Aratinga solstitialis",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400",
    description: "Ave colorida y vocal, muy social y necesita mucha atención.",
    difficulty: "Intermedio",
    lifespan: "20-30 años",
    size: "Mediano"
  },
  {
    id: "chinchilla",
    name: "Chinchilla",
    scientificName: "Chinchilla chinchilla",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400",
    description: "Roedor de pelaje ultra suave que requiere baños de polvo especiales.",
    difficulty: "Intermedio",
    lifespan: "10-15 años",
    size: "Pequeño"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Principiante": return "bg-green-100 text-green-800";
    case "Intermedio": return "bg-yellow-100 text-yellow-800";
    case "Avanzado": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export default function FichasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="fichas" />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 border border-emerald-200 mb-6">
              🦎 Guías Especializadas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
              Fichas de Especies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Guías completas para el cuidado de mascotas exóticas. Información detallada sobre alimentación, hábitat, cuidados y productos recomendados.
            </p>
          </div>

          {/* Species Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {especies.map((especie) => (
              <div key={especie.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={especie.image} 
                      alt={especie.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${getDifficultyColor(especie.difficulty)}`}>
                        {especie.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                      {especie.name}
                    </h3>
                    
                    <p className="text-sm text-gray-500 italic mb-3">
                      {especie.scientificName}
                    </p>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {especie.description}
                    </p>
                    
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>Vida: {especie.lifespan}</span>
                      <span>Tamaño: {especie.size}</span>
                    </div>
                    
                    <Link 
                      href={`/fichas/${especie.id}`}
                      className="inline-flex items-center w-full justify-center px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      Ver ficha completa
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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