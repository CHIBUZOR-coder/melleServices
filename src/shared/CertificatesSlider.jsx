import { useEffect, useRef, useState, useCallback } from "react";

const PAUSE_MS = 3000;
const SLIDE_MS = 800;
const MIN_ITEM_WIDTH = 180; // slightly wider for certificates

const certificates = [
  { name: "BPP Certified", src: "/images/Bpp_certified.jpeg" },
  { name: "CAC Certified", src: "/images/Cac_certified.jpeg" },
  { name: "ITF Certification", src: "/images/ITF_certification.jpeg" },
  { name: "Nigerian Revenue Service", src: "/images/Nigerian_Revenue_Service.jpeg" },
  { name: "NSITF Certified", src: "/images/NSITF_certified.jpeg" },
  { name: "Pencom Certified", src: "/images/Pencom_certified.jpeg" },
];

export default function CertificatesSlider() {
  const wrapRef = useRef(null);
  const offsetRef = useRef(0);
  const intervalRef = useRef(null);

  const [itemWidth, setItemWidth] = useState(200);
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(4);
  const [offset, setOffset] = useState(0);
  const [animated, setAnimated] = useState(true);

  const measure = useCallback(() => {
    if (!wrapRef.current) return;
    const w = wrapRef.current.offsetWidth;
    const count = Math.max(1, Math.floor(w / MIN_ITEM_WIDTH));
    const iw = w / count;
    setVisible(count);
    setItemWidth(iw);
    const reset = certificates.length * iw;
    offsetRef.current = reset;
    setOffset(reset);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    if (itemWidth === 0) return;

    const singleWidth = certificates.length * itemWidth;

    const tick = () => {
      const next = offsetRef.current + itemWidth;

      setAnimated(true);
      setOffset(next);
      offsetRef.current = next;

      if (next >= singleWidth * 2) {
        setTimeout(() => {
          const reset = next - singleWidth;
          setAnimated(false);
          setOffset(reset);
          offsetRef.current = reset;
          requestAnimationFrame(() =>
            requestAnimationFrame(() => setAnimated(true)),
          );
        }, SLIDE_MS + 50);
      }
    };

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(tick, PAUSE_MS + SLIDE_MS);
    return () => clearInterval(intervalRef.current);
  }, [itemWidth]);

  const allCerts = [...certificates, ...certificates, ...certificates];

  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e87722] mb-2 block">
          Compliance & Accreditation
        </span>
        <h2 className="text-3xl font-bold text-[#1e2d5a]">Our Trusted Certificates</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          MelleServ is fully registered and compliant with all relevant regulatory bodies, 
          ensuring the highest standards of professional service and accountability.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div ref={wrapRef} className="relative overflow-hidden w-full py-4">
          {/* Fade masks */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Sliding strip */}
          <div
            className="flex items-center"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: animated
                ? `transform ${SLIDE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
                : "none",
              willChange: "transform",
            }}
          >
            {allCerts.map((cert, i) => (
              <div
                key={`${cert.name}-${i}`}
                className="flex items-center justify-center px-4"
                style={{ minWidth: itemWidth, width: itemWidth }}
                title={cert.name}
              >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-44 w-full flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300">
                  <div className="flex-1 flex items-center justify-center w-full mb-2">
                    <img
                      src={cert.src}
                      alt={cert.name}
                      className="max-h-24 max-w-full object-contain transition-all duration-500"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1e2d5a] text-center uppercase tracking-wider line-clamp-2">
                    {cert.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
