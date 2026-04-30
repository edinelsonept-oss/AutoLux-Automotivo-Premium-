"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-luxury-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/1280px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg" 
                  alt="Showroom de carros premium" 
                  fill
                  unoptimized
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <p className="text-luxury-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">Sobre a AutoLux</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
              A Excelência na Forma de <span className="text-luxury-gold italic">Automóveis</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-sm md:text-base font-light">
              <p>
                Fundada com a visão de redefinir o mercado de automóveis de luxo, a AutoLux não é apenas uma concessionária, é um clube exclusivo para os verdadeiros entusiastas do design e da performance.
              </p>
              <p>
                Cada veículo em nosso showroom passa por uma curadoria meticulosa. Nós procuramos as edições mais raras, os motores mais potentes e os designs mais icônicos do mundo para satisfazer nossos clientes exigentes.
              </p>
              <p>
                Nosso compromisso vai além da venda. Oferecemos um serviço de concierge dedicado, garantindo que sua experiência conosco seja tão impecável e exclusiva quanto o carro que você conduzirá.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <a href="#contact" className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors">
                Fale com um Especialista
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
