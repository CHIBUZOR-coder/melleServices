// src/components/Services/ServicesGrid.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useFadeIn from "../../hooks/useFadeIn";
import { services } from "../../data/services";

const ServiceCard = ({ service, delay }) => {
  const anim = useFadeIn(delay);
  return (
    <motion.div {...anim}>
      <Link
        to={service.route}
        className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-[#e87722]/30 hover:shadow-xl transition-all duration-300 no-underline"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e2d5a]/80 via-[#1e2d5a]/20 to-transparent" />
          {/* Icon pill */}
          <span className="absolute top-4 left-4 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {service.icon} {service.title.split(" ")[0]}
          </span>
        </div>

        {/* Body */}
        <div className="p-6">
          <h3
            className="text-[#1e2d5a] font-black text-lg leading-snug mb-2 group-hover:text-[#e87722] transition-colors"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {service.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {service.shortDesc}
          </p>

          {/* Highlights — top 4 */}
          <ul className="space-y-2 mb-6">
            {service.highlights.slice(0, 4).map((h) => {
              const [label, desc] = h.includes(": ") ? h.split(": ") : [null, h];
              return (
                <li
                  key={h}
                  className="flex items-start gap-2 text-xs text-gray-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e87722] mt-1.5 flex-shrink-0" />
                  <span>
                    {label && (
                      <strong className="text-gray-600 font-bold">{label}: </strong>
                    )}
                    {desc}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
            {service.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-[#1e2d5a] font-black text-base"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-gray-400 text-[10px] uppercase tracking-wide leading-tight mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer link */}
        <div className="px-6 pb-5">
          <span className="text-[#e87722] text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
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
        </div>
      </Link>
    </motion.div>
  );
};

export default function ServicesGrid() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          {...useFadeIn(0)}
          className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
        >
          Our Services
        </motion.span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <motion.h2
            {...useFadeIn(0.1)}
            className="text-[#1e2d5a] font-black text-3xl sm:text-4xl"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Seven Ways We Deliver Value
          </motion.h2>
          <motion.p
            {...useFadeIn(0.15)}
            className="text-gray-400 text-sm max-w-xs sm:text-right"
          >
            Click any service to learn more about what we offer and how we work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
