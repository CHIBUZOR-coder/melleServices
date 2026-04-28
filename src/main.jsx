import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ RouterProvider imported
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ServicesPage from "./pages/Servicespage.jsx";
import ServiceDetailPage from "./components/service/Servicedetailpage.jsx";
import ContactPage from "./pages/Contactpage.jsx";
import MellesProvider from "./Context/MellesProvider.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <About />,
        path: "about",
      },
      { element: <ServicesPage />, path: "services" },
      { element: <ServiceDetailPage />, path: "services/:id" },
      { element: <ContactPage />, path: "contact" },
    ],
  },
]);

// ✅ Only ONE render call, using RouterProvider
createRoot(document.getElementById("root")).render(
  <MellesProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </MellesProvider>,
);
