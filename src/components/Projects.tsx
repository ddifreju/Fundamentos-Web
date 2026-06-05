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
    description: "Uma aplicação web completa para um serviço de delivery de alimentos, feita em equipe para a conclusão do bootcamp de desenvolvimento fullstack.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/Grupo-06-Turma-JavaScript-07/Devlivery",
    videoUrl: "https://www.youtube.com/watch?v=eHUuTQ0760c"
  },
  {
    title: "Blog Pessoal",
    description: "Página de blog pessoal criado para aprimorar minhas habilidades em CRUD e em autenticação de login.",
    tags: ["React", "JavaScript", "CSS", "JWT", "Node.js"],
    githubUrl: "https://github.com/ddifreju/blogpessoal",
    videoUrl: "https://www.youtube.com/watch?v=PBGV_Dyp2CA"
  },
  {
    title: "FitHub",
    description: "Uma plataforma para utilizadores acompanharem os seus treinos e personal trainers gerenciarem seus alunos, feita em grupo.",
    tags: ["HTML", "Node.js", "Nest.js", "React", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Grupo-06-Turma-JavaScript-07/FrontFitHub",
    videoUrl: "https://www.youtube.com/watch?v=eHUuTQ0760c"
  },
  {
    title: "Portfolio Dev",
    description: "Site portfolio pessoal para apresentar meus projetos e habilidades como desenvolvedora full-stack.",
    tags: ["HTML", "CSS", "React", "Tailwind", "JavaScript"],
    githubUrl: "https://github.com/ddifreju/Fundamentos-Web",
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
          className="text-5xl md:text-6xl font-black text-center mb-16 font-poppins tracking-tight title-shadow"
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
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            autoplay={autoPlayEnabled ? { delay: 9000, disableOnInteraction: false } : false}
            slidesPerView={3}
            spaceBetween={0}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            breakpoints={{
              0: { slidesPerView: 1, coverflowEffect: { depth: 150, rotate: 25 } },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation
            pagination={{ clickable: true }}
            className="w-full overflow-hidden"
          >

            {duplicatedProjects.map((project) => (
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
                    <h3 className="text-xl lg:text-2xl font-bold text-sky-500 mb-2 lg:mb-0">
                      {expandedProject.title}
                    </h3>
                    <div className="flex overflow-x-auto gap-2">
                      {expandedProject.tags.map(tag => (
                        <span key={tag} className="flex-shrink-0 bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full m-1">
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
