// src/pages/ContactPage.jsx

import ContactHero from "../components/Contact/Contacthero";
import ContactSection from "../components/Contact/Contactsection";
import Layout from "../shared/Layout";


export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <ContactSection />
    </Layout>
  );
}
