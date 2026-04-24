// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useFadeIn from "../../hooks/useFadeIn";
import { services } from "../../data/services";

const ServiceTile = ({ service, delay }) => {
  const anim = useFadeIn(delay);
  return (
    <motion.div {...anim}>
      <Link
        to={service.route}
        className="flex flex-col items-center text-center bg-gray-50 hover:bg-[#1e2d5a] group rounded-2xl p-5 transition-all duration-300 hover:shadow-lg no-underline"
      >
        <span className="text-3xl mb-3">{service.icon}</span>
        <p className="text-[#1e2d5a] group-hover:text-white font-bold text-xs leading-snug transition-colors">
          {service.title}
        </p>
      </Link>
    </motion.div>
  );
};

export default function ServicesTeaser() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          {...useFadeIn(0)}
          className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
        >
          Our Services
        </motion.span>
        <motion.h2
          {...useFadeIn(0.1)}
          className="text-[#1e2d5a] font-black text-3xl sm:text-4xl mb-12"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          What We Do
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((s, i) => (
            <ServiceTile key={s.id} service={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
