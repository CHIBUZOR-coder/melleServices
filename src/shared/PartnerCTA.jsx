import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function PartnerCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with brand Navy */}
      <div className="absolute inset-0 bg-[#1e2d5a]">
        {/* Subtle decorative pattern or overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center">
          {/* Content Side */}
          <div className="p-8 md:p-16 flex-1 text-center md:text-left">
            <span className="text-[#e87722] font-bold uppercase tracking-widest text-sm mb-4 block">
              Strategic Collaboration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e2d5a] mb-6 leading-tight">
              Would you like to <span className="text-[#e87722]">partner</span> with us?
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-xl">
              We believe in the power of synergy. Join forces with MelleServ to deliver 
              exceptional value, innovation, and sustainable growth across the engineering 
              and services sector.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-[#e87722] hover:bg-[#d16a1f] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              Start a Conversation
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual Side */}
          <div className="w-full md:w-1/3 bg-gray-50 p-12 flex items-center justify-center border-l border-gray-100">
            <div className="relative">
              {/* Abstract icon/graphic representing partnership */}
              <div className="w-32 h-32 rounded-full border-4 border-[#e87722] flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-[#1e2d5a] flex items-center justify-center">
                   <div className="w-16 h-16 bg-[#e87722] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-3xl font-bold">M</span>
                   </div>
                </div>
              </div>
              {/* Floating accents */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#1e2d5a] rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#e87722] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
