import Image from "next/image";
import { servicesSections } from "./AllData";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Header */}
        <div className="text-center mb-24">
          <span className="inline-block px-6 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            Professional Painting Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent mb-6">
            Expert Painting Solutions
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full shadow-md"></div>
        </div>

        {/* ✅ 4 Sections - Vertical Stack */}
        <div className="space-y-20 mb-24">
          {servicesSections.map((section) => (
            <div key={section.id}>
              {/* Section Header - NO NUMBERS */}
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                  {section.title}
                </h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  {section.subtitle}
                </p>
              </div>

              {/* ✅ 3 Cards HORIZONTAL - Professional spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {section.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="group/card bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-teal-200"
                  >
                    {/* ✅ PROFESSIONAL IMAGE - Full bleed top */}
                    <div className="h-52 lg:h-60 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={350}
                        className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* ✅ TIGHT PROFESSIONAL CONTENT PADDING */}
                    <div className="p-6 lg:p-8">
                      <h4 className="font-bold text-xl lg:text-2xl text-gray-900 mb-3 group-hover/card:text-teal-600 transition-colors line-clamp-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base line-clamp-3">
                        {service.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Property?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Get your free painting consultation and quote today.
          </p>
          <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-12 py-6 rounded-3xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
            Get Free Quote →
          </button>
        </div>
      </div>
    </section>
  );
}