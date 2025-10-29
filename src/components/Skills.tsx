// src/components/Skills.tsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const skillsData = [
  { name: 'HTML', iconUrl: 'https://img.icons8.com/3d-fluency/94/html-5.png' },
  { name: 'CSS', iconUrl: 'https://img.icons8.com/3d-fluency/94/css3.png' },
  { name: 'JavaScript', iconUrl: 'https://img.icons8.com/3d-fluency/94/javascript.png' },
  { name: 'TypeScript', iconUrl: 'https://img.icons8.com/3d-fluency/94/typescript.png' },
  { name: 'React', iconUrl: 'https://img.icons8.com/3d-fluency/94/react-native.png' },
  { name: 'Tailwind CSS', iconUrl: 'https://img.icons8.com/3d-fluency/94/tailwind_css.png' },
  { name: 'Node.js', iconUrl: 'https://img.icons8.com/3d-fluency/94/node-js.png' },
  { name: 'Figma', iconUrl: 'https://img.icons8.com/3d-fluency/94/figma.png' },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="container mx-auto">
        <h2 
          className="text-4xl font-bold text-center text-[#0d9488] mb-16"
        >
          Minhas Habilidades
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {skillsData.map(skill => (
              <SwiperSlide key={skill.name}>
                {/* O DIV ABAIXO FOI ALTERADO */}
                <div 
                  className="flex flex-col items-center justify-center gap-4 text-center transition-transform duration-300 hover:scale-110"
                >
                  <img src={skill.iconUrl} alt={`Logo ${skill.name}`} className="w-20 h-20" />
                  <span className="text-zinc-300 font-semibold">{skill.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
  
}