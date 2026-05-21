// src/shared/ClientSlider.jsx
import { useEffect, useRef, useState, useCallback } from "react";
import { 
  LuFuel, 
  LuHardHat, 
  LuTruck, 
  LuFactory, 
  LuZap, 
  LuBuilding2, 
  LuConstruction, 
  LuWaves 
} from "react-icons/lu";

const PAUSE_MS = 2500;
const SLIDE_MS = 700;
const MIN_ITEM_WIDTH = 180; // Increased to fit text logos

const clients = [
  { name: "PetroNigeria", icon: LuFuel },
  { name: "BuildRight", icon: LuHardHat },
  { name: "GlobalLogistics", icon: LuTruck },
  { name: "ZenithMfg", icon: LuFactory },
  { name: "AfroPower", icon: LuZap },
  { name: "ApexFinance", icon: LuBuilding2 },
  { name: "NigerBuild", icon: LuConstruction },
  { name: "OceanicOil", icon: LuWaves },
];

function ClientLogo({ client }) {
  const Icon = client.icon;
  return (
    <div className="flex items-center gap-3 px-6 transition-all duration-500 group">
      <div className="text-2xl text-[#e87722] group-hover:text-[#1e2d5a] transition-colors duration-300">
        <Icon />
      </div>
      <span 
        className="font-black text-[13px] tracking-tight text-[#1e2d5a] group-hover:text-[#e87722] transition-colors duration-300" 
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        {client.name.toUpperCase()}
      </span>
    </div>
  );
}

export default function ClientSlider() {
  const wrapRef = useRef(null);
  const offsetRef = useRef(0);
  const intervalRef = useRef(null);

  const [itemWidth, setItemWidth] = useState(200);
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(5);
  const [offset, setOffset] = useState(0);
  const [animated, setAnimated] = useState(true);

  const measure = useCallback(() => {
    if (!wrapRef.current) return;
    const w = wrapRef.current.offsetWidth;
    const count = Math.max(1, Math.floor(w / MIN_ITEM_WIDTH));
    const iw = w / count;
    setVisible(count);
    setItemWidth(iw);
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

  useEffect(() => {
    if (itemWidth === 0) return;

    const singleWidth = clients.length * itemWidth;

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

  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="bg-gray-50 py-16 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
          Trusted By Our Industry Partners
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div ref={wrapRef} className="relative overflow-hidden w-full">
          {/* Fade masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

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
            {allClients.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex items-center justify-center cursor-default"
                style={{ minWidth: itemWidth, width: itemWidth }}
              >
                <ClientLogo client={client} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
