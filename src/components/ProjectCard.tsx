// src/components/ProjectCard.tsx
import { useRef } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, tags, liveUrl, githubUrl }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (+y / 25).toFixed(2);
    const rotateY = (-x / 25).toFixed(2);
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const onMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group bg-white/70 backdrop-blur-xl p-7  rounded-3xl border border-white/60
                 shadow-[0_10px_40px_rgba(184,167,217,0.25)] flex flex-col h-full
                 transition-transform duration-200 will-change-transform
                 hover:shadow-[0_20px_60px_rgba(184,167,217,0.35)] hover:-translate-y-1"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Título com glow sutil */}
      <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700">
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-text-dark/80 flex-grow mb-4">
        {description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold px-3 py-1 rounded-full m-1 bg-cloud-blue/60 text-text-dark
                       group-hover:shadow-md transition-shadow"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 pt-4 border-t border-white/60 flex items-center justify-center gap-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 font-bold hover:text-teal-700 hover:underline transition-colors"
          >
            Confira abaixo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dark hover:text-teal-600 hover:underline transition-colors"
          >
            Código Fonte
          </a>
        )}
      </div>
    </div>
  );
}
