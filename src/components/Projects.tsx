// src/components/Projects.tsx

import { useState } from 'react';
import { ProjectCard } from "./ProjectCard";

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Usaremos EffectCoverflow, Navigation e Pagination para o carrossel de cards
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper';

// CSS do Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Para o efeito 3D nos cards
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const projectData = [
  {
    title: "DevLivery",
    description: "Uma aplicação web completa para um serviço de delivery local, com cardápio, carrinho de compras e sistema de pedidos.",
    tags: ["React", "TypeScript", "Node.js", "TailwindCSS"],
    liveUrl: "https://dev-livery-front.vercel.app/login",
    githubUrl: "https://github.com/ddifreju",
    videoUrl: "https://www.youtube.com/watch?v=eHUuTQ0760c"
  },
  {
    title: "Blog Pessoal",
    description: "Um blog que desenvolvi para partilhar os meus conhecimentos e artigos sobre programação, com foco em performance e design.",
    tags: ["React", "JavaScript", "CSS"],
    liveUrl: "https://teal-gingersnap-ad5909.netlify.app/",
    githubUrl: "https://github.com/ddifreju",
    videoUrl: "https://www.youtube.com/watch?v=PBGV_Dyp2CA"
  },
  {
    title: "Monitoramento Fitness",
    description: "Uma plataforma para utilizadores acompanharem os seus treinos, progresso e metas de fitness, com gráficos e estatísticas.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://teal-gingersnap-ad5909.netlify.app/",
    githubUrl: "https://github.com/ddifreju",
    videoUrl: "https://www.youtube.com/watch?v=eHUuTQ0760c"

  }
];

type Project = typeof projectData[0];

export function Projects() {
  // O estado agora guarda o projeto ATIVO, e já começa com o primeiro da lista
  const [activeProject, setActiveProject] = useState<Project | null>(projectData[0]);

  // Esta função será chamada toda vez que o slide mudar
  const handleSlideChange = (swiper: SwiperClass) => {
    // 'realIndex' funciona melhor com carrosséis em loop
    const currentIndex = swiper.realIndex;
    setActiveProject(projectData[currentIndex]);
  };

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2
          className="text-5xl md:text-6xl font-black text-center mb-16 font-poppins tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #8bd3dd, #0d9488)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Meus Projetos
        </h2>

        {/* Este parágrafo exibe o título do projeto ativo, centralizado */}
        <p className="text-xl text-center text-white mb-12">
          {activeProject?.title || "Selecione um projeto"} {/* Mostra o título ativo ou um texto padrão */}
        </p>

        {/* CARROSSEL DE CARDS (AGORA É O PRINCIPAL) */}
        <div className="max-w-4xl mx-auto mb-12"> {/* Margem para separar do vídeo */}
          <Swiper
            onSlideChange={handleSlideChange} // Atualiza o projeto ativo quando o slide muda
            effect={'coverflow'} // Efeito 3D para o card do meio em destaque
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'} // Ajusta o número de slides visíveis
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full"
          >
            {projectData.map(project => (
              <SwiperSlide key={project.title} style={{ width: '300px', height: '420px' }}>
                {/* O ProjectCard é o conteúdo de cada slide */}
                <div className="h-full">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- SECÇÃO DO VÍDEO (AGORA ABAIXO DOS CARDS, GRANDE E QUADRADO) --- */}
        {activeProject && (
          <div className="mt-16 max-w-4xl mx-auto transition-opacity duration-500">
            <div className="w-full max-w-2xl aspect-video mx-auto bg-white/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/60">
              {activeProject.videoUrl && activeProject.videoUrl.includes('youtube.com') ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={activeProject.videoUrl.replace('/watch?v=', '/embed/')}
                  title={activeProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                  <p className="text-zinc-400">Vídeo de demonstração indisponível.</p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}