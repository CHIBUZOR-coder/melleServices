// src/pages/Home.jsx

import Hero from "../components/Home/Hero";
import ClientSlider from "../shared/ClientSlider";
import HomeCTA from "../components/Home/Homecta";
import HomeServices from "../components/Home/Homeservices";
import HomeStats from "../components/Home/Homestats";
import HomeTeam from "../components/Home/HomeTeam";
import HomeTestimonials from "../components/Home/Hometestimonials";
import HomeWhyUs from "../components/Home/Homewhyus";
import Layout from "../shared/Layout";

const Home = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <HomeServices />
        <HomeStats />
        <HomeWhyUs />
        <HomeTeam />
        <HomeTestimonials />
        <ClientSlider />
        <HomeCTA />
      </main>
    </Layout>
  );
};

export default Home;
