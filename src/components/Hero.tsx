// src/components/Hero.tsx

export function Hero() {
  return (
    <div id="hero" className="min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-8 pt-24">
      
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

      {/* Os botões continuam como estavam, pois já têm um bom contraste */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="#projetos"
          className="bg-yellow-500 text-zinc-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-all shadow-lg transform hover:scale-105"
        >
          Ver Projetos
        </a>
        <a
          href="#contato"
          className="bg-white/10 backdrop-blur-sm border border-zinc-700 text-zinc-200 font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transition-all shadow-lg transform hover:scale-105"
        >
          Entrar em Contato
        </a>
      </div>
    </div>
  )
}