// src/shared/Footer.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../data/services";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const contactDetails = [
  {
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" />
        <circle cx="8" cy="6" r="1.5" />
      </svg>
    ),
    text: "Lagos, Nigeria",
  },
  {
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h12v10H2zM2 3l6 5 6-5" />
      </svg>
    ),
    text: "info@mellesserv.com",
  },
  {
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 2h3l1.5 3.5-2 1.5a8 8 0 003.5 3.5l1.5-2L14 10v3a1 1 0 01-1 1C6 14 2 10 2 3a1 1 0 011-1z" />
      </svg>
    ),
    text: "+234 800 000 0000",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1e2d5a] text-white">
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5 no-underline">
              <span
                className="text-white font-black text-2xl tracking-tight"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Melles<span className="text-[#e87722]">Serv</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A multi-disciplinary Nigerian company delivering excellence across
              procurement, logistics, energy, and professional training.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  label: "LinkedIn",
                  path: "M2 2h3v12H2zM3.5 2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM6 6h3v1.5S9.5 6 11.5 6c2.5 0 3 2 3 4v4h-3V11c0-1 0-2-1.5-2s-1.5 1-1.5 2v3H6V6z",
                },
                {
                  label: "Twitter/X",
                  path: "M1 1l5.5 6.5L1 14h2l4-4.5L10.5 14H15l-5.8-6.8L14.5 1h-2L8.5 5 5 1H1z",
                },
                {
                  label: "Facebook",
                  path: "M9 1H7C5.3 1 4 2.3 4 4v2H2v3h2v6h3V9h2.5L10 6H7V4c0-.6.4-1 1-1h2V1z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e87722] flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-white/50 hover:text-[#e87722] text-sm transition-colors flex items-center gap-2 no-underline"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#e87722] flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={s.route}
                    className="text-white/50 hover:text-[#e87722] text-sm transition-colors flex items-center gap-2 no-underline"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#e87722] flex-shrink-0" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-4 mb-6">
              {contactDetails.map((c) => (
                <li key={c.text} className="flex items-start gap-3">
                  <span className="text-[#e87722] mt-0.5 flex-shrink-0">
                    {c.icon}
                  </span>
                  <span className="text-white/50 text-sm leading-relaxed">
                    {c.text}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-block bg-[#e87722] hover:bg-[#cf6a1e] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {year} Melles Serv Limited. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Procurement · Logistics · Oil & Gas · Training
          </p>
        </div>
      </div>
    </footer>
  );
}
