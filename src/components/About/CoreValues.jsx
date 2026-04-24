// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";

const values = [
  {
    icon: "🤝",
    title: "Integrity",
    desc: "We operate with honesty and transparency in every contract and relationship.",
  },
  {
    icon: "⚡",
    title: "Excellence",
    desc: "We set high standards and consistently deliver results that exceed expectations.",
  },
  {
    icon: "🌍",
    title: "Impact",
    desc: "Our work powers industries, creates jobs, and drives economic growth.",
  },
  {
    icon: "🔒",
    title: "Reliability",
    desc: "Clients trust us because we show up, follow through, and deliver — every time.",
  },
];

const ValueCard = ({ val, delay }) => {
  const anim = useFadeIn(delay);
  return (
    <motion.div
      {...anim}
      className="bg-gray-50 hover:bg-[#1e2d5a] group rounded-2xl p-6 transition-all duration-300 hover:shadow-xl cursor-default"
    >
      <span className="text-3xl mb-4 block">{val.icon}</span>
      <h3 className="text-[#1e2d5a] group-hover:text-[#e87722] font-bold text-base mb-2 transition-colors">
        {val.title}
      </h3>
      <p className="text-gray-400 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
        {val.desc}
      </p>
    </motion.div>
  );
};

export default function CoreValues() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          {...useFadeIn(0)}
          className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
        >
          Our Core Values
        </motion.span>
        <motion.h2
          {...useFadeIn(0.1)}
          className="text-[#1e2d5a] font-black text-3xl sm:text-4xl mb-12"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          The Principles We Live By
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <ValueCard key={val.title} val={val} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
