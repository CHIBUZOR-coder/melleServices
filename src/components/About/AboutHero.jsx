// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dtjgj2odu/image/upload/v1777534895/woman-engineer_gyu0th.jpg")`,
      }}
      className="relative  overflow-hidden min-h-[420px] flex items-center bg-center bg-cover"
    >
      <div className="absolute top-0 left-0  bg-black/50 w-full h-full"></div>
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #e87722 0, #e87722 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Glowing orbs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#e87722]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[#e87722]/5 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-[#e87722] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
        >
          About Us
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Built on Trust.{" "}
          <span className="text-[#e87722]">Driven by Results.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/70 text-lg leading-relaxed mt-5 max-w-xl"
        >
          Melles Serv is a multi-disciplinary Nigerian company delivering
          excellence across procurement, logistics, energy, and professional
          training.
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
          <span className="text-white/70">About</span>
        </motion.div>
      </div>
    </section>
  );
}
