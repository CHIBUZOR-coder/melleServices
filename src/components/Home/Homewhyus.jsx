// src/components/Home/HomeWhyUs.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

function Pillar({ pillar, delay }) {
  const anim = useFadeIn(delay);
  return (
    <motion.div {...anim} className="flex items-start gap-4">
      <span className="text-2xl flex-shrink-0 w-10 h-10 bg-[#e87722]/10 rounded-xl flex items-center justify-center">
        {pillar.icon}
      </span>
      <div>
        <h4
          className="text-[#1e2d5a] font-bold text-sm mb-1"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {pillar.title}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
      </div>
    </motion.div>
  );
}

export default function HomeWhyUs() {
  const label = useFadeIn(0);
  const title = useFadeIn(0.1);
  const body = useFadeIn(0.2);
  const cta = useFadeIn(0.5);
  const img = useFadeIn(0.15);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          <motion.span
            {...label}
            className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
          >
            Why Melles Serv
          </motion.span>
          <motion.h2
            {...title}
            className="text-[#1e2d5a] font-black text-3xl sm:text-4xl leading-tight mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            A Partner You Can <span className="text-[#e87722]">Count On</span>
          </motion.h2>
          <motion.p {...body} className="text-gray-500 leading-relaxed mb-10">
            Melles Serv combines industry expertise with a genuine commitment to
            client success. Whether you need a reliable procurement partner,
            logistics support, or skilled training — we show up and deliver.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {pillars.map((p, i) => (
              <Pillar key={p.title} pillar={p} delay={0.2 + i * 0.08} />
            ))}
          </div>

          <motion.div {...cta}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#1e2d5a] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#e87722] transition-all duration-300 hover:scale-105 text-sm tracking-wide"
            >
              More About Us
              <svg
                className="w-3 h-3"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 6h10M6 1l5 5-5 5" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Right — image */}
        <motion.div {...img} className="relative">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
            alt="Melles Serv team at work"
            className="w-full h-[480px] object-cover rounded-2xl shadow-xl"
          />
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-[#e87722] text-white rounded-2xl px-6 py-4 shadow-2xl">
            <p
              className="text-3xl font-black"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              10+
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-80 mt-0.5">
              Years of Excellence
            </p>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1e2d5a]/10 rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
