import { Sparkle, Heart, Code } from '@phosphor-icons/react';

export function About() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="container mx-auto">
        <h2
          className="text-5xl md:text-6xl font-black text-center mb-16 font-poppins tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #ec4899, #7e22ce)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Sobre Mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Foto e orbes */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Orbes com delays diferentes */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-baby-pink rounded-full opacity-60 blur-2xl animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-baby-blue rounded-full opacity-60 blur-2xl animate-[float_3.5s_ease-in-out_infinite_0.8s]"></div>

              {/* Foto flutuante */}
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl animate-float">
                <img
                  src="https://ik.imagekit.io/logoempregadev/Foto%20Juliana%20Freddi%20(1)-min.jpg?updatedAt=1761788251441"
                  alt="Juliana Freddi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Ícones decorativos flutuando com fases diferentes */}
              <div className="absolute -top-8 -right-8 bg-white p-3 rounded-full shadow-lg animate-[float_4s_ease-in-out_infinite_0.2s]">
                <Code size={28} weight="duotone" className="text-accent-purple" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-full shadow-lg animate-[float_4s_ease-in-out_infinite_1s]">
                <Heart size={28} weight="fill" className="text-baby-pink" />
              </div>
            </div>
          </div>

          {/* Texto em cartão com vidro */}
          <div className="space-y-6 bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-[0_10px_40px_rgba(199,238,255,0.25)] border border-white/60 animate-[float_7s_ease-in-out_infinite]">
            <div className="flex items-center gap-3 mb-2">
              <Sparkle size={32} weight="fill" className="text-accent-purple animate-[float_5s_ease-in-out_infinite_0.6s]" />
              <h3 className="text-3xl font-bold text-text-dark font-poppins">
                Olá! Eu sou a Juliana
              </h3>
            </div>

            <p className="text-lg text-text-dark/85 leading-relaxed font-nunito">
              Desenvolvedora Full-Stack apaixonada por criar experiências digitais elegantes e funcionais.
              Código limpo, design intuitivo e muito carinho nos detalhes.
            </p>

            <p className="text-lg text-text-dark/85 leading-relaxed font-nunito">
              Experiência com <span className="font-semibold text-accent-purple">React, TypeScript e Node.js</span>.
              Amo transformar ideias em produtos reais.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center bg-cloud-pink p-4 rounded-2xl animate-[float_4.5s_ease-in-out_infinite]">
                <p className="text-3xl font-black text-accent-purple font-poppins">5+</p>
                <p className="text-sm text-text-dark font-nunito">Projetos</p>
              </div>
              <div className="text-center bg-cloud-blue p-4 rounded-2xl animate-[float_4.8s_ease-in-out_infinite_0.4s]">
                <p className="text-3xl font-black text-accent-purple font-poppins">10+</p>
                <p className="text-sm text-text-dark font-nunito">Tecnologias</p>
              </div>
              <div className="text-center bg-baby-pink/30 p-4 rounded-2xl animate-[float_5.2s_ease-in-out_infinite_0.8s]">
                <p className="text-3xl font-black text-accent-purple font-poppins">∞</p>
                <p className="text-sm text-text-dark font-nunito">Café</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
