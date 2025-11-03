// src/components/Header.tsx

import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'; // [!code ++]

const navLinks = [
  { to: 'hero', label: 'Início' },
  { to: 'projetos', label: 'Projetos' },
  { to: 'habilidades', label: 'Habilidades' },
  { to: 'contato', label: 'Contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // [!code ++]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? 'bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(184,167,217,0.25)] border-b border-white/60' : 'bg-white/30 backdrop-blur-md border-b border-white/40'}`}>
      <div className="container mx-auto flex justify-between items-center px-5 py-3">
        <h1 className="text-xl font-extrabold font-poppins tracking-tight  text-text-dark">Juliana Freddi</h1>

        {/* --- NAVEGAÇÃO DESKTOP --- */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-accent-purple after:content-[''] after:block after:h-0.5 after:bg-accent-purple after:rounded-full after:mt-1"
              className="cursor-pointer text-text-dark/80 hover:text-text-dark transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* --- BOTÃO HAMBÚRGUER --- */}
        <div className="md:hidden"> {/* [!code ++] */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-dark"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div> {/* [!code ++] */}

      </div>

      {/* --- MENU MOBILE (Dropdown) --- */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 py-4 border-t border-white/40"> {/* [!code ++] */}
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-accent-purple after:content-[''] after:block after:h-0.5 after:bg-accent-purple after:rounded-full after:mt-1"
              className="cursor-pointer text-text-dark/80 hover:text-text-dark transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )} {/* [!code ++] */}
    </header>
  );
}