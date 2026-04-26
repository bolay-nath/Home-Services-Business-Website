import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { whatsappNumber, whatsUPDisplay } from "./AllData";

export default function ContactSection() {
  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="bg-gradient-to-b from-white via-gray-50 to-blue-50 py-20 px-4 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-teal-900 bg-clip-text text-transparent leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get your free quote today. Professional painting services just a
              call away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ContactInfo
              icon={<FaPhone size={24} />}
              label="Call Us"
              value={whatsUPDisplay}
              link={`tel:${whatsappNumber}`}
            />
            <ContactInfo
              icon={<FaEnvelope size={24} />}
              label="Email"
              value="mordernPantingServices@gmail.com"
              link="mailto:mordernPantingServices@gmail.com"
            />
            <ContactInfo
              icon={<FaMapMarkerAlt size={24} />}
              label="UAE"
              value="UAE, Dubai"
            />
          </div>
        </div>
      </section>
    </>
  );
}

// ✅ ENHANCED ContactInfo Component
function ContactInfo({ icon, label, value, link }) {
  return (
    <a
      href={link}
      className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center flex flex-col items-center 
      hover:shadow-2xl hover:-translate-y-2 hover:bg-white transition-all duration-500 border border-gray-100 
      hover:border-teal-200 hover:ring-4 hover:ring-teal-50"
    >
      <div
        className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center 
      mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 mx-auto"
      >
        <div className="text-2xl text-white drop-shadow-lg">{icon}</div>
      </div>
      <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
        {label}
      </h3>
      <p className="text-gray-600 text-lg font-medium leading-tight">{value}</p>
    </a>
  );
}
