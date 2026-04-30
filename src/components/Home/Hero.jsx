// src/components/Hero.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Swiper core styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// ---- Slide content ----
const slides = [
  {
    image:
      "https://res.cloudinary.com/dtjgj2odu/image/upload/v1777534888/american-lady_wqrhdw.jpg",
    tag: "Procurement & Contracting",
    headline: "Delivering Contracts,\nBuilding Trust.",
    sub: "End-to-end procurement solutions tailored for modern industry.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80",
    tag: "Logistics Management",
    headline: "Moving Goods,\nPowering Business.",
    sub: "Seamless logistics from origin to destination — every time.",
  },
  {
    image:
      "https://res.cloudinary.com/dtjgj2odu/image/upload/v1777534893/engineering_eonpbc.jpg",
    tag: "Oil & Gas Services",
    headline: "Fuelling Industry.\nDriving Growth.",
    sub: "Integrated oil & gas services across upstream and downstream.",
  },
  {
    image:
      "https://res.cloudinary.com/dtjgj2odu/image/upload/v1777534869/afri_bntzok.png",
    tag: "Professional Training",
    headline: "Building Skills.\nShaping Careers.",
    sub: "Industry-focused training programs that create real competence.",
  },
];

// ---- Animation variants ----
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="relative w-full h-full">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e2d5a]/85 via-[#1e2d5a]/60 to-transparent" />

            {/* Slide content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="max-w-2xl">
                  {/* Tag pill */}
                  <motion.span
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="inline-block bg-[#e87722] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                  >
                    {slide.tag}
                  </motion.span>

                  {/* Headline */}
                  <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                    className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5 whitespace-pre-line"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {slide.headline}
                  </motion.h1>

                  {/* Subtext */}
                  <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.4}
                    className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
                  >
                    {slide.sub}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.6}
                    className="flex flex-wrap gap-4"
                  >
                    <Link
                      to="/services"
                      className="bg-[#e87722] hover:bg-[#cf6a1e] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#e87722]/40 text-sm tracking-wide"
                    >
                      Our Services
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-bold px-8 py-3.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 text-sm tracking-wide"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

      {/* Swiper pagination dot styles */}
      <style>{`
  /* Target inside swiper container for higher specificity */
  .swiper .swiper-pagination-bullet {
    background-color: #000 !important;
    opacity: 1 !important;
    width: 8px;
    height: 8px;
    transition: all 0.3s ease;
  }

  .swiper .swiper-pagination-bullet-active {
    background-color: #e87722 !important;
    width: 24px;
    border-radius: 4px;
  }

  .swiper .swiper-pagination {
    bottom: 36px !important;
  }
`}</style>
    </section>
  );
}
