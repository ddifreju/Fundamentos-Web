// src/components/Header.tsx
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

const navLinks = [
  { to: 'hero', label: 'Início' },
  { to: 'projetos', label: 'Projetos' },
  { to: 'habilidades', label: 'Habilidades' },
  { to: 'contato', label: 'Contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? 'bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(184,167,217,0.25)] border-b border-white/60' : 'bg-white/30 backdrop-blur-md border-b border-white/40'}`}>
      <div className="container mx-auto flex justify-between items-center px-5 py-3">
        <h1 className="text-xl font-extrabold font-poppins tracking-tight text-text-dark">Juliana Freddi</h1>

        <nav className="flex gap-6">
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
      </div>
    </header>
  );
}
