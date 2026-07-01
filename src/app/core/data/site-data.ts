export interface Service {
  num: string;
  icon: string;
  title: string;
  description: string;
  anchorId: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface WhyCard {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const STATS = [
  { target: 5000, label: 'Satisfied Customers', suffix: '+' },
  { target: 100, label: 'Healthcare Products', suffix: '+' },
  { target: 10, label: 'Years of Trust', suffix: '+' },
  { target: 98, label: 'Satisfaction Rate', suffix: '%' },
];

export const SERVICES: Service[] = [
  {
    num: '01',
    icon: 'fa-prescription-bottle-medical',
    title: 'Prescription Medicines',
    description:
      'Genuine, licensed prescription drugs sourced directly from certified manufacturers. Accuracy and authenticity guaranteed.',
    anchorId: 'prescription-medicines',
  },
  {
    num: '02',
    icon: 'fa-heart-pulse',
    title: 'Healthcare Products',
    description:
      'A comprehensive range of OTC health and wellness products — vitamins, supplements, diagnostics, and personal care.',
    anchorId: 'healthcare-products',
  },
  {
    num: '03',
    icon: 'fa-spa',
    title: 'Wellness Solutions',
    description:
      'Holistic wellness products that go beyond medicine — supporting long-term health, prevention, and vitality.',
    anchorId: 'wellness-solutions',
  },
  {
    num: '04',
    icon: 'fa-syringe',
    title: 'Medical Supplies',
    description:
      'Surgical instruments, disposables, diagnostic tools, and hospital-grade consumables for clinics and healthcare providers.',
    anchorId: 'medical-supplies',
  },
  {
    num: '05',
    icon: 'fa-boxes-stacked',
    title: 'Bulk Orders',
    description:
      'Tailored bulk supply solutions for hospitals, clinics, pharmacies, and institutional buyers. Competitive pricing, no compromise on quality.',
    anchorId: 'bulk-orders',
  },
  {
    num: '06',
    icon: 'fa-headset',
    title: 'Customer Support',
    description:
      'Dedicated, multilingual support via phone, email, and WhatsApp. We stay with you from inquiry to delivery and beyond.',
    anchorId: 'customer-support',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Initial Inquiry',
    description:
      'Reach us by phone, email, or WhatsApp with your requirements — we respond within hours, not days.',
  },
  {
    step: '02',
    title: 'Consultation',
    description:
      'Our healthcare specialists review your needs, advise on product options, and confirm availability and pricing.',
  },
  {
    step: '03',
    title: 'Order Placement',
    description:
      'Once confirmed, your order is placed with full documentation, invoicing, and compliance records maintained.',
  },
  {
    step: '04',
    title: 'Quality Verification',
    description:
      'Every item is inspected for authenticity, expiry, and packaging integrity before it leaves our facility.',
  },
  {
    step: '05',
    title: 'Delivery',
    description:
      'Products are dispatched promptly with tracking details shared. We follow up to ensure your complete satisfaction.',
  },
];

export const WHY_CARDS: WhyCard[] = [
  {
    icon: 'fa-award',
    title: 'Quality Assurance',
    description:
      'Every product meets strict quality standards sourced from licensed manufacturers and verified to international pharmaceutical standards.',
  },
  {
    icon: 'fa-shield-virus',
    title: 'Trusted Healthcare',
    description:
      'Reliable pharmaceutical solutions with zero tolerance for counterfeits and full supply-chain traceability.',
  },
  {
    icon: 'fa-bolt',
    title: 'Fast Service',
    description:
      'Quick response and delivery — because in healthcare, time is critical. Efficient order processing every step of the way.',
  },
  {
    icon: 'fa-users',
    title: 'Customer Satisfaction',
    description:
      'Dedicated support and care across multiple channels — ensuring you always have someone to speak to when you need help.',
  },
  {
    icon: 'fa-tags',
    title: 'Competitive Pricing',
    description:
      'Bulk and retail options with transparent pricing — no hidden costs, no surprises. Premium quality at accessible prices.',
  },
  {
    icon: 'fa-earth-asia',
    title: 'Cross-Border Reach',
    description:
      'Serving customers across India, GCC countries, the UK, the USA, Australia, and Ireland with local knowledge and international standards.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: '"Professional service and genuinely authentic medicines. I\'ve been ordering from Well Med for 3 years and never once received a substandard product."',
    name: 'Abdul Rahiman',
    role: 'Pharmacy Owner, Malappuram',
    initials: 'AR',
  },
  {
    text: '"Excellent customer support. They guided me through a bulk order for our clinic and delivered on time with perfect documentation. Highly recommended."',
    name: 'Dr. Salma K.',
    role: 'General Physician, Kozhikode',
    initials: 'DS',
  },
  {
    text: '"As an NRI in Dubai, I needed to arrange medicines for my family back home. Well Med handled everything seamlessly. Their UAE contact made communication effortless."',
    name: 'Mohammed Faiz',
    role: 'Customer, UAE',
    initials: 'MF',
  },
  {
    text: '"The WhatsApp ordering process is incredibly convenient. Quick replies, genuine products, and they even followed up to ensure everything arrived safely."',
    name: 'Priya Varma',
    role: 'Healthcare Worker, Kochi',
    initials: 'PV',
  },
  {
    text: '"We placed our first institutional bulk order with Well Med and they exceeded our expectations — pricing, packaging, and punctuality were all top-tier."',
    name: 'Rajan K.',
    role: 'Hospital Admin, Thrissur',
    initials: 'RK',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What areas do you deliver to?',
    answer:
      'We serve customers across India, GCC countries, the UK, the USA, Australia, and Ireland. Contact us for shipping details, timelines, and country-specific requirements.',
  },
  {
    question: 'Do you accept bulk or institutional orders?',
    answer:
      'Yes. We welcome bulk orders from hospitals, clinics, pharmacies, and institutions. We offer competitive pricing and tailored delivery schedules for large-volume clients.',
  },
  {
    question: 'How do you ensure product authenticity?',
    answer:
      'All products are sourced directly from licensed and certified manufacturers. We maintain full supply-chain documentation and conduct quality checks before dispatch.',
  },
  {
    question: 'Can I order via WhatsApp?',
    answer:
      'Absolutely. WhatsApp is one of our primary order channels. Message us at +91 91885 51445 with your product list, quantity, and delivery address.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfer, UPI, and other standard payment methods. Payment terms for bulk institutional orders can be discussed directly with our team.',
  },
  {
    question: 'How do I contact your international team?',
    answer:
      'You can reach our team directly at +91 91885 51445 or through WhatsApp for enquiries, order coordination, and delivery support across our international service regions.',
  },
];

export const CONTACT = {
  address: 'Palace Building, Jamalangadi, Edavanna\nPIN 676541, Malappuram District, Kerala',
  email: 'info.wellmedpharma@gmail.com',
  phoneIndia: '+91 91885 51445',
  whatsapp: '+91 91885 51445',
  whatsappLink: 'https://wa.me/919188551445',
  phoneInternational: '+91 91885 51445',
  phoneUae: '+971 552986446',
  whatsappUaeLink: 'https://wa.me/971552986446',
  mapUrl:
    'https://maps.google.com/maps?q=Edavanna,Malappuram,Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed',
};
