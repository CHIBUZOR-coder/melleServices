// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";


const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "500+", label: "Professionals Trained" },
  { value: "96%", label: "On-Time Delivery Rate" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#1e2d5a] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            {...useFadeIn(i * 0.1)}
            className="text-center"
          >
            <p
              className="text-4xl font-black text-[#e87722]"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {s.value}
            </p>
            <p className="text-white/60 text-sm uppercase tracking-widest mt-2">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
