// src/components/Header.tsx

// Importamos o componente de Link da biblioteca react-scroll
import { Link } from 'react-scroll';

// Lista dos links do menu para facilitar a manutenção
const navLinks = [
  { to: 'hero', label: 'Início' },
  { to: 'projetos', label: 'Projetos' },
  { to: 'habilidades', label: 'Habilidades' },
  { to: 'contato', label: 'Contato' },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        {/* Seu Nome ou Logo */}
        <h1 className="text-xl font-bold">Juliana Freddi</h1>

        {/* Links de Navegação */}
        <nav className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to} // ID da seção para onde rolar
              spy={true} // Marca o link como ativo quando a seção está na tela
              smooth={true} // Ativa a animação de rolagem suave
              offset={-70} // Deslocamento para ajustar a posição final da rolagem
              duration={500} // Duração da animação em milissegundos
              className="cursor-pointer hover:text-yellow-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}