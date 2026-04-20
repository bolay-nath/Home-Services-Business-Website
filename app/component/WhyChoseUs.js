import { FaPaintBrush, FaRegStar, FaCity, FaFileInvoice, FaShieldAlt, FaThumbsUp } from "react-icons/fa";

// Helper: render 5 inline stars
function FiveStars() {
  return (
    <span className="flex justify-center mb-2 gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <FaRegStar key={i} className="text-amber-400 text-xl" />
      ))}
    </span>
  );
}

const features = [
  {
    icon: <FaPaintBrush size={32} />,
    iconBg: "bg-amber-50",
    title: "Professional painting services",
    text: "Skilled professionals offering precise, customized painting solutions for varied spaces.",
  },
  {
    icon: <FiveStars />,
    iconBg: "bg-amber-50",
    title: "5 star customer service",
    text: "Consistent five-star customer service ensuring satisfaction, clear communication, and genuine care.",
  },
  {
    icon: <FaCity size={32} />,
    iconBg: "bg-teal-50",
    title: "Best painting services in Dubai",
    text: "Top-rated service in Dubai, delivering excellence and reliability for all projects, big or small.",
  },
  {
    icon: <FaFileInvoice size={32} />,
    iconBg: "bg-teal-50",
    title: "Transparent pricing structure",
    text: "Clear, upfront pricing so you always know what to expect. No hidden fees, ever.",
  },
  {
    icon: <FaShieldAlt size={32} />,
    iconBg: "bg-amber-50",
    title: "Quality assurance guarantee",
    text: "Every project is backed by our satisfaction guarantee and attention to detail.",
  },
  {
    icon: <FaThumbsUp size={32} />,
    iconBg: "bg-teal-50",
    title: "Top-rated by homeowners",
    text: "Trusted by hundreds of satisfied customers—see our reviews for real stories.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 bg-white" id="why-choose-us">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            why choose <span className="text-teal-500 font-extrabold">Jartech</span>?
          </h2>
          <p className="text-gray-500 text-lg">
            Our professional painting service can transform your home & provide true peace of mind
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition hover:-translate-y-2 duration-300"
            >
              <div className={`mb-5 inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.iconBg}`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-500">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}