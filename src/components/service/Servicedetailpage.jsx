// src/pages/ServiceDetailPage.jsx
// Route: /services/:id  (e.g. /services/petroleum, /services/logistics)
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";


import Layout from "../../shared/Layout";
import { getServiceById, services } from "../../data/services";
import DetailHero from "./Servicedetailpage/DetailHero";
import DetailOverview from "./Servicedetailpage/DetailOverview";
import DetailStats from "./Servicedetailpage/DetailStats";
import RelatedServices from "./Servicedetailpage/RelatedServices";
import DetailCTA from "./DetailCTA";

// ── Sub-components ────────────────────────────────────────────────







// ── Page ──────────────────────────────────────────────────────────

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = getServiceById(id);

  // 404 fallback — redirect to services list if id doesn't exist
  if (!service) return <Navigate to="/services" replace />;

  return (
    <Layout>
      <DetailHero service={service} />
      <DetailOverview service={service} />
      <DetailStats service={service} />
      <RelatedServices currentId={service.id} services={services} />
      <DetailCTA />
    </Layout>
  );
}
