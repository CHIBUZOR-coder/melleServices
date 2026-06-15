import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-[#1e2d5a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-[#e87722] font-bold text-sm uppercase tracking-widest mb-6">
            <span className="w-10 h-[2px] bg-[#e87722]"></span>
            Our Track Record
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            Delivering Excellence Across <span className="text-[#e87722]">Every Sector</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-10">
            Explore our portfolio of successful projects where we've helped leading organizations optimize their operations, secure vital supplies, and achieve strategic growth.
          </p>
          
          <nav className="flex items-center gap-4 text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span className="text-[#e87722] font-semibold">Portfolio</span>
          </nav>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
