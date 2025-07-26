import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ChatAssistant from "../../components/ChatAssistant";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="inicio" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-green-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-emerald-400/20 rounded-full blur-lg animate-pulse delay-500"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
              🦎 Portal Educativo #1
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            Cuida a tu
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              mascota exótica
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Guías especializadas, consejos veterinarios y productos recomendados para hurones, erizos, reptiles y aves exóticas. 
            Todo lo que necesitas para brindar el mejor cuidado a tu compañero especial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/fichas"
              className="group relative inline-flex items-center px-8 py-4 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
            >
              <span className="mr-2">Explorar especies</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 rounded-2xl text-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <span className="mr-2">Leer artículos</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </Link>
          </div>
          
          <div className="mt-16 flex justify-center items-center space-x-8 text-gray-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">25+</div>
              <div className="text-sm">Especies cubiertas</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">100+</div>
              <div className="text-sm">Artículos especializados</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">50+</div>
              <div className="text-sm">Veterinarios listados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 border border-emerald-200 mb-6">
              ✨ Lo que nos hace únicos
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
              ¿Por qué elegir ExoMascotas?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nos especializamos en brindar información confiable y especializada para el cuidado de mascotas exóticas y poco comunes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">Guías Especializadas</h4>
                <p className="text-gray-600 leading-relaxed">
                  Fichas detalladas de cada especie con información sobre alimentación, hábitat, cuidados específicos y necesidades veterinarias
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">🦎</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">Mascotas Exóticas</h4>
                <p className="text-gray-600 leading-relaxed">
                  Hurones, erizos, reptiles, aves exóticas y más. Información especializada para especies poco comunes con necesidades específicas
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">🩺</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">Red de Veterinarios</h4>
                <p className="text-gray-600 leading-relaxed">
                  Directorio de veterinarios especializados en mascotas exóticas en toda la República Mexicana con filtros por ciudad y especialidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 mb-8 backdrop-blur-sm">
            🚀 Comienza tu aventura
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para ser el mejor 
            <br />
            <span className="text-emerald-200">cuidador?</span>
          </h3>
          
          <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Explora nuestras guías especializadas y comienza a brindar el cuidado excepcional que tu mascota exótica merece
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/fichas"
              className="group relative inline-flex items-center px-10 py-5 rounded-2xl text-lg font-bold text-emerald-700 bg-white hover:bg-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              <span className="mr-3">Ver todas las especies</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/servicios/veterinarios"
              className="inline-flex items-center px-10 py-5 rounded-2xl text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <span className="mr-3">Encontrar veterinario</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </div>
  );
}
