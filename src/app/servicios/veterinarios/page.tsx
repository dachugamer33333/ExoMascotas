import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veterinarios Especializados - ExoMascotas | Encuentra Expertos",
  description: "Directorio de veterinarios especializados en mascotas exóticas en México. Encuentra expertos en hurones, reptiles, aves y más cerca de ti.",
  keywords: "veterinarios mascotas exóticas, veterinario hurones, especialista reptiles, veterinario aves",
};

// Mock data para veterinarios
const veterinarios = [
  {
    id: 1,
    name: "Dr. Carmen Rodríguez",
    specialty: ["Hurones", "Pequeños mamíferos"],
    clinic: "Clínica Veterinaria Exóticos CDMX",
    city: "Ciudad de México",
    state: "CDMX",
    phone: "55-1234-5678",
    email: "dra.carmen@exoticos.mx",
    experience: "8 años",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
  },
  {
    id: 2,
    name: "Dr. Miguel Hernández",
    specialty: ["Reptiles", "Anfibios"],
    clinic: "Hospital Veterinario Reptilia",
    city: "Guadalajara",
    state: "Jalisco",
    phone: "33-9876-5432",
    email: "dr.miguel@reptilia.mx",
    experience: "12 años",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
  },
  {
    id: 3,
    name: "Dra. Ana López",
    specialty: ["Aves exóticas", "Primates pequeños"],
    clinic: "Centro Veterinario Aves y Más",
    city: "Monterrey",
    state: "Nuevo León",
    phone: "81-5555-1234",
    email: "dra.ana@avesymas.mx",
    experience: "6 años",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1594824375042-8b6f3e4b3b8f?w=400"
  }
];

const estados = [
  "Todos", "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", 
  "Chihuahua", "CDMX", "Coahuila", "Colima", "Durango", "Estado de México", "Guanajuato", 
  "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", 
  "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", 
  "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

const especialidades = [
  "Todos", "Hurones", "Erizos", "Reptiles", "Aves exóticas", "Pequeños mamíferos", 
  "Anfibios", "Primates pequeños", "Chinchillas", "Conejos"
];

export default function VeterinariosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="servicios" />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 border border-emerald-200 mb-6">
              🩺 Red de Especialistas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
              Veterinarios Especializados
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Encuentra veterinarios especializados en mascotas exóticas cerca de ti. Profesionales certificados con experiencia en especies poco comunes.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtros de búsqueda</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  {estados.map((estado) => (
                    <option key={estado} value={estado}>{estado}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Especialidad</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  {especialidades.map((especialidad) => (
                    <option key={especialidad} value={especialidad}>{especialidad}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
                  Buscar
                </button>
              </div>
            </div>
          </div>

          {/* Veterinarios Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {veterinarios.map((vet) => (
              <div key={vet.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={vet.image} 
                      alt={vet.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{vet.name}</h3>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">⭐</span>
                        <span className="text-sm text-gray-600">{vet.rating}/5</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-900 font-medium">{vet.clinic}</p>
                    <p className="text-gray-600 text-sm">{vet.city}, {vet.state}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Especialidades:</p>
                    <div className="flex flex-wrap gap-1">
                      {vet.specialty.map((spec, index) => (
                        <span key={index} className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    <p>📞 {vet.phone}</p>
                    <p>✉️ {vet.email}</p>
                    <p>🎓 {vet.experience} de experiencia</p>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
                    Contactar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-emerald-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">¿Eres veterinario especializado?</h3>
            <p className="text-emerald-100 mb-6">
              Únete a nuestra red de profesionales y conecta con propietarios de mascotas exóticas
            </p>
            <button className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors">
              Registrar mi clínica
            </button>
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