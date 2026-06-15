// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
  LuPackage, 
  LuHardHat, 
  LuGraduationCap, 
  LuSignature, 
  LuTruck, 
  LuFuel, 
  LuFactory,
  LuPencilRuler,
  LuClipboardCheck
} from "react-icons/lu";

export default function ServiceIcon({ id, color, className = "text-4xl", animate = true }) {
  const icons = {
    procurement: <LuPackage />,
    "general-contracts": <LuHardHat />,
    training: <LuGraduationCap />,
    tendering: <LuSignature />,
    logistics: <LuTruck />,
    petroleum: <LuFuel />,
    "oil-and-gas": <LuFactory />,
    "engineering-consultancy": <LuPencilRuler />,
    "project-management": <LuClipboardCheck />,
  };

  const iconElement = icons[id] || <span>📦</span>;
  
  // Use primary orange (#e87722) unless a specific color (like white) is passed
  const finalColor = color || "#e87722";

  if (!animate) {
    return (
      <div className={className} style={{ color: finalColor }}>
        {iconElement}
      </div>
    );
  }

  return (
    <motion.div
      animate={{ 
        y: [0, -8, 0],
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      whileHover={{ 
        scale: 1.2, 
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 }
      }}
      className={`${className} block w-fit`}
      style={{ color: finalColor }}
    >
      {iconElement}
    </motion.div>
  );
}
