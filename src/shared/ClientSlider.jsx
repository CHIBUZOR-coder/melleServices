// src/shared/ClientSlider.jsx
import { useEffect, useRef, useState, useCallback } from "react";

const PAUSE_MS = 2500;
const SLIDE_MS = 700;
const MIN_ITEM_WIDTH = 130; // minimum logo slot before we reduce count

const clients = [
  { name: "PetroNigeria", icon: "⛽" },
  { name: "BuildRight", icon: "🏗️" },
  { name: "GlobalLogistics", icon: "📦" },
  { name: "ZenithMfg", icon: "🏭" },
  { name: "AfroPower", icon: "⚡" },
  { name: "ApexFinance", icon: "🏦" },
  { name: "NigerBuild", icon: "🧱" },
  { name: "OceanicOil", icon: "💧" },
];

export default function ClientSlider() {
  const wrapRef = useRef(null); // measures the max-w-6xl container
  const offsetRef = useRef(0);
  const intervalRef = useRef(null);

  // itemWidth and visible count are derived from the real container width
  const [itemWidth, setItemWidth] = useState(160);
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(5);
  const [offset, setOffset] = useState(0);
  const [animated, setAnimated] = useState(true);

  // Recalculate slot size whenever the container resizes
  const measure = useCallback(() => {
    if (!wrapRef.current) return;
    const w = wrapRef.current.offsetWidth;
    const count = Math.max(1, Math.floor(w / MIN_ITEM_WIDTH));
    const iw = w / count; // iw × count = w exactly → no fractional logos
    setVisible(count);
    setItemWidth(iw);
    // Reset offset to start of middle copy when dimensions change
    const reset = clients.length * iw;
    offsetRef.current = reset;
    setOffset(reset);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [measure]);

  // Restart the interval whenever itemWidth settles
  useEffect(() => {
    if (itemWidth === 0) return;

    const singleWidth = clients.length * itemWidth;

    const tick = () => {
      const next = offsetRef.current + itemWidth; // step one logo

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

  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
          Trusted By Our Clients
        </span>
      </div>

      {/*
        max-w-6xl sets the width budget.
        wrapRef measures it so itemWidth = containerWidth / count (exact division).
        overflow:hidden clips — since every slot is exactly itemWidth,
        pausing always shows whole logos.
      */}
      <div className="max-w-6xl mx-auto px-6 mb-4">
        <div ref={wrapRef} className="relative overflow-hidden w-full">
          {/* Fade masks */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Sliding strip */}
          <div
            className="flex"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: animated
                ? `transform ${SLIDE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
                : "none",
              willChange: "transform",
            }}
          >
            {allClients.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex items-center justify-center cursor-default"
                style={{ minWidth: itemWidth, width: itemWidth }} // ← exact slot, no gaps
                title={client.name}
              >
                <span className="text-5xl hover:scale-110 transition-transform duration-300 inline-block">
                  {client.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
