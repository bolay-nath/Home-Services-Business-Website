// This file contains all the data used across the components in the application. It centralizes the content and makes it easier to manage and update.
const whatsappNumber = "971563202168";

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi!%20Painting%20quote%20for%20Home.`;

// Data for the Navbar component.
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const serviceDropdown = [
  { label: "Villa Painting", href: "#villa" },
  { label: "Apartment Painting", href: "#apartment" },
  { label: "Commercial Painting", href: "#commercial" },
  { label: "Renovation Painting", href: "#renovation" },
  { label: "Interior Painting", href: "#interior" },
  { label: "Exterior Painting", href: "#exterior" },
];

// Slider data and Image data for the HomeSection component.

// Service data for the ServicesSection component.
export const servicesSections = [
  {
    id: "villa",
    title: "Villa Painting Services",
    subtitle: "Luxury Residential Excellence",
    color: "from-amber-500 to-orange-500",
    services: [
      {
        image: "/images/Villa/villa-picture-1.jpeg",
        title: "Luxury Interior Painting",
        text: "Premium villa interiors with high-end finishes, custom colors & flawless execution.",
      },
      {
        image: "/images/Villa/villa-picture-2.jpeg",
        title: "Exterior Villa Facade",
        text: "Weatherproof exterior painting that enhances architectural beauty & longevity.",
      },
      {
        image: "/images/Villa/villa-picture-3.jpeg",
        title: "Ceiling & Moulding Work",
        text: "Expert crown moulding, tray ceilings & intricate detail painting.",
      },
    ],
  },
  {
    id: "apartment",
    title: "Apartment Painting Services",
    subtitle: "Modern Living Spaces",
    color: "from-emerald-500 to-teal-500",
    services: [
      {
        image: "/images/Apartment/apartment-1.jpeg",
        title: "Apartment Interior Refresh",
        text: "Quick, clean apartment painting with minimal disruption to residents.",
      },
      {
        image: "/images/Apartment/apartment-2.jpg",
        title: "Kitchen & Bathroom Painting",
        text: "Moisture-resistant paints for high-humidity apartment areas.",
      },
      {
        image: "/images/Apartment/apartment-3.jpg",
        title: "Balcony & Common Areas",
        text: "Durable painting for apartment balconies, corridors & shared spaces.",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial Painting Services",
    subtitle: "Professional Business Solutions",
    color: "from-blue-500 to-indigo-600",
    services: [
      {
        image: "/images/Commercial/commercial-1.jpg",
        title: "Office & Corporate Painting",
        text: "Professional office painting that creates inspiring work environments.",
      },
      {
        image: "/images/Commercial/commercial-2.jpg",
        title: "Retail Storefront Painting",
        text: "High-traffic, durable paints for shops, malls & commercial spaces.",
      },
      {
        image: "/images/Commercial/commercial-3.jpg",
        title: "Restaurant & Hospitality",
        text: "Food-safe, grease-resistant painting for restaurants & hotels.",
      },
    ],
  },
  {
    id: "renovation",
    title: "Renovation & Maintenance Painting",
    subtitle: "Restoration & Long-term Care",
    color: "from-purple-500 to-violet-600",
    services: [
      {
        image: "/images/Renovation/renovation-1.jpg",
        title: "Renovation Project Painting",
        text: "Complete painting for renovation projects - new builds to full makeovers.",
      },
      {
        image: "/images/Renovation/renovation-2.jpg",
        title: "Maintenance & Touch-ups",
        text: "Regular maintenance painting to keep properties in pristine condition.",
      },
      {
        image: "/images/Renovation/renovation-3.jpg",
        title: "Repairs & Restoration",
        text: "Wall repairs, plastering & restoration painting for damaged surfaces.",
      },
    ],
  },
  {
    id: "interior",
    title: "Interior Painting Services",
    subtitle: "Beautiful Indoor Finishes",
    color: "from-rose-500 to-pink-600",
    services: [
      {
        image: "/images/Interior/interior-1.jpg",
        title: "Wall Interior Painting",
        text: "Smooth wall painting with premium colors and elegant finishes.",
      },
      {
        image: "/images/Interior/interior-2.jpg",
        title: "Ceiling Interior Painting",
        text: "Professional ceiling painting for modern and classic interiors.",
      },
      {
        image: "/images/Interior/interior-3.jpg",
        title: "Decorative Wall Finishes",
        text: "Texture, accent walls & decorative painting for stylish homes.",
      },
    ],
  },
  {
    id: "exterior",
    title: "Exterior Painting Services",
    subtitle: "Durable Outdoor Protection",
    color: "from-sky-500 to-blue-600",
    services: [
      {
        image: "/images/Exterior/exterior-1.jpg",
        title: "House Exterior Painting",
        text: "Weather-resistant exterior painting for villas and houses.",
      },
      {
        image: "/images/Exterior/exterior-2.jpeg",
        title: "Boundary Wall Painting",
        text: "Durable painting for compound walls and outdoor structures.",
      },
      {
        image: "/images/Exterior/exterior-3.jpeg",
        title: "Facade Painting",
        text: "Modern facade painting to enhance building appearance.",
      },
    ],
  },
];
// Service we provide
export const filters = [
  { label: "All", value: "all" },
  { label: "Villa Painting", value: "villa" },
  { label: "Apartment Painting", value: "apartment" },
  { label: "Commercial Painting", value: "commercial" },
];

export const projects = [
  {
    id: 1,
    category: "villa",
    image: "/images/Projects/project-1.jpg",
    label: "Villa Interior Painting",
  },
  {
    id: 2,
    category: "apartment",
    image: "/images/Projects/project-2.jpg",
    label: "Apartment Wall Painting",
  },
  {
    id: 3,
    category: "commercial",
    image: "/images/Projects/project-3.jpg",
    label: "Office Painting Project",
  },
  {
    id: 4,
    category: "villa",
    image: "/images/Projects/project-4.jpg",
    label: "Villa Exterior Painting",
  },
  {
    id: 5,
    category: "apartment",
    image: "/images/Projects/project-5.jpg",
    label: "Apartment Renovation Painting",
  },
  {
    id: 6,
    category: "commercial",
    image: "/images/Projects/project-6.jpg",
    label: "Commercial Building Painting",
  },
  {
    id: 7,
    category: "villa",
    image: "/images/Projects/project-7.jpg",
    label: "Villa Exterior Painting",
  },
  {
    id: 8,
    category: "apartment",
    image: "/images/Projects/project-8.jpg",
    label: "Apartment Renovation Painting",
  },
  {
    id: 9,
    category: "commercial",
    image: "/images/Projects/project-9.jpg",
    label: "Commercial Building Painting",
  },
];
// process section data
export const processSteps = [
  {
    img: "/images/Process/site-inspection.jpeg",
    title: "Site Inspection",
    desc: "We assess wall condition and repairs.",
  },
  {
    img: "/images/Process/color-consultation.jpeg",
    title: "Color Consultation",
    desc: "Guidance on shades and finishes.",
  },
  {
    img: "/images/Process/surface-preparation.jpeg",
    title: "Surface Preparation",
    desc: "Cleaning, sanding & priming.",
  },
  {
    img: "/images/Process/painting-finishing.jpeg",
    title: "Painting & Finishing",
    desc: "Even coats with pro tools.",
  },
  {
    img: "/images/Process/final-inspection.jpeg",
    title: "Final Inspection",
    desc: "Spotless delivery & review.",
  },
];

// FAQ data for the FAQSection component.
export const faqs = [
  {
    question: "What painting services do you offer?",
    answer:
      "We offer a full range of painting services: apartment, villa, and office painting; interior and exterior; wall preparation; color consultation; and more.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "Contact us via WhatsApp, fill out our contact form, or call us directly. We'll schedule a free inspection and provide a detailed quotation.",
  },
  {
    question: "Do you use eco-friendly paints?",
    answer:
      "Yes! We offer eco-friendly and low-VOC paint options for health and safety. Just let us know your preference.",
  },
  {
    question: "How long does a typical painting job take?",
    answer:
      "Most apartments are finished in 1–3 days. Villas and large projects may take longer depending on size and requirements. We always work efficiently with minimal disruption.",
  },
  {
    question: "Will you move and protect furniture?",
    answer:
      "Absolutely! We carefully move, cover, and protect all furniture and floors before we begin, and restore everything after completion.",
  },
];
