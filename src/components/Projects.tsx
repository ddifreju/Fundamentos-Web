import { useState } from 'react';
import { ProjectCard } from "./ProjectCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);

  const getEmbedUrl = (url: string) => {
    let embedUrl = url.replace('/watch?v=', '/embed/');
    embedUrl = embedUrl.replace('youtu.be/', 'www.youtube.com/embed/');
    const separator = embedUrl.includes('?') ? '&' : '?';
    return `${embedUrl}${separator}autoplay=1&mute=1`;
  };

  // const total = projectData.length;
  const duplicatedProjects = [...projectData, ...projectData];


  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
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

        <div className="max-w-6xl mx-auto mb-12">
          <Swiper
            effect="coverflow"
            centeredSlides={true}
            grabCursor={true}
            slidesPerView={3}
            spaceBetween={80}
            // Loop infinito suave
            loop={false}
            rewind={true}
            loopAdditionalSlides={projectData.length * 6} // buffer grande de clones
            speed={900}
            resistanceRatio={0.85}
            watchSlidesProgress={true}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={
              autoPlayEnabled
                ? {
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
                : false
            }
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full"
          >
            {duplicatedProjects.map((project  ) => (
              <SwiperSlide key={project.title} style={{ width: 300, height: 'auto' }}>
                
                <div className="h-full py-4">
                  <ProjectCard
                    {...project}
                    
                    onExpandClick={() => {
                      setExpandedProject(project);
                      setAutoPlayEnabled(false);
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


        </div>

        {expandedProject && (
          <>
            <div
              className="card-expand-overlay"
              style={{ display: 'block' }}
              onClick={() => {
                setExpandedProject(null);
                setAutoPlayEnabled(true);
              }}
            />
            <div className="card-expanded-content">
              <button
                className="expand-button"
                onClick={() => {
                  setExpandedProject(null);
                  setAutoPlayEnabled(true);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex h-full flex-col">
                <div className="content-container">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <h3 className="text-xl lg:text-2xl font-bold text-teal-700 mb-2 lg:mb-0">
                      {expandedProject.title}
                    </h3>
                    <div className="flex overflow-x-auto gap-2">
                      {expandedProject.tags.map(tag => (
                        <span key={tag} className="flex-shrink-0 bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full m-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

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
