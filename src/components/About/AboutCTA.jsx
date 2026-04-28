// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useFadeIn from "../../hooks/useFadeIn";

export default function AboutCTA() {
  return (
    <section className="bg-[#e87722] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          {...useFadeIn(0)}
          className="text-white font-black text-3xl sm:text-4xl mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Ready to Work With Us?
        </motion.h2>
        <motion.p
          {...useFadeIn(0.1)}
          className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
        >
          Let's talk about how Melles Serv can support your next project,
          contract, or training need.
        </motion.p>
        <motion.div
          {...useFadeIn(0.2)}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="bg-white text-[#e87722] font-bold px-8 py-3.5 rounded-full hover:bg-[#1e2d5a] hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wide"
          >
            Get In Touch
          </Link>
          <Link
            to="/services"
            className="bg-transparent border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#e87722] transition-all duration-300 hover:scale-105 text-sm tracking-wide"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
