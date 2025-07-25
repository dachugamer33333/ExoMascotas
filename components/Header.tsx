'use client';

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  currentPage?: "inicio" | "hoteles";
}

export default function Header({ currentPage = "inicio" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl p-2 shadow-lg">
              <span className="text-xl">🐾</span>
            </div>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent hover:from-emerald-700 hover:to-green-700 transition-all duration-300">
              PetViajes
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                currentPage === "inicio" 
                  ? "bg-emerald-100 text-emerald-700 font-semibold shadow-sm" 
                  : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              Inicio
            </Link>
            <Link 
              href="/hoteles" 
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                currentPage === "hoteles" 
                  ? "bg-emerald-100 text-emerald-700 font-semibold shadow-sm" 
                  : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              Hoteles
            </Link>
            
            <div className="ml-6 flex items-center space-x-3">
              <button className="text-gray-600 hover:text-emerald-600 transition-colors p-2 rounded-xl hover:bg-emerald-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <Link
                href="/hoteles"
                className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explorar
              </Link>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-white/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                  currentPage === "inicio" 
                    ? "bg-emerald-100 text-emerald-700 font-semibold shadow-sm" 
                    : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                🏠 Inicio
              </Link>
              
              <Link 
                href="/hoteles" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                  currentPage === "hoteles" 
                    ? "bg-emerald-100 text-emerald-700 font-semibold shadow-sm" 
                    : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                🏨 Hoteles
              </Link>
              
              <div className="border-t border-gray-200 pt-4">
                <Link
                  href="/hoteles"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-xl text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg font-semibold"
                >
                  🔍 Explorar hoteles
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}