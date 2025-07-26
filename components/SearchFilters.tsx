'use client';

import { useState } from 'react';

interface SearchFiltersProps {
  ciudades: string[];
  categorias: string[];
  onSearch: (filters: SearchFilters) => void;
}

interface SearchFilters {
  ciudad: string;
  categoria: string;
  busqueda: string;
}

export default function SearchFilters({ ciudades, categorias, onSearch }: SearchFiltersProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    ciudad: '',
    categoria: '',
    busqueda: ''
  });

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = { ciudad: '', categoria: '', busqueda: '' };
    setFilters(emptyFilters);
    onSearch(emptyFilters);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 mb-8">
      <div className="grid md:grid-cols-4 gap-4">
        {/* Búsqueda por texto */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar hotel..."
            value={filters.busqueda}
            onChange={(e) => handleFilterChange('busqueda', e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-2xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-gray-800 bg-white placeholder-gray-500"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Filtro por ciudad */}
        <div className="relative">
          <select
            value={filters.ciudad}
            onChange={(e) => handleFilterChange('ciudad', e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-2xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none bg-white text-gray-800"
          >
            <option value="">Todas las ciudades</option>
            {ciudades.map((ciudad) => (
              <option key={ciudad} value={ciudad}>
                {ciudad}
              </option>
            ))}
          </select>
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        {/* Filtro por categoría */}
        <div className="relative">
          <select
            value={filters.categoria}
            onChange={(e) => handleFilterChange('categoria', e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-2xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none bg-white text-gray-800"
          >
            <option value="">Todas las categorías</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria.replace('-', ' ').toUpperCase()}
              </option>
            ))}
          </select>
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        </div>

        {/* Botón limpiar filtros */}
        <button
          onClick={clearFilters}
          className="flex items-center justify-center px-6 py-3 rounded-2xl text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition-all duration-300 font-semibold"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Limpiar
        </button>
      </div>

      {/* Filtros activos */}
      {(filters.ciudad || filters.categoria || filters.busqueda) && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-800 font-medium">Filtros activos:</span>
          {filters.busqueda && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
              Texto: &quot;{filters.busqueda}&quot;
              <button
                onClick={() => handleFilterChange('busqueda', '')}
                className="ml-2 hover:text-blue-600"
              >
                ×
              </button>
            </span>
          )}
          {filters.ciudad && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-800">
              Ciudad: {filters.ciudad}
              <button
                onClick={() => handleFilterChange('ciudad', '')}
                className="ml-2 hover:text-green-600"
              >
                ×
              </button>
            </span>
          )}
          {filters.categoria && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
              Categoría: {filters.categoria.replace('-', ' ')}
              <button
                onClick={() => handleFilterChange('categoria', '')}
                className="ml-2 hover:text-purple-600"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}