// src/pages/ServicesPage.jsx
import ServicesCTA from "../components/service/Servicescta";
import ServicesGrid from "../components/service/Servicesgrid";
import ServicesHero from "../components/service/ServicesHero";
import Layout from "../shared/Layout";


export default function ServicesPage() {
  return (
    <Layout>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </Layout>
  );
}
