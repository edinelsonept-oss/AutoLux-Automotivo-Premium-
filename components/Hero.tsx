"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images-porsche.imgix.net/-/media/315CB1E7EED34E27A22EB78601705DC9_2D4000AF2DBA4F2F8ED9F497CFCD4F0F_CZ22V11IX0001-911-turbo-front-side?w=1920&ar=647%3A440&q=85&auto=format"
          alt="Porsche 911 Turbo S"
          fill
          priority
          unoptimized
          className="object-cover scale-110 opacity-70"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/40 to-luxury-black"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20 md:pt-0">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-luxury-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6"
        >
          Bem-vindo à AutoLux
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[clamp(2.5rem,8vw,5rem)] leading-tight font-semibold mb-4 md:mb-6"
        >
          <span className="gradient-text">Dirija o</span><br />
          <span className="text-white italic">Futuro</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 font-light"
        >
          Performance excepcional, luxo inigualável e tecnologia de ponta. 
          Descubra a excelência automotiva em cada detalhe.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          <Link href="/modelos" className="btn-shine w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2">
            Explorar Modelos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </motion.div>
    </section>
  );
}
