"use client";

import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">Auto<span className="text-luxury-gold">Lux</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Redefinindo o padrão de excelência automotiva. Curadoria exclusiva dos veículos mais desejados do mundo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="text-white font-medium tracking-wider uppercase text-sm mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Início</a></li>
              <li><a href="#catalog" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Nossos Modelos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Serviços Financeiros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm">Agendar Test Drive</a></li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="text-white font-medium tracking-wider uppercase text-sm mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>Av. Almirante Barroso<br />Belém, PA</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>(91) 98058-9674</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>alexviniciusdesantanaeliaselia@gmail.com</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="text-white font-medium tracking-wider uppercase text-sm mb-6">Newsletter Limitada</h4>
            <p className="text-gray-400 text-sm mb-4">Receba acesso antecipado às novas chegadas antes do público.</p>
            <form className="flex flex-col space-y-3" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Seu email corporativo" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-luxury-gold transition-colors" />
              <button className="w-full py-3 bg-luxury-gold text-black font-semibold text-sm rounded-lg hover:bg-[#b08d2c] transition-colors">
                Inscrever-se
              </button>
            </form>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} AutoLux Premium Cars. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
