// src/components/About.tsx

import { motion } from 'framer-motion';
import { Sparkle, Heart, Code } from '@phosphor-icons/react';

export function About() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="container mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-center mb-16 font-poppins"
          style={{
            background: 'linear-gradient(135deg, #FFD6E8, #B8A7D9, #C7EEFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Sobre Mim
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Foto com efeitos flutuantes */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Círculos decorativos ao redor da foto */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-baby-pink rounded-full opacity-60 blur-2xl animate-pulse-soft"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-baby-blue rounded-full opacity-60 blur-2xl animate-pulse-soft"></div>
              
              {/* Foto */}
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://via.placeholder.com/400x400/FFD6E8/4A4A4A?text=Sua+Foto" 
                  alt="Juliana Freddi"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Ícones flutuantes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8"
              >
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <Code size={28} weight="duotone" className="text-accent-purple" />
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6"
              >
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <Heart size={28} weight="fill" className="text-baby-pink" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Texto sobre você */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-[0_10px_40px_rgba(199,238,255,0.25)] border border-white/60">
              <div className="flex items-center gap-3 mb-4">
                <Sparkle size={32} weight="fill" className="text-accent-purple animate-pulse" />
                <h3 className="text-3xl font-bold text-text-dark font-poppins">
                  Olá! Eu sou a Juliana
                </h3>
              </div>
              
              <p className="text-lg text-text-dark leading-relaxed mb-4 font-nunito">
                Desenvolvedora Full-Stack apaixonada por criar experiências digitais elegantes e funcionais. 
                Transformo ideias em realidade através de código limpo e design intuitivo.
              </p>
              
              <p className="text-lg text-text-dark leading-relaxed mb-4 font-nunito">
                Com expertise em <span className="font-semibold text-accent-purple">React, TypeScript, Node.js</span> e 
                muito amor por detalhes, construo projetos que combinam tecnologia e criatividade.
              </p>
              
              <p className="text-lg text-text-dark leading-relaxed font-nunito">
                Quando não estou programando, você me encontra explorando novas tecnologias, 
                tomando café ☕ e planejando o próximo projeto incrível!
              </p>

              {/* Estatísticas fofas */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center bg-cloud-pink p-4 rounded-2xl">
                  <p className="text-3xl font-black text-accent-purple font-poppins">5+</p>
                  <p className="text-sm text-text-dark font-quicksand">Projetos</p>
                </div>
                <div className="text-center bg-cloud-blue p-4 rounded-2xl">
                  <p className="text-3xl font-black text-accent-purple font-poppins">10+</p>
                  <p className="text-sm text-text-dark font-quicksand">Tecnologias</p>
                </div>
                <div className="text-center bg-baby-pink/30 p-4 rounded-2xl">
                  <p className="text-3xl font-black text-accent-purple font-poppins">∞</p>
                  <p className="text-sm text-text-dark font-quicksand">Café</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
