// src/data/services.js

export const services = [
  {
    id: 'procurement',
    title: 'Procurement & Supply Chain Management',
    shortDesc:
      'We handle the entire procurement lifecycle, from sourcing and vendor vetting to logistics and final delivery.',
    icon: '📦',
    route: '/services/procurement',
    heroImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400',
    color: '#e87722',

    overview: `Melles Services handles the entire procurement lifecycle, from sourcing and vendor vetting to logistics and final delivery. Our goal is to secure the best value for your investment while ensuring compliance with quality standards.`,

    highlights: [
      'Strategic Sourcing: Identifying and qualifying reliable local and international suppliers.',
      'Logistics & Inventory Management: Efficient movement and storage of goods, ensuring timely availability.',
      'Quality Assurance: Rigorous inspection and verification processes to guarantee product specifications are met.',
      'Equipment & Materials Supply: Provision of a wide range of industrial, office, and specialized supplies.'
    ],

    stats: [
      { label: 'Supply Partners', value: '100+' },
      { label: 'Regions Covered', value: 'Global' },
      { label: 'Quality Rating', value: '99.9%' }
    ]
  },

  {
    id: 'general-contracts',
    title: 'General Contracts',
    shortDesc:
      'Melles Services undertakes a variety of general contract works, providing project management and execution services.',
    icon: '🏗️',
    route: '/services/general-contracts',
    heroImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400',
    color: '#1e2d5a',

    overview: `Melles Services undertakes a variety of general contract works, providing project management and execution services tailored to client needs. Our expertise spans minor civil works, infrastructure support, and facility maintenance.`,

    highlights: [
      'Minor Civil Works: Construction and renovation projects.',
      'Maintenance Contracts: Scheduled and reactive maintenance services for facilities and equipment.',
      'Specialized Project Support: Custom solutions for unique operational requirements.'
    ],

    stats: [
      { label: 'Projects Completed', value: '150+' },
      { label: 'Client Retention', value: '95%' },
      { label: 'Safety Record', value: '100%' }
    ]
  },

  {
    id: 'training',
    title: 'Professional Training',
    shortDesc:
      'Industry-focused training programs that build real-world competence.',
    icon: '🎓',
    route: '/services/training',
    heroImage:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400',
    color: '#e87722',

    overview: `At Melles Serv, we invest in human capital. Our training programs are 
    designed for professionals in oil & gas, logistics, and general industry — 
    combining theoretical knowledge with hands-on practical application.`,

    highlights: [
      'Oil & gas safety and operations training',
      'Logistics and supply chain management courses',
      'Procurement and contract management workshops',
      'Certified industry trainers and facilitators',
      'On-site and virtual training options'
    ],

    stats: [
      { label: 'Training Programs', value: '15+' },
      { label: 'Professionals Trained', value: '500+' },
      { label: 'Certification Tracks', value: '8' }
    ]
  },

  {
    id: 'tendering',
    title: 'Tendering & Contracts',
    shortDesc: 'Strategic tendering support that positions you to win.',
    icon: '📋',
    route: '/services/tendering',
    heroImage:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400',
    color: '#e87722',

    overview: `Melles Serv provides expert tendering services — helping clients 
    prepare, submit, and manage bids for government and private sector contracts. 
    We understand the tendering landscape and deliver proposals that stand out.`,

    highlights: [
      'Tender document preparation & review',
      'Bid strategy and competitive analysis',
      'Compliance and regulatory advisory',
      'Contract drafting and negotiation support',
      'Post-award contract management'
    ],

    stats: [
      { label: 'Tenders Submitted', value: '200+' },
      { label: 'Success Rate', value: '78%' },
      { label: 'Contract Value Managed', value: '$50M+' }
    ]
  },

  {
    id: 'logistics',
    title: 'Logistics Management',
    shortDesc: 'Seamless movement of goods — from origin to destination.',
    icon: '🚚',
    route: '/services/logistics',
    heroImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400',
    color: '#e87722',

    overview: `Our logistics management services ensure the smooth, timely, and 
    cost-effective movement of goods across complex supply chains. From warehousing 
    to last-mile delivery, Melles Serv keeps your operations running.`,

    highlights: [
      'Freight and transportation management',
      'Warehousing and inventory control',
      'Customs clearance and documentation',
      'Real-time cargo tracking',
      'Cold chain and specialized cargo handling'
    ],

    stats: [
      { label: 'Deliveries Managed', value: '1,000+' },
      { label: 'Routes Covered', value: '30+' },
      { label: 'On-Time Rate', value: '96%' }
    ]
  },

  {
    id: 'petroleum',
    title: 'Petroleum Supply & Distribution',
    shortDesc:
      'Reliable supply and distribution of petroleum products nationwide.',
    icon: '⛽',
    route: '/services/petroleum',
    heroImage:
      'https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=1400',
    color: '#e87722',

    overview: `Melles Serv is a trusted supplier and distributor of petroleum products, 
    serving industrial, commercial, and retail clients. We maintain robust supply 
    chains to guarantee product availability, quality, and timely delivery.`,

    highlights: [
      'Supply of AGO, PMS, DPK and lubricants',
      'Bulk and retail petroleum distribution',
      'Depot management and storage solutions',
      'Regulatory compliance and product certification',
      'Emergency supply support'
    ],

    stats: [
      { label: 'Litres Distributed', value: '10M+' },
      { label: 'Active Clients', value: '60+' },
      { label: 'Distribution Points', value: '20+' }
    ]
  },

  {
    id: 'oil-and-gas',
    title: 'Oil & Gas Services',
    shortDesc:
      'Full-spectrum oil and gas support — from upstream to downstream.',
    icon: '🛢️',
    route: '/services/oil-and-gas',
    heroImage:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400',
    color: '#e87722',

    overview: `Melles Serv delivers integrated oil and gas services covering upstream 
    exploration support, midstream operations, and downstream sales and supply. 
    We are a committed partner for operators navigating Nigeria's energy sector.`,

    highlights: [
      'Upstream support services and equipment supply',
      'Pipeline and facility maintenance',
      'Downstream petroleum sales and marketing',
      'HSE consulting and compliance',
      'Oil field procurement and logistics'
    ],

    stats: [
      { label: 'Industry Partners', value: '40+' },
      { label: 'HSE Compliance Rate', value: '100%' },
      { label: 'Field Operations', value: '50+' }
    ]
  }
]

// ✅ Helper — get a single service by its id
export const getServiceById = id => services.find(s => s.id === id)
