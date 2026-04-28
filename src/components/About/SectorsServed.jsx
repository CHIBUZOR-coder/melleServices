// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";

const sectors = [
  { name: "Oil & Gas", icon: "🛢️" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Construction & Infrastructure", icon: "🏗️" },
  { name: "Corporate & Financial Services", icon: "🏢" },
  { name: "Government & Public Sector", icon: "🏛️" },
];

export default function SectorsServed() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.span
          {...useFadeIn(0)}
          className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
        >
          Sectors We Serve
        </motion.span>
        <motion.h2
          {...useFadeIn(0.1)}
          className="text-[#1e2d5a] font-black text-3xl sm:text-4xl mb-12"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Delivering Excellence Across Industries
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              {...useFadeIn(0.2 + i * 0.1)}
              className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-[#1e2d5a] hover:border-[#1e2d5a] transition-all duration-300"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {sector.icon}
              </span>
              <h4 className="text-[#1e2d5a] group-hover:text-white font-bold text-sm leading-tight transition-colors">
                {sector.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
