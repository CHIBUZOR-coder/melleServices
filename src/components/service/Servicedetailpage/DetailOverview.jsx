// src/components/Services/DetailOverview.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../../hooks/useFadeIn";


function HighlightItem({ text, delay }) {
  const anim = useFadeIn(delay);
  return (
    <motion.li {...anim} className="flex items-start gap-4 group">
      <span className="w-8 h-8 rounded-full bg-[#e87722]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#e87722] transition-colors">
        <svg
          className="w-4 h-4 text-[#e87722] group-hover:text-white transition-colors"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 8l4 4 6-7" />
        </svg>
      </span>
      <p className="text-gray-600 leading-relaxed pt-1">{text}</p>
    </motion.li>
  );
}

export default function DetailOverview({ service }) {
  const a0 = useFadeIn(0);
  const a1 = useFadeIn(0.1);
  const a2 = useFadeIn(0.2);
  const a3 = useFadeIn(0.3);
  const a4 = useFadeIn(0.1);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Overview text */}
        <div>
          <motion.span
            {...a0}
            className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
          >
            Overview
          </motion.span>
          <motion.h2
            {...a1}
            className="text-[#1e2d5a] font-black text-2xl sm:text-3xl mb-6 leading-tight"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            What We Do in {service.title.split(" ")[0]}
          </motion.h2>
          <motion.p
            {...a2}
            className="text-gray-500 leading-relaxed mb-8 whitespace-pre-line"
          >
            {service.overview.trim()}
          </motion.p>
          <motion.div {...a3} className="w-16 h-1 bg-[#e87722] rounded-full" />
        </div>

        {/* Highlights */}
        <div>
          <motion.span
            {...a4}
            className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-5"
          >
            Key Capabilities
          </motion.span>
          <ul className="space-y-4">
            {service.highlights.map((h, i) => (
              <HighlightItem key={h} text={h} delay={0.1 + i * 0.08} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
