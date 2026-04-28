// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";

export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          {...useFadeIn(0)}
          className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
        >
          What Drives Us
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* Mission */}
          <motion.div
            {...useFadeIn(0.1)}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-[#e87722]/10 rounded-xl flex items-center justify-center text-2xl mb-5">
              🎯
            </div>
            <h3
              className="text-[#1e2d5a] font-black text-xl mb-3"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Our Mission
            </h3>
            <p className="text-gray-500 leading-relaxed">
              To be the indispensable partner for businesses and organizations
              across a diverse spectrum of sectors, delivering high-quality
              materials, essential equipment, and bespoke services through
              comprehensive procurement, expert general contracts, and efficient
              supply chain management, all executed reliably and with optimal
              cost-effectiveness.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            {...useFadeIn(0.2)}
            className="bg-[#1e2d5a] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-5">
              🔭
            </div>
            <h3
              className="text-white font-black text-xl mb-3"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Our Vision
            </h3>
            <p className="text-white/70 leading-relaxed">
              To be the leading, most trusted, and forward-thinking provider of
              procurement and general contract solutions in Nigeria, recognized
              for excellence, integrity, and driving the sustained success of
              our clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
