import Layout from "../shared/Layout";
import PortfolioHero from "../components/Portfolio/PortfolioHero";
import PortfolioGrid from "../components/Portfolio/PortfolioGrid";
import PortfolioCTA from "../components/Portfolio/PortfolioCTA";
import CertificatesSlider from "../shared/CertificatesSlider";

const Portfolio = () => {
  return (
    <Layout>
      <main>
        <PortfolioHero />
        <PortfolioGrid />
        <CertificatesSlider />
        <PortfolioCTA />
      </main>
    </Layout>
  );
};

export default Portfolio;
