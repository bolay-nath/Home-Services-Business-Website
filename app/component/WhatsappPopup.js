import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappPopup() {
  // Your WhatsApp phone number (in international format, no + or spaces)
  const whatsappNumber = "971501234567"; // Replace with your own

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello!%20I'm%20interested%20in%20your%20painting%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6"
      aria-label="WhatsApp"
    >
      {/* WhatsApp Button */}
      <div className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition group">
        <FaWhatsapp size={28} className="animate-bounce group-hover:animate-none" />
        <span className="hidden md:block font-semibold">Chat with us</span>
      </div>
    </a>
  );
}