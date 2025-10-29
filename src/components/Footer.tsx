// src/components/Footer.tsx

import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Footer() {
  // Pega o ano atual automaticamente para o copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900/50 py-8 px-4">
      <div className="container mx-auto text-center text-zinc-400">
        
        {/* Ícones de Redes Sociais */}
        <div className="flex justify-center gap-6 mb-4">
          <a 
            href="https://github.com/ddifreju" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <GithubLogo size={32} />
          </a>
          <a 
            href="https://www.linkedin.com/in/juliana-freddi/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <LinkedinLogo size={32} />
          </a>
        </div>

        {/* Texto de Copyright */}
        <p className="text-sm">
          &copy; {currentYear} Juliana Freddi. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2 text-zinc-500">
          Feito com ❤️ usando React, TypeScript e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}