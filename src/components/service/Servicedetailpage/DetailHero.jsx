
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function DetailHero({ service }) {
  return (
    <section className="relative min-h-[480px] flex items-end overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e2d5a]/90 via-[#1e2d5a]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e2d5a]/60 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 pt-32 w-full">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-[#e87722] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
        >
          {service.icon} {service.title.split(" ")[0]}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {service.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/70 text-lg mt-4 max-w-xl"
        >
          {service.shortDesc}
        </motion.p>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 mt-8 text-sm text-white/40"
        >
          <Link to="/" className="hover:text-[#e87722] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/services"
            className="hover:text-[#e87722] transition-colors"
          >
            Services
          </Link>
          <span>/</span>
          <span className="text-white/70">{service.title}</span>
        </motion.div>
      </div>
    </section>
  );
}
export default DetailHero;