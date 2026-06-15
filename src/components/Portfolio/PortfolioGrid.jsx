import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioProjects, portfolioCategories } from "../../data/portfolio";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#1e2d5a] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e2d5a]/90 via-[#1e2d5a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white text-sm font-medium">
                      Project Year: {project.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#e87722] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    {project.category.replace(/-/g, ' ')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-[#e87722] font-bold text-xs uppercase tracking-widest mb-2">
                    {project.client}
                  </p>
                  <h3 className="text-xl font-black text-[#1e2d5a] mb-4 group-hover:text-[#e87722] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Key Result</span>
                        <span className="text-sm font-bold text-[#1e2d5a]">{project.results}</span>
                      </div>
                      <HiOutlineArrowNarrowRight className="text-[#e87722] text-2xl transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg italic">No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
