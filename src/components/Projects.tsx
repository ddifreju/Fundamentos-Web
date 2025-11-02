// src/components/Projects.tsx

import { useState } from 'react';
import { ProjectCard } from "./ProjectCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';

// CSS do Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Dados do Projeto
const projectData = [
  {
    title: "DevLivery",
    description: "Uma aplicação web completa para um serviço de delivery local...",
    tags: ["React", "TypeScript", "Node.js", "TailwindCSS"],
    liveUrl: "https://dev-livery-front.vercel.app/login",
    githubUrl: "https://github.com/ddifreju",
    videoUrl: "https://www.youtube.com/watch?v=eHUuTQ0760c"
  },
  {
    title: "Blog Pessoal",
    description: "Um blog que desenvolvi para partilhar os meus conhecimentos...",
    tags: ["React", "JavaScript", "CSS"],
    liveUrl: "https://teal-gingersnap-ad5909.netlify.app/",
    githubUrl: "https://github.com/ddifreju",
    videoUrl: "https://www.youtube.com/watch?v=PBGV_Dyp2CA"
  },
  {
    title: "Monitoramento Fitness",
    description: "Uma plataforma para utilizadores acompanharem os seus treinos...",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://teal-gingersnap-ad5909.netlify.app/",
    githubUrl: "https://github.com/ddifreju",
    videoUrl: "https://www.youtube.com/watch?v=eHUuTQ0760c"
  }
];

type Project = typeof projectData[0];

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(projectData[0]);
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.realIndex;
    setActiveProject(projectData[currentIndex]);
  };

  // Função para converter URL do YouTube para URL de embed
  const getEmbedUrl = (url: string) => {
    let embedUrl = url.replace('/watch?v=', '/embed/');
    // Adiciona suporte para URLs curtos (youtu.be)
    embedUrl = embedUrl.replace('youtu.be/', 'www.youtube.com/embed/');

    // Adiciona parâmetros de autoplay e mute
    const separator = embedUrl.includes('?') ? '&' : '?';
    return `${embedUrl}${separator}autoplay=1&mute=1`;
  };

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto"> {/* <-- ESTE DIV ABRE (LINHA 66) */}
        <h2
          className="text-5xl md:text-6xl font-black text-center mb-16 font-poppins tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #ec4899, #7e22ce)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Meus Projetos
        </h2>

        {/* --- 1. CARROSSEL (SWIPER) --- */}
        <div className="max-w-6xl mx-auto mb-12">
          <Swiper
            onSlideChange={handleSlideChange}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
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
              <SwiperSlide key={project.title} style={{ width: '300px', height: 'auto' }}>
                <div className="h-full py-4">
                  <ProjectCard
                    {...project}
                    onExpandClick={() => setExpandedProject(project)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        {/* --- MODAL (CARD EXPANDIDO) --- */}
        {expandedProject && (
          <>
            <div
              className="card-expand-overlay"
              style={{ display: 'block' }}
              onClick={() => setExpandedProject(null)}
            />

            <div className="card-expanded-content">
              <button
                className="expand-button"
                onClick={() => setExpandedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex h-full flex-col">

                {/* FAIXA BRANCA PEQUENA */}
                <div className="content-container">
                  {/* Layout para Título e Stacks Lado a Lado */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <h3 className="text-xl lg:text-2xl font-bold text-teal-700 mb-2 lg:mb-0">
                      {expandedProject.title}
                    </h3>
                    <div className="flex overflow-x-auto gap-2">
                      {expandedProject.tags.map(tag => (
                        <span key={tag} className="flex-shrink-0 bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full m-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* VÍDEO VEM DEPOIS E OCUPA O RESTO DO ESPAÇO */}
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="100%"
                    src={getEmbedUrl(expandedProject.videoUrl)}
                    title={expandedProject.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>

              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}