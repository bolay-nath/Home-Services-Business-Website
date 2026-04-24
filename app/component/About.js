import Image from "next/image";
import { FaBrush, FaPalette, FaPaintRoller, FaHome } from "react-icons/fa";

export default function PaintingAboutSection() {
  const paintingFeatures = [
    {
      icon: <FaPaintRoller className="text-teal-500" size={28} />,
      title: "Interior & Exterior Painting",
      desc: "Flawless application for both indoor and outdoor surfaces, with clean prep and expert finish.",
    },
    {
      icon: <FaPalette className="text-teal-500" size={28} />,
      title: "Color Consultation",
      desc: "We help you select the perfect color combinations to match your taste and decor.",
    },
    {
      icon: <FaBrush className="text-teal-500" size={28} />,
      title: "Surface Preparation",
      desc: "Detailed sanding, priming, patching, and repair for long-lasting, smooth results.",
    },
    {
      icon: <FaHome className="text-teal-500" size={28} />,
      title: "Villa & Apartment Painting",
      desc: "Specialized solutions for villas, apartments, and commercial spaces of all sizes.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white px-4 py-20 md:py-32"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Larger Image */}
        <div className="w-full md:w-[410px] md:h-[510px] flex justify-center mb-8 md:mb-0 relative">
          <div className="relative w-full h-[320px] md:w-[410px] md:h-[510px]">
            <Image
              src="/images/WhyChooseUs-1.jpg"
              alt="Painting services team"
              fill
              sizes="(max-width: 768px) 100vw, 410px"
              className="rounded-2xl z-10 object-cover"
              priority
            />
            {/* Decorative shape */}
            <div className="absolute left-0 bottom-0 w-full h-full border-l-8 border-b-8 border-teal-500 rounded-bl-2xl -z-10" />
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 w-full flex-shrink-0">
          {/* Section Title */}
          <div className="mb-6 text-center md:text-left">
            <h5 className="text-teal-500 font-semibold text-lg">Our Painting Services</h5>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Why Choose Us for Your Next Paint Job?</h3>
            <ul className="flex gap-2 justify-center md:justify-start pb-2">
              <li className="w-16 h-1 rounded-full bg-teal-500"></li>
              <li className="w-3 h-1 rounded-full bg-teal-500"></li>
              <li className="w-2 h-1 rounded-full bg-teal-500"></li>
            </ul>
          </div>
          <p className="text-gray-600 mb-6 text-justify">
            <b>Make your home or business shine</b> with our expert painting solutions. We use premium paints,
            guarantee meticulous preparation, and deliver beautiful, long-lasting results—on time and on budget. Our professional painters:
          </p>
          <div className="grid grid-cols-1 gap-6">
            {paintingFeatures.map((feature, i) => (
              <div className="flex gap-4 items-start" key={i}>
                {feature.icon}
                <div>
                  <h6 className="text-gray-800 font-semibold mb-1">{feature.title}</h6>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}