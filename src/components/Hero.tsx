import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <div id="hero" className="min-h-screen pt-24 flex flex-col justify-center items-center text-center p-4 md:p-8">
      <h1
        className="text-4xl sm:text-5xl md:text-7xl font-black text-center font-poppins tracking-tight title-shadow"
        style={{
          background: 'linear-gradient(135deg, #ec4899, #7e22ce)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Juliana Freddi
      </h1>

      <div className="mt-3 text-md sm:text-lg md:text-2xl text-purple-900 font-poppins">
        <TypeAnimation
          sequence={[
            'Desenvolvedora Full-Stack', 1400,
            'Crio sites e landing pages', 1400,
            'Conheça meu trabalho', 1400,
            'Vamos construir algo incrível juntos!', 1400,
          ]}
          repeat={Infinity}
          speed={40}
          deletionSpeed={60}
        />
      </div>

      <p className="mt-6 max-w-2xl text-text-dark/100 font-nunito">
        Me preocupo em entender exatamente o que você precisa para entregar soluções sob medida.
        Explore meus projetos e veja experiências digitais eficientes.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="#projetos"
          className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-text-dark font-semibold
                     bg-gradient-to-r from-baby-pink via-accent-purple to-baby-blue
                     shadow-lg shadow-baby-pink/30 hover:shadow-accent-purple/30
                     transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
        >
          Ver Projetos
        </a>
        <a
          href="#contato"
          className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold
                     text-text-dark bg-white/70 backdrop-blur-md border border-white/70
                     hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
        >
          Entrar em Contato
        </a>
      </div>
    </div>
  );
}
