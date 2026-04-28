// src/components/Services/RelatedServices.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import useFadeIn from "../../../hooks/useFadeIn";
import { services } from "../../../data/services";

// ✅ Hook is called at the top level of this component — not inside a .map()
function RelatedCard({ service, delay }) {
  const anim = useFadeIn(delay);
  return (
    <motion.div {...anim}>
      <Link
        to={service.route}
        className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#e87722]/30 hover:shadow-lg transition-all duration-300 no-underline"
      >
        <div className="relative h-36 overflow-hidden">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e2d5a]/60 to-transparent" />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <p className="text-2xl mb-2">{service.icon}</p>
          <h3
            className="text-[#1e2d5a] font-bold text-sm mb-1 group-hover:text-[#e87722] transition-colors"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {service.title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed flex-1">
            {service.shortDesc}
          </p>
          <span className="text-[#e87722] text-xs font-bold mt-3 flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-widest">
            View
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
        </div>
      </Link>
    </motion.div>
  );
}

export default function RelatedServices({ currentId }) {
  const related = services.filter((s) => s.id !== currentId).slice(0, 3);

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          {...useFadeIn(0)}
          className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
        >
          Explore More
        </motion.span>
        <motion.h2
          {...useFadeIn(0.1)}
          className="text-[#1e2d5a] font-black text-3xl sm:text-4xl mb-10"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Other Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((s, i) => (
            // ✅ Pass delay as a prop — no hook inside map
            <RelatedCard key={s.id} service={s} delay={0.1 + i * 0.08} />
          ))}
        </div>

        <motion.div {...useFadeIn(0.4)} className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#1e2d5a] font-bold text-sm border-2 border-[#1e2d5a] px-6 py-3 rounded-full hover:bg-[#1e2d5a] hover:text-white transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
