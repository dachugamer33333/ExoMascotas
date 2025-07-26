import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de ExoMascotas - Nuestra Misión y Equipo",
  description: "Conoce más sobre ExoMascotas: nuestro propósito de educar sobre el cuidado de mascotas exóticas y conectar a propietarios con expertos.",
  keywords: "acerca de ExoMascotas, misión, equipo, mascotas exóticas, educación",
};

const teamMembers = [
  {
    name: "Dr. Sofia Méndez",
    role: "Directora y Fundadora",
    specialty: "Veterinaria especializada en animales exóticos",
    image: "https://images.unsplash.com/photo-1594824375042-8b6f3e4b3b8f?w=300",
    description: "15 años de experiencia en medicina veterinaria con especialización en especies exóticas."
  },
  {
    name: "Carlos Ramírez",
    role: "Editor de Contenido",
    specialty: "Biólogo especialista en comportamiento animal",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300",
    description: "Responsable de crear y revisar todo el contenido educativo de nuestra plataforma."
  },
  {
    name: "Ana Torres",
    role: "Coordinadora de Veterinarios",
    specialty: "Administración y gestión de red",
    image: "https://images.unsplash.com/photo-1594824375042-8b6f3e4b3b8f?w=300",
    description: "Conecta a propietarios con veterinarios especializados en todo México."
  }
];

const stats = [
  { number: "50,000+", label: "Usuarios registrados" },
  { number: "100+", label: "Artículos publicados" },
  { number: "25+", label: "Especies cubiertas" },
  { number: "75+", label: "Veterinarios en red" }
];

export default function AcercaDePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="acerca" />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 border border-emerald-200 mb-6">
              🌱 Nuestra Historia
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
              Acerca de ExoMascotas
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Conectando a propietarios de mascotas exóticas con el conocimiento y los expertos que necesitan para brindar el mejor cuidado posible.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Misión</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                En <strong>ExoMascotas</strong>, creemos que todas las mascotas, sin importar cuán poco comunes sean, merecen el mejor cuidado posible. 
                Nuestro propósito es democratizar el acceso a información especializada sobre mascotas exóticas y conectar a sus propietarios 
                con los recursos y expertos que necesitan.
              </p>
              <p className="mb-4">
                Fundada por veterinarios y biólogos especialistas, nuestra plataforma nació de la necesidad de llenar el vacío de información 
                confiable sobre especies como hurones, erizos, reptiles, aves exóticas y otros animales de compañía poco convencionales.
              </p>
              <p>
                Trabajamos cada día para crear una comunidad educada y responsable de propietarios de mascotas exóticas en México, 
                promoviendo el bienestar animal a través del conocimiento y la conexión con profesionales especializados.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educación Especializada</h3>
              <p className="text-gray-600">
                Proporcionamos información basada en evidencia científica y experiencia veterinaria para ayudar a los propietarios 
                a tomar decisiones informadas sobre el cuidado de sus mascotas.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comunidad Responsable</h3>
              <p className="text-gray-600">
                Fomentamos una comunidad de propietarios responsables que priorizan el bienestar de sus mascotas exóticas 
                y comparten experiencias valiosas.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red de Expertos</h3>
              <p className="text-gray-600">
                Conectamos a propietarios con veterinarios especializados en mascotas exóticas, asegurando acceso 
                a atención médica especializada en todo México.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crecimiento Sostenible</h3>
              <p className="text-gray-600">
                Promovemos prácticas de tenencia responsable que consideran tanto el bienestar animal como 
                el impacto en el ecosistema local.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 mb-12 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">Nuestro Impacto</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-emerald-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nuestro Equipo</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes preguntas o sugerencias?</h3>
            <p className="text-gray-600 mb-6">
              Nos encanta escuchar de nuestra comunidad. Si tienes ideas para mejorar nuestro contenido 
              o necesitas ayuda específica, no dudes en contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@exomascotas.mx"
                className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
              >
                info@exomascotas.mx
              </a>
              <button className="px-6 py-3 border border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-colors">
                Síguenos en redes
              </button>
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