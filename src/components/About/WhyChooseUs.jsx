// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";

const pillars = [
  {
    icon: "🏆",
    title: "Proven Track Record",
    desc: "Over a decade of delivering measurable results across procurement, logistics, and energy services.",
  },
  {
    icon: "🔧",
    title: "End-to-End Solutions",
    desc: "From tendering to training, we handle every stage so you can focus on what matters.",
  },
  {
    icon: "📍",
    title: "Local Expertise",
    desc: "Deep knowledge of Nigeria's regulatory landscape, supply chains, and energy sector.",
  },
  {
    icon: "🤝",
    title: "Client-First Approach",
    desc: "Every engagement is tailored — we listen first, then deliver solutions built for your needs.",
  },
];

const PillarCard = ({ pillar, delay }) => {
  const anim = useFadeIn(delay);
  return (
    <motion.div
      {...anim}
      className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#e87722]/30 hover:shadow-md transition-all duration-300 flex gap-5"
    >
      <span className="text-3xl flex-shrink-0 mt-1">{pillar.icon}</span>
      <div>
        <h3
          className="text-[#1e2d5a] font-bold text-base mb-2"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {pillar.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
      </div>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          {...useFadeIn(0)}
          className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
        >
          Why Melles Serv
        </motion.span>
        <motion.h2
          {...useFadeIn(0.1)}
          className="text-[#1e2d5a] font-black text-3xl sm:text-4xl mb-12"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          What Sets Us Apart
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <PillarCard key={p.title} pillar={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
