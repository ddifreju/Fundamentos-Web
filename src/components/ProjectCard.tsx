// src/components/ProjectCard.tsx
import { GithubLogo } from "@phosphor-icons/react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  onExpandClick: () => void;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div
      className="group bg-white/70 backdrop-blur-xl p-6 rounded-3xl
                 shadow-[0_10px_40px_rgba(184,167,217,0.25)] flex flex-col h-full
                 transition-all duration-300 will-change-transform
                 hover:shadow-[0_20px_60px_rgba(184,167,217,0.35)] hover:-translate-y-1"
    >
      <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700 text-center">
        {props.title}
      </h3>

      <p className="text-zinc-700 flex-grow mb-4 text-center">
        {props.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {props.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold px-3 py-1 rounded-full m-1 bg-teal-100 text-teal-800 group-hover:shadow-md transition-shadow"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/60 flex items-center justify-center">
        {props.githubUrl && (
          <a
            href={props.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-700 hover:text-teal-600 hover:underline transition-colors"
          >
            <GithubLogo size={20} weight="bold" />
            Código Fonte
          </a>
        )}
      </div>

      <button
        onClick={props.onExpandClick}
        className="mt-4 w-full py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition"
      >
        Ver mais sobre o projeto
      </button>
    </div>
  );
}
