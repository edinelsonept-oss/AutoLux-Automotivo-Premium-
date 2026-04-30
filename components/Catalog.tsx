"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CARS, Car } from "@/lib/cars";
import { X, ChevronRight } from "lucide-react";

export function Catalog() {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [maxPrice, setMaxPrice] = useState("5000000");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const brands = useMemo(() => {
    const list = new Set(CARS.map(c => c.brand));
    return ["all", ...Array.from(list)];
  }, []);

  const filteredCars = useMemo(() => {
    return CARS.filter(car => {
      if (selectedBrand !== "all" && car.brand !== selectedBrand) return false;
      if (car.price > parseInt(maxPrice)) return false;
      return true;
    });
  }, [selectedBrand, maxPrice]);

  return (
    <section id="catalog" className="py-12 md:py-20 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <p className="text-luxury-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 md:mb-4">Nosso Catálogo</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-6">Escolha Seu Legado</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">Cada veículo em nossa coleção representa o ápice da engenharia automotiva e design sofisticado.</p>
        </motion.div>
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-4 md:p-6 mb-8 md:mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wide mb-2">Marca</label>
              <select 
                title="Marca"
                value={selectedBrand}
                onChange={e => setSelectedBrand(e.target.value)}
                className="luxury-input w-full px-4 py-3 bg-[#111111] appearance-none"
              >
                <option value="all">Todas as Marcas</option>
                {brands.filter(b => b !== "all").map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="flex justify-between text-xs text-gray-500 uppercase tracking-wide mb-2">
                <span>Preço Máximo</span>
                <span className="text-luxury-gold">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(Number(maxPrice))}
                </span>
              </label>
              <div className="px-2 py-4">
                <input 
                  type="range"
                  min="500000"
                  max="5000000"
                  step="100000"
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                  className="w-full accent-luxury-gold outline-none"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCars.map(car => (
              <motion.div
                layout
                key={car.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedCar(car)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-luxury-gold text-xs font-semibold tracking-wider uppercase mb-1">{car.brand}</p>
                    <h3 className="text-xl font-serif text-white">{car.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-2xl text-white font-light">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(car.price)}
                    </p>
                    <p className="text-gray-400 text-sm">{car.mileage.toLocaleString('pt-BR')} km</p>
                  </div>
                  <button className="w-full py-3 border border-gray-600 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                    Detalhes <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredCars.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-400">
              Nenhum veículo encontrado com estes filtros.
            </div>
          )}
        </div>
      </div>

      {/* Car Detail Modal */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-luxury-gray border border-white/10 rounded-3xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black rounded-full text-white backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  fill
                  unoptimized
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto">
                <p className="text-luxury-gold text-xs tracking-[0.2em] uppercase mb-2">{selectedCar.brand}</p>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">{selectedCar.name}</h3>
                <p className="text-3xl font-light text-gray-300 mb-8">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(selectedCar.price)}
                </p>
                
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4 border-b border-white/10 pb-2">Especificações</h4>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">0-100 km/h</span>
                    <span className="text-white font-medium">{selectedCar.specs.acceleration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Velocidade Máxima</span>
                    <span className="text-white font-medium">{selectedCar.specs.topSpeed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Potência</span>
                    <span className="text-white font-medium">{selectedCar.specs.power}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Quilometragem</span>
                    <span className="text-white font-medium">{selectedCar.mileage.toLocaleString('pt-BR')} km</span>
                  </div>
                </div>
                
                <button className="w-full py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                  Demonstrar Interesse (Mock)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
