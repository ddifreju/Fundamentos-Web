import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Skill = {
  name: string;
  icon: React.ReactNode;
  color?: string;
  href: string;
};

const skillsData: Skill[] = [
  { name: 'HTML', icon: <FaHtml5 />, href: 'https://developer.mozilla.org/docs/Web/HTML', color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt />, href: 'https://developer.mozilla.org/docs/Web/CSS', color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, href: 'https://developer.mozilla.org/docs/Web/JavaScript', color: 'text-yellow-400' },
  { name: 'TypeScript', icon: <SiTypescript />, href: 'https://www.typescriptlang.org/', color: 'text-blue-600' },
  { name: 'React', icon: <FaReact />, href: 'https://react.dev/', color: 'text-cyan-400' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, href: 'https://tailwindcss.com/', color: 'text-cyan-500' },
  { name: 'Node.js', icon: <FaNodeJs />, href: 'https://nodejs.org/', color: 'text-green-500' },
  { name: 'Figma', icon: <FaFigma />, href: 'https://www.figma.com/', color: 'text-pink-500' },
  { name: 'Docker', icon: <FaDocker />, href: 'https://www.docker.com/', color: 'text-blue-500' },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">

        {/* Título com badge */}
        <div className="text-center mb-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/60 border border-white/70 rounded-full px-3 py-1 text-zinc-600">
            Tech Stack
          </span>
        </div>

        <h2
          className="text-5xl md:text-6xl font-black text-center mb-12 font-poppins tracking-tight title-shadow"
          style={{
            background: 'linear-gradient(135deg, #ec4899, #7e22ce)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Minhas Habilidades
        </h2>


        <div className="max-w-5xl mx-auto bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-[0_10px_40px_rgba(184,167,217,0.25)]">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            spaceBetween={26}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full py-4"
          >
            {skillsData.map((skill, idx) => (
              <SwiperSlide key={skill.name}>
                <a
                  href={skill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center justify-center gap-4 text-center
                             transition-transform duration-300 hover:scale-110
                             animate-[float_4s_ease-in-out_infinite]"
                  style={{ animationDelay: `${(idx % 4) * 0.2}s` }}
                >

                  {/* Ícone com brilho no hover */}
                  <div className="relative text-7xl">
                    <div className={`transition-colors duration-300 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <span className="pointer-events-none absolute inset-0 rounded-full opacity-0
                                     group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Nome da skill */}
                  <span className="font-semibold text-zinc-700">{skill.name}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
