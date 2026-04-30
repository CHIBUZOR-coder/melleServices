// src/components/Home/HomeTeam.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";

const team = [
  {
    name: "Engr. Olumide Balogun",
    role: "Managing Director / Founder",
    bio: "With over 15 years of industry experience, Engr. Balogun leads Melles Serv with a vision for operational excellence and localized technical expertise.",
    expertise: ["Project Management", "Energy Sector Strategy"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Barr. Amara Nwosu",
    role: "Head of Procurement & Legal",
    bio: "A specialist in procurement law and contract administration, Amara ensures all operations meet strict regulatory compliance and global standards.",
    expertise: ["Procurement Law", "Contract Negotiation"],
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop",
  },
  {
    name: "Tunde Adeyemi",
    role: "Technical Writing & Compliance Lead",
    bio: "Tunde bridges the gap between technical requirements and execution through meticulous documentation and industry-specific knowledge.",
    expertise: ["Technical Writing", "Quality Assurance"],
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=500&fit=crop",
  },
];

export default function HomeTeam() {
  const labelAnim = useFadeIn(0);
  const titleAnim = useFadeIn(0.1);
  const descAnim = useFadeIn(0.2);

  // ✅ One hook call per member, all at the top level
  const memberAnim0 = useFadeIn(0.3);
  const memberAnim1 = useFadeIn(0.4);
  const memberAnim2 = useFadeIn(0.5);
  const memberAnims = [memberAnim0, memberAnim1, memberAnim2];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            {...labelAnim}
            className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
          >
            The Minds Behind Melles
          </motion.span>
          <motion.h2
            {...titleAnim}
            className="text-[#1e2d5a] font-black text-3xl sm:text-4xl"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Our Professional <span className="text-[#e87722]">Team</span>
          </motion.h2>
          <motion.p
            {...descAnim}
            className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            Meet the Nigerian professionals driving excellence through deep
            industry knowledge, legal expertise, and technical precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              {...memberAnims[i]} // ✅ Safe — just reading a pre-computed value
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2d5a]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              <div className="p-8">
                <h3
                  className="text-[#1e2d5a] font-bold text-xl mb-1"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#e87722] text-xs font-bold uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-50">
                  {member.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="text-[10px] font-bold uppercase tracking-tighter bg-gray-50 text-gray-400 px-2 py-1 rounded"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
