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
// Service data for the ServicesSection component.
export const servicesSections = [
  {
    id: "villa",
    title: "Villa Painting Services",
    subtitle: "Luxury Residential Excellence",
    color: "from-amber-500 to-orange-500",
    services: [
      {
        image: "/images/Villa-1.jpeg",
        title: "Luxury Interior Painting",
        text: "Premium villa interiors with high-end finishes, custom colors & flawless execution."
      },
      {
        image: "/images/villa-2.jpeg",
        title: "Exterior Villa Facade",
        text: "Weatherproof exterior painting that enhances architectural beauty & longevity."
      },
      {
        image: "/images/Villa-3.jpeg",
        title: "Ceiling & Moulding Work",
        text: "Expert crown moulding, tray ceilings & intricate detail painting."
      }
    ]
  },
  {
    id: "apartment",
    title: "Apartment Painting Services", 
    subtitle: "Modern Living Spaces",
    color: "from-emerald-500 to-teal-500",
    services: [
      {
        image: "/images/apartment-1.jpeg",
        title: "Apartment Interior Refresh",
        text: "Quick, clean apartment painting with minimal disruption to residents."
      },
      {
        image: "/images/apartment-2.jpg",
        title: "Kitchen & Bathroom Painting",
        text: "Moisture-resistant paints for high-humidity apartment areas."
      },
      {
        image: "/images/apartment-4.jpg",
        title: "Balcony & Common Areas",
        text: "Durable painting for apartment balconies, corridors & shared spaces."
      }
    ]
  },
  {
    id: "commercial",
    title: "Commercial Painting Services",
    subtitle: "Professional Business Solutions",
    color: "from-blue-500 to-indigo-600",
    services: [
      {
        image: "/images/commercial-3.jpg",
        title: "Office & Corporate Painting",
        text: "Professional office painting that creates inspiring work environments."
      },
      {
        image: "/images/commercial-1.jpg",
        title: "Retail Storefront Painting",
        text: "High-traffic, durable paints for shops, malls & commercial spaces."
      },
      {
        image: "/images/commercial-4.jpg",
        title: "Restaurant & Hospitality",
        text: "Food-safe, grease-resistant painting for restaurants & hotels."
      }
    ]
  },
  {
    id: "renovation",
    title: "Renovation & Maintenance Painting",
    subtitle: "Restoration & Long-term Care",
    color: "from-purple-500 to-violet-600",
    services: [
      {
        image: "/images/renovation-1.jpg",
        title: "Renovation Project Painting",
        text: "Complete painting for renovation projects - new builds to full makeovers."
      },
      {
        image: "/images/renovation-2.jpg",
        title: "Maintenance & Touch-ups",
        text: "Regular maintenance painting to keep properties in pristine condition."
      },
      {
        image: "/images/renovation-3.jpg",
        title: "Repairs & Restoration",
        text: "Wall repairs, plastering & restoration painting for damaged surfaces."
      }
    ]
  },
  {
  id: "interior",
  title: "Interior Painting Services",
  subtitle: "Beautiful Indoor Finishes",
  color: "from-rose-500 to-pink-600",
  services: [
    {
      image: "/images/interior-1.jpg",
      title: "Wall Interior Painting",
      text: "Smooth wall painting with premium colors and elegant finishes."
    },
    {
      image: "/images/interior-2.jpg",
      title: "Ceiling Interior Painting",
      text: "Professional ceiling painting for modern and classic interiors."
    },
    {
      image: "/images/interior-3.jpg",
      title: "Decorative Wall Finishes",
      text: "Texture, accent walls & decorative painting for stylish homes."
    }
  ]
},
{
  id: "exterior",
  title: "Exterior Painting Services",
  subtitle: "Durable Outdoor Protection",
  color: "from-sky-500 to-blue-600",
  services: [
    {
      image: "/images/exterior-1.jpg",
      title: "House Exterior Painting",
      text: "Weather-resistant exterior painting for villas and houses."
    },
    {
      image: "/images/exterior-2.jpg",
      title: "Boundary Wall Painting",
      text: "Durable painting for compound walls and outdoor structures."
    },
    {
      image: "/images/exterior-3.jpg",
      title: "Facade Painting",
      text: "Modern facade painting to enhance building appearance."
    }
  ]
}

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
    image: "/images/apartment-3.jpg",
    label: "Villa Interior Painting",
  },
  {
    id: 2,
    category: "apartment",
    image: "/images/apartment-6.jpg",
    label: "Apartment Wall Painting",
  },
  {
    id: 3,
    category: "commercial",
    image: "/images/renovation-1.jpg",
    label: "Office Painting Project",
  },
  {
    id: 4,
    category: "villa",
    image: "/images/Painting-1.jpeg",
    label: "Villa Exterior Painting",
  },
  {
    id: 5,
    category: "apartment",
    image: "/images/Painting-10.jpeg",
    label: "Apartment Renovation Painting",
  },
  {
    id: 6,
    category: "commercial",
    image: "/images/apartment-4.jpg",
    label: "Commercial Building Painting",
  },
];
// process section data
export const processSteps = [
    {
      img: "/images/site-inspection.jpeg",
      title: "Site Inspection",
      desc: "We assess wall condition and repairs.",
    },
    {
      img: "/images/color-consultation.jpeg",
      title: "Color Consultation", 
      desc: "Guidance on shades and finishes.",
    },
    {
      img: "/images/surface-preparation.jpeg",
      title: "Surface Preparation",
      desc: "Cleaning, sanding & priming.",
    },
    {
      img: "/images/painting-finishing.jpeg",
      title: "Painting & Finishing",
      desc: "Even coats with pro tools.",
    },
    {
      img: "/images/final-inspection.jpeg",
      title: "Final Inspection",
      desc: "Spotless delivery & review.",
    },
  ];
