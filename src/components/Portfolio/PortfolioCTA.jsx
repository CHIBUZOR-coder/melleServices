import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <section className="py-24 bg-[#e87722] relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#1e2d5a]/10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            Ready to Start Your Next <br className="hidden md:block" />
            <span className="text-[#1e2d5a]">Success Story?</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Our team is ready to bring the same level of excellence and commitment to your operations. Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="px-10 py-4 bg-[#1e2d5a] text-white font-black text-sm uppercase tracking-widest rounded-lg hover:bg-white hover:text-[#1e2d5a] transition-all duration-300 shadow-xl"
            >
              Get a Proposal
            </Link>
            <Link
              to="/services"
              className="px-10 py-4 border-2 border-white text-white font-black text-sm uppercase tracking-widest rounded-lg hover:bg-white hover:text-[#e87722] transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
