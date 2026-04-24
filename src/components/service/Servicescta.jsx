// src/components/Services/ServicesCTA.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useFadeIn from "../../hooks/useFadeIn";

export default function ServicesCTA() {
  return (
    <section className="bg-[#1e2d5a] py-20 px-6 relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #e87722 0, #e87722 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#e87722]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.span
          {...useFadeIn(0)}
          className="inline-block bg-[#e87722]/20 text-[#e87722] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
        >
          Get Started
        </motion.span>

        <motion.h2
          {...useFadeIn(0.1)}
          className="text-white font-black text-3xl sm:text-4xl mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Ready to Work With Melles Serv?
        </motion.h2>

        <motion.p
          {...useFadeIn(0.2)}
          className="text-white/60 text-lg mb-10 max-w-lg mx-auto"
        >
          Tell us what you need. Our team is ready to discuss your project,
          contract, or training requirement — no obligation.
        </motion.p>

        <motion.div
          {...useFadeIn(0.3)}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="bg-[#e87722] hover:bg-[#cf6a1e] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#e87722]/30 text-sm tracking-wide"
          >
            Contact Us Today
          </Link>
          <Link
            to="/about"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 text-sm tracking-wide"
          >
            Learn About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
