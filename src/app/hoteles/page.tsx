'use client';

import Link from "next/link";
import { useState, useMemo } from "react";
import hoteles from "../../../data/hoteles.json";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import HotelCard from "../../../components/HotelCard";
import SearchFilters from "../../../components/SearchFilters";
import ChatAssistant from "../../../components/ChatAssistant";

// Metadata se maneja en layout.tsx para client components

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
  rating: number;
  categoria: string;
}

interface SearchFilters {
  ciudad: string;
  categoria: string;
  busqueda: string;
}

export default function HotelesPage() {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    ciudad: '',
    categoria: '',
    busqueda: ''
  });

  const filteredHotels = useMemo(() => {
    return hoteles.hoteles.filter((hotel: Hotel) => {
      const matchesCiudad = !searchFilters.ciudad || hotel.ciudad === searchFilters.ciudad;
      const matchesCategoria = !searchFilters.categoria || hotel.categoria === searchFilters.categoria;
      const matchesBusqueda = !searchFilters.busqueda || 
        hotel.nombre.toLowerCase().includes(searchFilters.busqueda.toLowerCase()) ||
        hotel.ciudad.toLowerCase().includes(searchFilters.busqueda.toLowerCase()) ||
        hotel.descripcion.toLowerCase().includes(searchFilters.busqueda.toLowerCase());
      
      return matchesCiudad && matchesCategoria && matchesBusqueda;
    });
  }, [searchFilters]);

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
  };
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
          
          {/* Search bar preview - Solo visual */}
          <div className="max-w-md mx-auto">
            <div className="text-center text-gray-600 mb-2">
              <span className="text-sm">👇 Usa los filtros de búsqueda para encontrar tu hotel ideal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchFilters
            ciudades={hoteles.ciudades}
            categorias={hoteles.categorias}
            onSearch={handleSearch}
          />
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
              {filteredHotels.length > 0 ? `${filteredHotels.length} hoteles encontrados` : 'Nuestros hoteles destacados'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {filteredHotels.length > 0 
                ? 'Hoteles que coinciden con tu búsqueda' 
                : 'Cada alojamiento ha sido verificado para garantizar la mejor experiencia para ti y tu mascota'
              }
            </p>
          </div>
          
          {filteredHotels.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredHotels.map((hotel: Hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20 max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No se encontraron hoteles</h3>
                <p className="text-gray-600 mb-6">
                  Intenta ajustar tus filtros de búsqueda para encontrar más opciones.
                </p>
                <button
                  onClick={() => setSearchFilters({ ciudad: '', categoria: '', busqueda: '' })}
                  className="inline-flex items-center px-6 py-3 rounded-2xl text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg font-semibold"
                >
                  Ver todos los hoteles
                </button>
              </div>
            </div>
          )}
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
      <ChatAssistant />
    </div>
  );
}