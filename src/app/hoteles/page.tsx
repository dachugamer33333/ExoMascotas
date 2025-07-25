import Link from "next/link";
import { Metadata } from "next";
import hoteles from "../../../data/hoteles.json";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import HotelCard from "../../../components/HotelCard";

export const metadata: Metadata = {
  title: "Hoteles Pet-Friendly en México | PetViajes",
  description: "Descubre los mejores hoteles que aceptan mascotas en México. Encuentra alojamientos pet-friendly en destinos como Riviera Maya, San Miguel de Allende, Ciudad de México y más.",
  keywords: "hoteles pet-friendly México, alojamiento mascotas, viajes con perros, hoteles que aceptan mascotas, turismo pet-friendly",
};

interface Hotel {
  id: number;
  nombre: string;
  ciudad: string;
  estado: string;
  politica: string;
  imagen: string;
  enlace: string;
  descripcion: string;
  precio: string;
  servicios: string[];
}

export default function HotelesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="hoteles" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_120%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-emerald-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-green-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
              🏨 Catálogo completo
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            Hoteles Pet-Friendly
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              en México
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre alojamientos excepcionales que dan la bienvenida a ti y tu mascota. 
            Cada hotel ha sido cuidadosamente seleccionado y verificado.
          </p>
          
          {/* Search bar preview */}
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20">
            <div className="flex items-center space-x-3 px-4 py-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-gray-500">Buscar por ciudad...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
              Nuestros hoteles destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada alojamiento ha sido verificado para garantizar la mejor experiencia para ti y tu mascota
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {hoteles.hoteles.map((hotel: Hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Estamos constantemente agregando nuevos hoteles pet-friendly a nuestra plataforma
          </p>
          <Link
            href="/"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
          >
            Volver al inicio
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}