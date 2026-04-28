// src/components/Home/HomeCTA.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useFadeIn from "../../hooks/useFadeIn";

export default function HomeCTA() {
  const title = useFadeIn(0);
  const body = useFadeIn(0.1);
  const btns = useFadeIn(0.2);

  return (
    <section className="bg-[#e87722] py-20 px-6 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/5 rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          {...title}
          className="text-white font-black text-3xl sm:text-4xl lg:text-5xl mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          {...body}
          className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
        >
          Let's discuss your next project, contract, or training requirement.
          Our team is ready to respond within 24 hours.
        </motion.p>
        <motion.div {...btns} className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-[#e87722] font-bold px-8 py-3.5 rounded-full hover:bg-[#1e2d5a] hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide shadow-lg"
          >
            Contact Us Today
          </Link>
          <Link
            to="/services"
            className="bg-transparent border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#e87722] transition-all duration-300 hover:scale-105 text-sm tracking-wide"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
