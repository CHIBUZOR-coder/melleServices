import { createContext, useState } from "react";

const MellesContext = createContext();
const MellesProvider = ({ children }) => {
  const [isTransparent, setIsTransparent] = useState(false);
  return (
    <MellesContext.Provider value={{ isTransparent, setIsTransparent }}>
      {children}
    </MellesContext.Provider>
  );
};

export default MellesProvider;

export { MellesContext };
