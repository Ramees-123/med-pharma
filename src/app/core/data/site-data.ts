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
  { target: 1000, label: 'Happy Customers', suffix: '+' },
  { target: 3, label: 'Years of Trusted Service', suffix: '+' },
  { target: 12, label: 'Countries Served', suffix: '' },
  { target: 100, label: 'Delivery Success Rate', suffix: '%' },
];

export const SERVICES: Service[] = [
  {
    num: '01',
    icon: 'fa-prescription-bottle-medical',
    title: 'Personal Medicine Supply',
    description:
      'We supply genuine English (Allopathic) medicines and authentic Ayurvedic medicines only for personal medical use.',
    anchorId: 'personal-medicine-supply',
  },
  {
    num: '02',
    icon: 'fa-file-prescription',
    title: 'Prescription Medicine Arrangement',
    description:
      'We arrange prescription medicines with careful verification, availability checks, and proper documentation.',
    anchorId: 'prescription-medicine-arrangement',
  },
  {
    num: '03',
    icon: 'fa-leaf',
    title: 'Ayurvedic Medicine Support',
    description:
      'Authentic Ayurvedic medicines are arranged and shipped with the same focus on safety, legality, and delivery care.',
    anchorId: 'ayurvedic-medicine-support',
  },
  {
    num: '04',
    icon: 'fa-truck',
    title: 'International Medicine Delivery',
    description:
      'We provide legal medicine shipping from India to the UAE, Saudi Arabia, Qatar, Oman, Bahrain, UK, USA, Ireland, and Australia.',
    anchorId: 'international-medicine-delivery',
  },
  {
    num: '05',
    icon: 'fa-file-contract',
    title: 'Documentation & Approvals',
    description:
      'Our team manages prescription validation, regulatory documentation, country-specific approvals, and courier paperwork.',
    anchorId: 'documentation-approvals',
  },
  {
    num: '06',
    icon: 'fa-headset',
    title: 'Door-to-Door Delivery',
    description:
      'We coordinate secure packaging, international courier processing, tracking support, and reliable doorstep delivery.',
    anchorId: 'door-to-door-delivery',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Contact Our Team',
    description:
      'Share your requirement with our support team and provide your valid prescription for review.',
  },
  {
    step: '02',
    title: 'Prescription Review',
    description:
      'We verify the prescription and confirm medicine availability and legal eligibility for the destination country.',
  },
  {
    step: '03',
    title: 'Documentation Preparation',
    description:
      'We prepare the required documentation, approvals, and country-specific compliance paperwork.',
  },
  {
    step: '04',
    title: 'Country-specific Approval',
    description:
      'We complete the approval process for the destination country, including SFDA or MOH where applicable.',
  },
  {
    step: '05',
    title: 'Secure Dispatch',
    description:
      'Medicines are packed carefully, checked for authenticity and expiry, and dispatched through a trusted courier.',
  },
  {
    step: '06',
    title: 'Doorstep Delivery',
    description:
      'Shipment is delivered to your doorstep with tracking support and complete documentation.',
  },
];

export const WHY_CARDS: WhyCard[] = [
  {
    icon: 'fa-certificate',
    title: 'Genuine Medicines',
    description: 'All medicines are sourced from trusted channels and verified before dispatch.',
  },
  {
    icon: 'fa-hand-holding-dollar',
    title: 'Affordable Pricing',
    description: 'We offer competitive and transparent pricing for all medicines and services.',
  },
  {
    icon: 'fa-gavel',
    title: 'Legal International Shipping',
    description: 'We ensure full legal compliance with regulations of both India and the destination country.',
  },
  {
    icon: 'fa-box',
    title: 'Secure Packaging',
    description: 'Medicines are carefully packed with temperature-conscious handling where required.',
  },
  {
    icon: 'fa-bolt',
    title: 'Fast Processing',
    description: 'We process orders efficiently with quick documentation and dispatch handling.',
  },
  {
    icon: 'fa-door-open',
    title: 'Door-to-Door Delivery',
    description: 'Complete door-to-door delivery service with shipment tracking support.',
  },
  {
    icon: 'fa-check-circle',
    title: 'Prescription Verification',
    description: 'Every prescription is carefully verified before any medicine is dispatched.',
  },
  {
    icon: 'fa-globe',
    title: 'Country-specific Compliance',
    description: 'We handle SFDA, MOH, and other country-specific regulatory requirements.',
  },
  {
    icon: 'fa-users',
    title: 'Experienced Team',
    description: 'Professional documentation team with experience in international medicine shipping.',
  },
  {
    icon: 'fa-headset',
    title: 'Responsive Support',
    description: 'Our customer support team is ready to assist you at every step.',
  },
  {
    icon: 'fa-ship',
    title: 'Safe International Courier',
    description: 'We partner with reliable courier services for safe international medicine delivery.',
  },
  {
    icon: 'fa-medal',
    title: 'Reliable Delivery Process',
    description: 'End-to-end professional handling of the complete medicine shipment process.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: '"The documentation and prescription support made the whole process simple and stress-free. I received my medicines safely and on time."',
    name: 'Abdul Rahiman',
    role: 'Patient, Malappuram',
    initials: 'AR',
  },
  {
    text: '"Professional handling, clear communication, and genuine medicines. The shipment process felt secure from start to finish."',
    name: 'Dr. Salma K.',
    role: 'Patient, Kozhikode',
    initials: 'SK',
  },
  {
    text: '"As someone living abroad, I needed a reliable partner for medicine delivery. They managed the process legally and professionally."',
    name: 'Mohammed Faiz',
    role: 'Customer, UAE',
    initials: 'MF',
  },
  {
    text: '"The team handled my prescription and documentation carefully. I appreciated the secure packaging and doorstep delivery support."',
    name: 'Priya Varma',
    role: 'Patient, Kochi',
    initials: 'PV',
  },
  {
    text: '"The process was transparent and efficient, and the shipment arrived without any hassle. Highly recommended for legal medicine delivery."',
    name: 'Rajan K.',
    role: 'Patient, Thrissur',
    initials: 'RK',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What areas do you deliver to?',
    answer:
      'We provide medicine delivery throughout India, including Kerala, and to several international destinations such as the UAE, Saudi Arabia, Qatar, Oman, Bahrain, UK, USA, Ireland, and Australia.',
  },
  {
    question: 'Do you provide medicines only for personal use?',
    answer:
      'Yes. We supply medicines strictly for personal medical use and manage the legal shipping process with the required documentation and approvals. We do not handle bulk orders, wholesale supply, or commercial distribution.',
  },
  {
    question: 'How do you ensure medicine authenticity?',
    answer:
      'All medicines are sourced from trusted channels and carefully checked before dispatch for authenticity, expiry date, and packaging integrity.',
  },
  {
    question: 'Can I order via WhatsApp?',
    answer:
      'Absolutely. WhatsApp is one of our primary communication channels. Message us at +91 91885 51445 with your prescription details and destination country.',
  },
  {
    question: 'What regulatory support do you provide?',
    answer:
      'We provide SFDA documentation support for Saudi Arabia shipments, MOH guideline support for UAE shipments, and country-specific documentation and import compliance support for all other destinations.',
  },
  {
    question: 'How do I contact your team?',
    answer:
      'You can reach our team directly at +91 91885 51445 or through WhatsApp for enquiries, prescription review, and international delivery support.',
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
