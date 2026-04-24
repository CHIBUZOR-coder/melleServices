// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          {...useFadeIn(0)}
          className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
        >
          Who We Are
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-2">
          {/* Text */}
          <div>
            <motion.h2
              {...useFadeIn(0)}
              className="text-[#1e2d5a] font-black text-3xl sm:text-4xl leading-tight mb-6"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              A Trusted Partner Across{" "}
              <span className="text-[#e87722]">Oil, Gas & Industry</span>
            </motion.h2>

            <motion.p
              {...useFadeIn(0.1)}
              className="text-gray-500 leading-relaxed mb-4"
            >
              Melles Serv is a dynamic, multi-disciplinary company committed to
              delivering excellence in procurement, logistics, training, and oil
              & gas services. We bridge the gap between business needs and
              operational results — efficiently and reliably.
            </motion.p>

            <motion.p
              {...useFadeIn(0.2)}
              className="text-gray-500 leading-relaxed mb-8"
            >
              Founded on a culture of integrity and impact, we work with clients
              across sectors to provide solutions that are practical,
              professional, and proven. From tendering support to petroleum
              distribution, Melles Serv is the partner that shows up and
              delivers.
            </motion.p>

            <motion.div
              {...useFadeIn(0.3)}
              className="w-16 h-1 bg-[#e87722] rounded-full"
            />
          </div>

          {/* Image */}
          <motion.div {...useFadeIn(0.15)} className="relative">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
              alt="Melles Serv team"
              className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#1e2d5a] text-white rounded-2xl px-6 py-4 shadow-2xl">
              <p
                className="text-3xl font-black text-[#e87722]"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                10+
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mt-0.5">
                Years of Excellence
              </p>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#e87722]/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
