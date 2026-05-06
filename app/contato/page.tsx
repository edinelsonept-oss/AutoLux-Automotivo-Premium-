"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContatoPage() {
  return (
    <main className="bg-luxury-black min-h-screen text-white font-sans selection:bg-luxury-gold selection:text-black">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">Suporte Premium</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6">Entre em Contato</h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Nossa equipe de concierge está à disposição para atender a todas as suas solicitações com o mais alto padrão de excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif mb-8 border-b border-white/10 pb-4">Informações de Contato</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center bg-luxury-gold/5 shrink-0">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Telefone Principal</h3>
                  <p className="text-gray-400 font-light">(91) 98058-9674</p>
                  <p className="text-xs text-gray-500 mt-1">Disponível 24/7 para clientes premium</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center bg-luxury-gold/5 shrink-0">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">E-mail Corporativo</h3>
                  <p className="text-gray-400 font-light break-all">alexviniciusdesantanaeliaselia@gmail.com</p>
                  <p className="text-xs text-gray-500 mt-1">Retorno garantido em até 2 horas úteis</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center bg-luxury-gold/5 shrink-0">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Showroom Belém</h3>
                  <p className="text-gray-400 font-light">Av. Almirante Barroso</p>
                  <p className="text-gray-400 font-light">Belém, PA</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shrink-0">
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Horário de Funcionamento</h3>
                  <p className="text-gray-400 font-light">Segunda - Sexta: 09:00 - 19:00</p>
                  <p className="text-gray-400 font-light">Sábado: 09:00 - 14:00 (Apenas com agendamento)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-8 md:p-10 rounded-2xl"
          >
            <h2 className="text-2xl font-serif mb-6">Envie uma Mensagem</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Nome Completo</label>
                  <input type="text" className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Telefone</label>
                  <input type="tel" className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors" placeholder="(00) 00000-0000" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">E-mail</label>
                <input type="email" className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors" placeholder="seu.email@exemplo.com" />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Assunto do Interesse</label>
                <select className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors appearance-none">
                  <option>Agendar Test Drive</option>
                  <option>Informações sobre Veículo</option>
                  <option>Serviços Financeiros</option>
                  <option>Outro Assunto</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              
              <button className="w-full py-4 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-[#b08d2c] transition-colors uppercase tracking-wider text-sm mt-4">
                Enviar Solicitação (Mock)
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
