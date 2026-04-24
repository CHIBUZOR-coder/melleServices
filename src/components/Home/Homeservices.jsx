// src/components/Home/HomeServices.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useFadeIn from "../../hooks/useFadeIn";
import { services } from "../../data/services";

function ServiceTile({ service, delay }) {
  const anim = useFadeIn(delay);
  return (
    <motion.div {...anim}>
      <Link
        to={service.route}
        className="group flex flex-col bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#e87722]/30 hover:shadow-xl transition-all duration-300 no-underline h-full"
      >
        <span className="text-3xl mb-4 block">{service.icon}</span>
        <h3
          className="text-[#1e2d5a] font-black text-base mb-2 group-hover:text-[#e87722] transition-colors"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {service.shortDesc}
        </p>
        <span className="mt-4 text-[#e87722] text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More
          <svg
            className="w-3 h-3"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 6h10M6 1l5 5-5 5" />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}

export default function HomeServices() {
  const labelAnim = useFadeIn(0);
  const titleAnim = useFadeIn(0.1);

  return (
    <section id="services" className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          {...labelAnim}
          className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
        >
          What We Do
        </motion.span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <motion.h2
            {...titleAnim}
            className="text-[#1e2d5a] font-black text-3xl sm:text-4xl"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Our Core Services
          </motion.h2>
          <Link
            to="/services"
            className="text-[#e87722] text-sm font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
          >
            View All
            <svg
              className="w-3 h-3"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 6h10M6 1l5 5-5 5" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceTile key={s.id} service={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
