import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import ScrollToTop from "./Scrolltotop";

function App() {
  return (
    <>
      <Outlet />
      <ScrollToTop />
    </>
  );
}

export default App;
