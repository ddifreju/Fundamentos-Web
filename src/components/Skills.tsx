import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Skill = {
  name: string;
  iconUrl: string;
  href: string;
};

const skillsData: Skill[] = [
  { name: 'HTML', iconUrl: 'https://ik.imagekit.io/logoempregadev/Portfolio/html-5.png?updatedAt=1761786826701', href: 'https://developer.mozilla.org/docs/Web/HTML' },
  { name: 'CSS', iconUrl: 'https://ik.imagekit.io/logoempregadev/Portfolio/logo%20css_1Viu1pDNYY?updatedAt=1761786668191', href: 'https://developer.mozilla.org/docs/Web/CSS' },
  { name: 'JavaScript', iconUrl: 'https://ik.imagekit.io/logoempregadev/image(3).png?updatedAt=1761785892657', href: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { name: 'TypeScript', iconUrl: 'https://ik.imagekit.io/logoempregadev/image(4).png?updatedAt=1761785892306', href: 'https://www.typescriptlang.org/' },
  { name: 'React', iconUrl: 'https://ik.imagekit.io/logoempregadev/Portfolio/log%20react_TbRYSbTfR?updatedAt=1761786528362', href: 'https://react.dev/' },
  { name: 'Tailwind CSS', iconUrl: 'https://ik.imagekit.io/logoempregadev/Portfolio/image.png?updatedAt=1761786910253', href: 'https://tailwindcss.com/' },
  { name: 'Node.js', iconUrl: 'https://ik.imagekit.io/logoempregadev/Portfolio/image.png?updatedAt=1761786959341', href: 'https://nodejs.org/' },
  { name: 'Figma', iconUrl: 'https://ik.imagekit.io/logoempregadev/Portfolio/image.png?updatedAt=1761787047149', href: 'https://www.figma.com/' },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">

        {/* Título com badge */}
        <div className="text-center mb-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/60 border border-white/70 rounded-full px-3 py-1 text-text-dark/70">
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
                  <div className="relative">
                    <img
                      src={skill.iconUrl}
                      alt={`Logo ${skill.name}`}
                      className="w-20 h-20 drop-shadow"
                      loading="lazy"
                    />
                    <span className="pointer-events-none absolute inset-0 rounded-full opacity-0
                                     group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Nome da skill */}
                  <span className="font-semibold text-text-dark">{skill.name}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
