import AboutCTA from "../components/About/AboutCTA";
import AboutHero from "../components/About/AboutHero";
import CoreValues from "../components/About/CoreValues";
import MissionVision from "../components/About/MissionVision";
import ServicesTeaser from "../components/About/ServicesTeaser";
import StatsBar from "../components/About/StatsBar";
import WhoWeAre from "../components/About/WhoWeAre";
import WhyChooseUs from "../components/About/WhyChooseUs";
import Layout from "../shared/Layout";


export default function About() {
  return (
    <Layout>
      <AboutHero />
      <WhoWeAre />
      <StatsBar />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <ServicesTeaser />
      <AboutCTA />
    </Layout>
  );
}
