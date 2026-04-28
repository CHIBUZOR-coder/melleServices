// src/components/Contact/ContactSection.jsx
//
// ─── EMAILJS SETUP ───────────────────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free tier is enough)
// 2. Create an Email Service and note your SERVICE_ID
// 3. Create an Email Template with these variables:
//      {{from_name}}  {{from_email}}  {{phone}}  {{subject}}  {{message}}
//    and note your TEMPLATE_ID
// 4. Go to Account → API Keys and copy your PUBLIC_KEY
// 5. Replace the three placeholder strings below with your real values
// 6. Run: npm install @emailjs/browser
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFadeIn from "../../hooks/useFadeIn";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // ← replace
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // ← replace
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // ← replace

// ── Contact info ─────────────────────────────────────────────────────────────
const infoItems = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 2C7 2 4.5 4.5 4.5 7.5c0 4.5 5.5 10.5 5.5 10.5s5.5-6 5.5-10.5C15.5 4.5 13 2 10 2z" />
        <circle cx="10" cy="7.5" r="2" />
      </svg>
    ),
    label: "Our Address",
    value: "123 Placeholder Street, Victoria Island, Lagos, Nigeria", // ← replace
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 4h4l2 4-2.5 2a11 11 0 005.5 5.5L14 13l4 2v4a1 1 0 01-1 1C8 20 1 13 1 5a1 1 0 011-1z" />
      </svg>
    ),
    label: "Phone Number",
    value: "+234 800 000 0000", // ← replace
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="16" height="13" rx="2" />
        <path d="M2 7l8 5 8-5" />
      </svg>
    ),
    label: "Email Address",
    value: "info@mellesserv.com", // ← replace
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4l3 3" />
      </svg>
    ),
    label: "Business Hours",
    value: "Monday – Friday: 8:00 AM – 6:00 PM",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#", // ← replace
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
        <path d="M2 2h3v12H2zM3.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6 6h3v1.5S9.5 6 11.5 6c2.5 0 3.5 1.5 3.5 4v4h-3v-3.5c0-1-.5-1.5-1.5-1.5S9 11 9 12v2.5H6V6z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#", // ← replace
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
        <path d="M1 1l5.5 6.5L1 14h2l4-4.5L10.5 14H15l-5.8-6.8L14.5 1h-2L8.5 5 5 1H1z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#", // ← replace
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
        <path d="M9 1H7C5.3 1 4 2.3 4 4v2H2v3h2v6h3V9h2.5L10 6H7V4c0-.6.4-1 1-1h2V1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#", // ← replace
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
        <rect
          x="1"
          y="1"
          width="14"
          height="14"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="8"
          cy="8"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="4" r="1" />
      </svg>
    ),
  },
];

// ── Info card ─────────────────────────────────────────────────────────────────
function InfoCard({ item, delay }) {
  const anim = useFadeIn(delay);
  return (
    <motion.div
      {...anim}
      className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100"
    >
      <span className="w-10 h-10 rounded-xl bg-[#e87722]/10 flex items-center justify-center text-[#e87722] flex-shrink-0">
        {item.icon}
      </span>
      <div>
        <p className="text-[#1e2d5a] font-bold text-xs uppercase tracking-widest mb-1">
          {item.label}
        </p>
        <p className="text-gray-500 text-sm leading-relaxed">{item.value}</p>
      </div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const labelAnim = useFadeIn(0);
  const titleAnim = useFadeIn(0.1);
  const formAnim = useFadeIn(0.15);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          {...labelAnim}
          className="inline-block text-[#e87722] font-bold text-xs uppercase tracking-widest mb-3"
        >
          Contact Us
        </motion.span>
        <motion.h2
          {...titleAnim}
          className="text-[#1e2d5a] font-black text-3xl sm:text-4xl mb-14"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          We'd Love to Hear From You
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* ── Left: Info + Socials ── */}
          <div className="flex flex-col gap-6">
            {infoItems.map((item, i) => (
              <InfoCard key={item.label} item={item} delay={i * 0.08} />
            ))}

            {/* Social links */}
            <motion.div {...useFadeIn(0.4)} className="mt-2">
              <p className="text-[#1e2d5a] font-bold text-xs uppercase tracking-widest mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-[#1e2d5a] hover:bg-[#e87722] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Form ── */}
          <motion.div {...formAnim}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col gap-5"
            >
              {/* Row: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1e2d5a] text-xs font-bold uppercase tracking-widest">
                    Full Name <span className="text-[#e87722]">*</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#e87722] focus:ring-2 focus:ring-[#e87722]/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1e2d5a] text-xs font-bold uppercase tracking-widest">
                    Email Address <span className="text-[#e87722]">*</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="you@example.com"
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#e87722] focus:ring-2 focus:ring-[#e87722]/10 transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1e2d5a] text-xs font-bold uppercase tracking-widest">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+234 800 000 0000"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#e87722] focus:ring-2 focus:ring-[#e87722]/10 transition-all"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1e2d5a] text-xs font-bold uppercase tracking-widest">
                  Subject <span className="text-[#e87722]">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Procurement Enquiry"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#e87722] focus:ring-2 focus:ring-[#e87722]/10 transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1e2d5a] text-xs font-bold uppercase tracking-widest">
                  Message <span className="text-[#e87722]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project or enquiry..."
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#e87722] focus:ring-2 focus:ring-[#e87722]/10 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#e87722] hover:bg-[#cf6a1e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#e87722]/30 text-sm tracking-wide flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M8 2a6 6 0 016 6" strokeLinecap="round" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Feedback messages */}
              {status === "success" && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                  <svg
                    className="w-4 h-4 text-green-500 flex-shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 8l4 4 8-8" />
                  </svg>
                  <p className="text-green-700 text-sm font-medium">
                    Message sent! We'll be in touch within 24 hours.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <svg
                    className="w-4 h-4 text-red-500 flex-shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 2v6M8 11v1" />
                    <circle cx="8" cy="8" r="7" />
                  </svg>
                  <p className="text-red-700 text-sm font-medium">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
