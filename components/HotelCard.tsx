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

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
        {/* Image placeholder with enhanced gradient */}
        <div className="relative h-56 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-emerald-700 shadow-lg backdrop-blur-sm">
              🐾 Pet-Friendly
            </span>
          </div>
          <div className="relative z-10 text-center text-white">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
              <span className="text-5xl block mb-2">🏨</span>
              <p className="text-sm font-medium">{hotel.ciudad}</p>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/20 rounded-full blur-sm animate-pulse delay-1000"></div>
        </div>
        
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
              {hotel.nombre}
            </h3>
          </div>
          
          <div className="flex items-center text-gray-600 mb-4">
            <div className="bg-emerald-100 rounded-full p-1 mr-3">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="font-medium">{hotel.ciudad}, {hotel.estado}</span>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
            {hotel.descripcion}
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-4 rounded-2xl mb-6 border border-blue-100/50">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 text-sm mb-1">
                  Política de mascotas:
                </h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  {hotel.politica}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              {hotel.precio}
            </p>
          </div>
          
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 text-sm mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Servicios incluidos:
            </h4>
            <div className="flex flex-wrap gap-2">
              {hotel.servicios.map((servicio, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 text-xs px-3 py-2 rounded-xl transition-colors duration-300 border border-gray-200 hover:border-emerald-200"
                >
                  {servicio}
                </span>
              ))}
            </div>
          </div>
          
          <a
            href={hotel.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative block w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white text-center py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center">
              Ver disponibilidad
              <svg className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}