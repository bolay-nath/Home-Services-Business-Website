// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">
            Modern <span className="text-blue-600">Painting Services</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Premium painting and maintenance services. Delivering excellence 24/7.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600">
              <FaWhatsapp size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Professional Painting</li>
            <li>General Maintenance</li>
            <li>Kitchen & Bath</li>
            <li>Bespoke Carpentry</li>
            <li>Home Renovation</li>
            <li>Parquet Flooring</li>
          </ul>
        </div>

        {/* Concierge */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Concierge</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Our Heritage</li>
            <li>Contact Support</li>
            <li>Emergency 24/7</li>
            <li>
              Phone:{" "}
              <a href="tel:+971586125333" className="text-blue-600 font-medium">
                +971 58 612 5333
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8 py-6 text-center text-sm text-gray-500">
        © 2026 Modern Painting Services. All rights reserved.
      </div>
    </footer>
  );
}
