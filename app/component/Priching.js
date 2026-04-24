"use client"; // Add if using Next.js App Router

import { useState } from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Luxury Villa Painting",
      desc: "Complete interior & exterior villa painting with premium weather-resistant coatings for long-lasting protection.",
      features: [
        "Waterproof exterior coatings",
        "Thermal insulating paints",
        "Decorative finishes & textures",
        "Masonry & concrete repair",
        "Premium quality guarantee",
      ],
      icon: "🏠",
    },
    {
      title: "Apartment Painting",
      desc: "From studio to penthouse, we provide smooth and fast apartment painting with complete makeover solutions.",
      features: [
        "Eco-friendly odor-free paints",
        "Same-day service available",
        "Furniture protection included",
        "Wall repair & plastering",
        "Premium quality guarantee",
      ],
      icon: "🏢",
    },
    {
      title: "Commercial Painting",
      desc: "Professional painting for offices, shops, and buildings with minimal disruption to your business.",
      features: [
        "After-hours & weekend work",
        "Fire-resistant coatings",
        "Anti-bacterial paints",
        "Corporate discounts",
        "Premium quality guarantee",
      ],
      icon: "🏛️",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleQuoteClick = (service) => {
    // Add your quote functionality here (e.g., modal, scroll to form, analytics)
    console.log(`Quote requested for: ${service.title}`);
    // Example: gtag('event', 'quote_request', { service: service.title });
  };

  return (
    <section
      className="bg-gradient-to-br from-gray-50 to-teal-50 py-20 px-4"
      role="region"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            Professional Painting Services
          </span>
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
          >
            Our Premium <span className="text-teal-500">Painting Services</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <article
              key={item.title}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] border border-gray-100"
              role="article"
              aria-labelledby={`service-title-${i}`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 id={`service-title-${i}`} className="text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-8 text-base leading-relaxed">
                  {item.desc}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8" role="list">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700 group-hover:text-gray-900 transition-colors"
                    >
                      <span className="text-teal-500 font-bold text-lg flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => handleQuoteClick(item)}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus-visible:ring-4"
                  aria-label={`Get a quote for ${item.title}`}
                >
                  Get Your Free Quote
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
