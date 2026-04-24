// src/pages/Home.jsx

import Hero from "../components/Home/Hero";
import HomeCTA from "../components/Home/Homecta";
import HomeServices from "../components/Home/Homeservices";
import HomeStats from "../components/Home/Homestats";
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
        <HomeTestimonials />
        <HomeCTA />
      </main>
    </Layout>
  );
};

export default Home;
