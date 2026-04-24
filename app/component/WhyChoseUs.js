import Image from "next/image";
import {
  FaPaintBrush,
  FaRegStar,
  FaCity,
  FaFileInvoice,
  FaShieldAlt,
  FaThumbsUp,
  FaBrush,
  FaPalette,
  FaPaintRoller,
  FaHome,
} from "react-icons/fa";

// ⭐ Stars
function FiveStars() {
  return (
    <div className="flex justify-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
}

// 🔹 Services
const paintingFeatures = [
  {
    icon: <FaPaintRoller className="text-teal-500" size={26} />,
    title: "Interior & Exterior Painting",
    desc: "Flawless finishes for indoor and outdoor spaces with expert precision.",
  },
  {
    icon: <FaPalette className="text-teal-500" size={26} />,
    title: "Color Consultation",
    desc: "We help you choose colors that match your style and space perfectly.",
  },
  {
    icon: <FaBrush className="text-teal-500" size={26} />,
    title: "Surface Preparation",
    desc: "Proper sanding, priming, and repairs for long-lasting results.",
  },
  {
    icon: <FaHome className="text-teal-500" size={26} />,
    title: "Villa & Apartment Painting",
    desc: "Custom painting solutions for homes and commercial properties.",
  },
];

// 🔹 Features
const features = [
  {
    icon: <FaPaintBrush size={28} />,
    title: "Professional Service",
    text: "Experienced painters delivering precise and high-quality results.",
  },
  {
    icon: <FiveStars />,
    title: "5-Star Experience",
    text: "Trusted by hundreds of happy clients with top-rated service.",
  },
  {
    icon: <FaCity size={28} />,
    title: "Dubai Experts",
    text: "Serving all areas with reliable and professional painting solutions.",
  },
  {
    icon: <FaFileInvoice size={28} />,
    title: "Transparent Pricing",
    text: "Clear quotes with no hidden charges or surprises.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Quality Guarantee",
    text: "We stand behind our work with full satisfaction guarantee.",
  },
  {
    icon: <FaThumbsUp size={28} />,
    title: "On-Time Delivery",
    text: "We complete every project on schedule and with care.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 🔥 TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* IMAGE */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src="/images/WhyChooseUs/WhyChooseUs-1.jpg"
              alt="Professional painting services"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* TEXT */}
          <div className="text-center lg:text-left">
            <h5 className="text-teal-500 font-semibold uppercase mb-2">
              Our Services
            </h5>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Why Choose{" "}
              <span className="text-teal-500">Modern Painting Services</span>
            </h2>

            <p className="text-gray-600 mb-8 text-lg">
              We provide professional painting solutions with premium materials,
              expert craftsmanship, and guaranteed long-lasting results.
            </p>

            {/* SERVICES LIST */}
            <div className="space-y-5">
              {paintingFeatures.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 justify-center lg:justify-start"
                >
                  {item.icon}
                  <div>
                    <h6 className="font-semibold text-gray-800">
                      {item.title}
                    </h6>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 HEADING */}
        <div className="text-center mb-14">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Hundreds of Clients
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We deliver reliable, high-quality painting services with customer
            satisfaction as our top priority.
          </p>
        </div>

        {/* 🔥 FEATURE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-teal-50 text-teal-600 mb-5 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h4 className="font-semibold text-lg mb-2 group-hover:text-teal-600">
                {item.title}
              </h4>

              <p className="text-gray-500 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
