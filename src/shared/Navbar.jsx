import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"; // ✅ React Router Link
import { MellesContext } from "../Context/MellesProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ mobile menu state

  const { isTransparent } = useContext(MellesContext);

    useEffect(() => {
      console.log("isTransparent:", isTransparent);
    }, [isTransparent]);
  return (
    <nav
      className={`w-full bg-white border-b border-gray-100 shadow-sm p-4 sticky top-0 z-50`}
    >
      <div className="  h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center flex-col gap-2.5 no-underline"
        >
          {/* your existing logo JSX stays exactly the same */}
          <div className="relative w-12 h-12 flex-shrink-0">
            <div className="absolute top-0 left-0 w-full h-[9px] bg-[#1e2d5a]" />
            <div className="absolute top-0 left-0 w-[9px] h-full bg-[#1e2d5a]" />
            <div className="absolute top-0 right-0 w-[9px] h-full bg-[#1e2d5a]" />
            <div className="absolute top-[9px] left-[9px] right-[9px] bottom-0 bg-white" />
            <div
              className="absolute"
              style={{
                top: 7,
                left: 10,
                width: 28,
                height: 34,
                perspective: 120,
                padding: 2,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  animation: "spinY 3s linear infinite",
                }}
              >
                <svg
                  viewBox="0 0 180 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    filter: "drop-shadow(0 1px 3px rgba(232,119,34,0.45))",
                  }}
                >
                  <defs>
                    <linearGradient id="mFront" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f09040" />
                      <stop offset="40%" stopColor="#e87722" />
                      <stop offset="100%" stopColor="#c45a10" />
                    </linearGradient>
                    <linearGradient id="mSideR" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#b55e14" />
                      <stop offset="100%" stopColor="#7a3208" />
                    </linearGradient>
                    <linearGradient id="mSideL" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8a3e0a" />
                      <stop offset="100%" stopColor="#b55e14" />
                    </linearGradient>
                    <linearGradient id="mTopG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f8c070" />
                      <stop offset="100%" stopColor="#e87722" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M10 200 L10 20 L55 20 L90 90 L125 20 L170 20 L170 200 L135 200 L135 80 L90 155 L45 80 L45 200 Z"
                    fill="url(#mFront)"
                  />
                  <path
                    d="M10 20 L55 20 L90 90 L125 20 L170 20 L165 14 L125 14 L90 83 L55 14 L15 14 Z"
                    fill="url(#mTopG)"
                    opacity="0.95"
                  />
                  <path
                    d="M170 20 L175 14 L175 194 L170 200 Z"
                    fill="url(#mSideR)"
                  />
                  <path d="M10 20 L5 14 L5 194 L10 200 Z" fill="url(#mSideL)" />
                  <path d="M10 200 L5 194 L175 194 L170 200 Z" fill="#6a2a06" />
                </svg>
              </div>
            </div>
          </div>
          <span
            className="text-[#1e2d5a] font-black text-xl tracking-tight leading-none whitespace-nowrap"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Melleserv
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Services", to: "/services" },
            { label: "About", to: "/about" },
            { label: "Contact", to: "/contact" },
          ].map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={({ isActive }) =>
                `font-bold text-sm ${isActive ? "text-[#e87722]" : "text-[#1e2d5a]"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* ✅ Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#1e2d5a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1e2d5a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1e2d5a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services" },
            { label: "About", to: "/about" },
            { label: "Contact", to: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={({ isActive }) =>
                `font-bold text-sm ${isActive ? " text-[#1e2d5a]" : ""} transition-colors text-[#e87722]`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');
        @keyframes spinY {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(360deg); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
