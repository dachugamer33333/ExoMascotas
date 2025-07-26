import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - ExoMascotas | Artículos sobre Mascotas Exóticas",
  description: "Artículos especializados sobre el cuidado de mascotas exóticas. Consejos de expertos, guías de alimentación y cuidados veterinarios.",
  keywords: "blog mascotas exóticas, artículos hurones, cuidado reptiles, consejos veterinarios",
};

// Mock data para artículos
const articles = [
  {
    id: "cuidados-basicos-huron",
    title: "Cuidados Básicos del Hurón Doméstico",
    excerpt: "Todo lo que necesitas saber para mantener a tu hurón saludable y feliz. Desde la alimentación hasta el acondicionamiento del espacio.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400",
    date: "2024-01-15",
    category: "Hurones"
  },
  {
    id: "alimentacion-reptiles-principiantes",
    title: "Guía de Alimentación para Reptiles: Principiantes",
    excerpt: "Aprende los fundamentos de la alimentación reptil. Qué comer, cuándo y cómo crear un plan nutricional equilibrado.",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400",
    date: "2024-01-12",
    category: "Reptiles"
  },
  {
    id: "habitat-erizo-domestico",
    title: "Creando el Hábitat Perfecto para tu Erizo",
    excerpt: "Diseña un espacio cómodo y seguro para tu erizo africano. Temperatura, iluminación y accesorios esenciales.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400",
    date: "2024-01-10",
    category: "Erizos"
  },
  {
    id: "aves-exoticas-primeros-pasos",
    title: "Aves Exóticas: Primeros Pasos como Propietario",
    excerpt: "Consejos esenciales para nuevos propietarios de aves exóticas. Socialización, entrenamiento y cuidados veterinarios.",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400",
    date: "2024-01-08",
    category: "Aves"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="blog" />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 border border-emerald-200 mb-6">
              📚 Centro de Conocimiento
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
              Blog ExoMascotas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Artículos especializados, consejos de expertos y guías detalladas para el cuidado de mascotas exóticas
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(article.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${article.id}`}
                      className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                    >
                      Leer más
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
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