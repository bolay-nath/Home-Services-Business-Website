import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappPopup() {
  // Your Pakistan number (updated)
  const whatsappNumber = "923498309488";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi!%20Painting%20quote%20for%20Rawalpindi.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[9999] bottom-4 right-4 md:bottom-6 md:right-6" // ✅ Mobile: closer to edge
      aria-label="WhatsApp Chat"
    >
      {/* ✅ Mobile-First WhatsApp Button */}
      <div className="flex items-center justify-center gap-2.5 
        bg-gradient-to-r from-green-500 to-green-600 
        text-white px-3.5 py-3 md:px-4 md:py-3.5 
        rounded-full shadow-xl hover:shadow-green-500/50 
        hover:from-green-600 hover:to-green-700 
        transition-all duration-200 group
        active:scale-95 md:hover:scale-105">
        
        <FaWhatsapp 
          size={24} // ✅ Smaller for mobile
          className="text-white drop-shadow-lg group-hover:rotate-12 transition-transform duration-200" 
        />
        
        {/* ✅ Mobile: Icon only | Desktop: Text + Icon */}
        <span className="hidden text-xs md:inline font-bold tracking-wide">
          Chat Now
        </span>
      </div>
    </a>
  );
}