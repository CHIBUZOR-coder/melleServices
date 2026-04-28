// src/components/About/StatsBar.jsx
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";

const stats = [
  { numeric: 10, suffix: "+", prefix: "", label: "Years of Experience" },
  { numeric: 120, suffix: "+", prefix: "", label: "Projects Completed" },
  { numeric: 500, suffix: "+", prefix: "", label: "Professionals Trained" },
  { numeric: 96, suffix: "%", prefix: "", label: "On-Time Delivery Rate" },
];

function useCountUp(target, duration = 1800, inView = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
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
    <motion.div {...anim} className="text-center">
      <p
        className="text-4xl font-black text-[#e87722]"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        {stat.prefix}
        {count}
        {stat.suffix}
      </p>
      <p className="text-white/60 text-sm uppercase tracking-widest mt-2">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsBar() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

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
    <section ref={sectionRef} className="bg-[#1e2d5a] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <StatItem key={s.label} stat={s} delay={i * 0.1} inView={inView} />
        ))}
      </div>
    </section>
  );
}
