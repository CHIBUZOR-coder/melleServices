// src/components/Services/DetailStats.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../../hooks/useFadeIn";
function StatItem({ stat, delay }) {
  const anim = useFadeIn(delay);
  return (
    <motion.div {...anim} className="text-center">
      <p
        className="text-4xl font-black text-[#e87722]"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        {stat.value}
      </p>
      <p className="text-white/60 text-sm uppercase tracking-widest mt-2">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function DetailStats({ service }) {
  return (
    <section className="bg-[#1e2d5a] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {service.stats.map((s, i) => (
          <StatItem key={s.label} stat={s} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
