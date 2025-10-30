// src/components/Hero.tsx

export function Hero() {
  return (
    <div id="hero" className="min-h-screen pt-24 flex flex-col justify-center items-center text-center p-4 md:p-8">

      <h1
        className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#0d9488] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]" /* Cor: Verde-azulado escuro e saturado (Teal-600) */
      >
        Juliana Freddi
      </h1>

      <p
        className="mt-4 text-md sm:text-lg md:text-2xl text-[#4338ca]" /* Cor: Azul-indigo profundo (Indigo-700) */
      >
        Desenvolvedora Full-Stack Criativa | Construindo o Futuro da Web
      </p>

      <p
        className="mt-6 max-w-xl md:max-w-2xl text-[#374151]" /* Cor: Cinza-azulado bem escuro (Slate-700) */
      >
        Bem-vindo ao meu portfólio. Explore meus projetos e veja como transformo ideias complexas em experiências digitais elegantes e eficientes.
      </p>

      {/*  botões*/}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="#projetos"
          className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold
               bg-gradient-to-r from-baby-pink via-accent-purple to-baby-blue
               shadow-lg shadow-baby-pink/30 hover:shadow-accent-purple/30
               transition-transform duration-300 hover:-translate-y-0.5"
        >
          Ver Projetos
        </a>

        <a
          href="#contato"
          className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold
               text-text-dark bg-white/70 backdrop-blur-md border border-white/70
               hover:bg-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          Entrar em Contato
        </a>
      </div>

    </div>
  )
}