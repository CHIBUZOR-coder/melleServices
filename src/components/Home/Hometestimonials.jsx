// src/components/Home/HomeTestimonials.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";

const testimonials = [
  {
    quote:
      "Melles Serv handled our entire procurement cycle with professionalism and speed. Their vendor network saved us both time and cost on a critical project.",
    name: "Emeka Okafor",
    role: "Operations Director",
    company: "Deltacrest Industries",
    initials: "EO",
  },
  {
    quote:
      "The logistics team at Melles Serv is outstanding. We've never missed a delivery window since partnering with them. Truly reliable.",
    name: "Fatima Al-Hassan",
    role: "Supply Chain Manager",
    company: "Northgate Energy",
    initials: "FA",
  },
  {
    quote:
      "Their oil & gas training program transformed our field team. Practical, certified, and extremely relevant to our operations in the Niger Delta.",
    name: "Chukwudi Eze",
    role: "HSE Manager",
    company: "Riverline Petroleum",
    initials: "CE",
  },
  {
    quote:
      "From tender preparation to post-award management, Melles Serv gave us a competitive edge. Their tender success rate speaks for itself.",
    name: "Ngozi Adeyemi",
    role: "Contracts Manager",
    company: "Apexline Construction",
    initials: "NA",
  },
  {
    quote:
      "We rely on Melles Serv for all our petroleum distribution needs. Consistent quality, on-time delivery, and zero compliance issues — every time.",
    name: "Bello Usman",
    role: "Procurement Lead",
    company: "Greenfield Energy Ltd",
    initials: "BU",
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-gray-100 flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-[#e87722]"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
          </svg>
        ))}
      </div>

      {/* Opening quote mark */}
      <span
        className="text-5xl text-[#e87722]/20 font-black leading-none mb-1 select-none"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        "
      </span>

      {/* Quote */}
      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6 italic">
        {t.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-[#1e2d5a] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">{t.initials}</span>
        </div>
        <div>
          <p className="text-[#1e2d5a] font-bold text-sm">{t.name}</p>
          <p className="text-gray-400 text-xs">
            {t.role}, {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomeTestimonials() {
  const label = useFadeIn(0);
  const title = useFadeIn(0.1);

  return (
    <section className="bg-gray-50 py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.span
          {...label}
          className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
        >
          Client Feedback
        </motion.span>
        <motion.h2
          {...title}
          className="text-[#1e2d5a] font-black text-3xl sm:text-4xl mb-12"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          What Our Clients Say
        </motion.h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="h-auto self-stretch">
              <TestimonialCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination dots — matches Hero style */}
      <style>{`
        .swiper-pagination-bullet {
          background: #1e2d5a;
          opacity: 0.25;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          background: #e87722;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          transition: width 0.3s ease;
        }
      `}</style>
    </section>
  );
}
