"use client";

import { motion } from "motion/react";

const stats = [
  { value: "150+", label: "Modelos Premium" },
  { value: "15", label: "Anos de Excelência" },
  { value: "5k+", label: "Clientes Satisfeitos" },
  { value: "24/7", label: "Suporte VIP" },
];

export function Stats() {
  return (
    <section className="py-12 md:py-20 bg-luxury-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-2"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-1 md:mb-2">{stat.value}</p>
              <p className="text-gray-500 text-xs sm:text-sm tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
