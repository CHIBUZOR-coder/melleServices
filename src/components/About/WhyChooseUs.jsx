// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";

const pillars = [
  {
    icon: "🤝",
    title: "Reliability & Trust",
    desc: "We deliver on our promises, ensuring peace of mind and continuity for your operations.",
  },
  {
    icon: "📍",
    title: "Local Expertise",
    desc: "Deep understanding of the Nigerian market, regulatory landscape, and logistics challenges.",
  },
  {
    icon: "💰",
    title: "Cost Efficiency",
    desc: "Strategic sourcing practices result in competitive pricing without compromising on quality.",
  },
  {
    icon: "✅",
    title: "Commitment to Quality",
    desc: "Strict quality control ensures that all supplied goods and services meet global standards.",
  },
  {
    icon: "🔧",
    title: "End-to-End Solutions",
    desc: "A single point of contact for complex procurement and contract needs.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <PillarCard key={p.title} pillar={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
