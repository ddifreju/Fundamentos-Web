// src/components/ProjectCard.tsx

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/60 shadow-[0_10px_40px_rgba(184,167,217,0.25)] 
                flex flex-col h-full transition-all duration-300 hover:shadow-[0_20px_60px_rgba(184,167,217,0.35)] hover:-translate-y-1">

      
      <h3 className="text-2xl font-bold text-[#a78bfa] mb-3"> {/* Roxo/Lilás */}
        {title}
      </h3>
      
      {/* Usando o cinza-azulado escuro para máxima legibilidade */}
      <p className="text-[#374151] mb-4">{description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {tags.map(tag => (
          <span key={tag} className="bg-zinc-700/80 text-zinc-300 text-xs font-semibold px-3 py-1 rounded-full m-1">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-700 flex items-center justify-center gap-6">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-bold hover:text-yellow-500 transition-colors">
            Ver Online
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
            Código Fonte
          </a>
        )}
      </div>
    </div>
  )
}