// src/components/Home/HomeStats.jsx
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";

const stats = [
  { numeric: 10, suffix: "+", prefix: "", label: "Years of Experience" },
  { numeric: 120, suffix: "+", prefix: "", label: "Projects Completed" },
  { numeric: 500, suffix: "+", prefix: "", label: "Professionals Trained" },
  { numeric: 50, suffix: "M+", prefix: "$", label: "Contract Value Managed" },
  {
    numeric: 10,
    suffix: "M+",
    prefix: "",
    label: "Litres of Petroleum Supplied",
  },
  { numeric: 96, suffix: "%", prefix: "", label: "On-Time Delivery Rate" },
];

// Counts from 0 to `target` over `duration`ms, triggers once when inView
function useCountUp(target, duration = 1800, inView = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic — decelerates nicely toward the end
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return count;
}

function StatItem({ stat, delay, inView }) {
  const anim = useFadeIn(delay);
  const count = useCountUp(stat.numeric, 1800, inView);

  return (
    <motion.div {...anim} className="text-center px-4">
      <p
        className="text-4xl sm:text-5xl font-black text-[#e87722]"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        {stat.prefix}
        {count}
        {stat.suffix}
      </p>
      <p className="text-white/60 text-xs uppercase tracking-widest mt-2 leading-snug">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function HomeStats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Fire once when 30% of the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#1e2d5a] py-20 px-6 relative overflow-hidden"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #e87722 0, #e87722 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} delay={i * 0.08} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
