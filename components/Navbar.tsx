"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 py-4 md:py-6 ${scrolled ? "bg-luxury-black/90 backdrop-blur-md border-b border-white/5 py-3 md:py-4" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center border border-gray-700 group-hover:border-luxury-gold transition-colors">
              <span className="text-luxury-gold font-serif font-bold text-lg md:text-xl">A</span>
            </div>
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-white">Auto<span className="text-luxury-gold">Lux</span></span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide">Início</a>
            <a href="#catalog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide">Modelos</a>
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide">Sobre</a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide">Contato</a>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="hidden lg:block px-6 py-2 border border-gray-600 text-sm font-medium text-white rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300">
              Entrar (Mock)
            </button>
            
            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass mt-2 mx-4 rounded-2xl p-6 absolute w-[calc(100%-2rem)]"
          >
            <div className="flex flex-col space-y-4">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2 text-lg">Início</a>
              <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2 text-lg">Modelos</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2 text-lg">Sobre</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2 text-lg">Contato</a>
              <hr className="border-white/10" />
              <button onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 border border-gray-600 text-sm font-medium text-white rounded-full hover:border-white hover:bg-white hover:text-black transition-all">
                Entrar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
