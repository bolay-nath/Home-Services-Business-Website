export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: 99,
      period: "/monthly",
      highlight: false,
      btn: "get started",
      btnStyle: "btn-2",
      features: [
        "5 GB BandWidth",
        "Free Update",
        "High Regulation Printing",
        "Branding",
        "Another Great Features",
      ],
    },
    {
      name: "Premium",
      price: 199,
      period: "/monthly",
      highlight: true,
      btn: "get started",
      btnStyle: "btn-1",
      features: [
        "5 GB BandWidth",
        "Free Update",
        "High Regulation Printing",
        "Branding",
        "Another Great Features",
      ],
    },
    {
      name: "Ultimate",
      price: 299,
      period: "/monthly",
      highlight: false,
      btn: "get started",
      btnStyle: "btn-2",
      features: [
        "5 GB BandWidth",
        "Free Update",
        "High Regulation Printing",
        "Branding",
        "Another Great Features",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h5 className="text-teal-500 font-semibold text-lg">pricing</h5>
          <h3 className="text-3xl md:text-4xl font-bold mb-2">Pricing Plans</h3>
          <ul className="flex gap-2 justify-center pb-2">
            <li className="w-16 h-1 rounded-full bg-teal-500"></li>
            <li className="w-3 h-1 rounded-full bg-teal-500"></li>
            <li className="w-2 h-1 rounded-full bg-teal-500"></li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col transition
                ${plan.highlight ? "ring-2 ring-teal-500 scale-105 z-10 relative" : ""}
              `}
            >
              {/* Plan Header */}
              <div className="relative px-8 py-6 border-b">
                <h3 className="text-2xl font-bold text-gray-900 capitalize">{plan.name}</h3>
                {plan.highlight && (
                  <span className="absolute right-0 top-3 bg-teal-500 text-white px-4 py-1 rounded-l-xl text-sm font-bold rotate-12">best value</span>
                )}
              </div>
              {/* Price */}
              <div className="flex items-end justify-center px-8 py-8 gap-1">
                <span className="text-base text-gray-400 font-medium">$</span>
                <span className="text-5xl md:text-6xl font-bold text-teal-500 leading-tight">{plan.price}</span>
                <span className="text-base text-gray-400 font-medium">{plan.period}</span>
              </div>
              {/* Features */}
              <ul className="flex-1 px-8 pb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="py-2 border-b last:border-b-0 flex items-center gap-2 text-gray-600">
                    <span className="text-teal-500 font-bold text-xl">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Footer */}
              <div className="px-8 pb-8 mt-auto flex justify-center">
                <a
                  href="#"
                  className={`inline-block px-8 py-3 rounded-md font-semibold transition text-center
                    ${plan.highlight
                      ? "bg-teal-500 text-white hover:bg-teal-600 shadow"
                      : "border border-teal-500 text-teal-500 bg-white hover:bg-teal-500 hover:text-white"
                    }`}
                >
                  {plan.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}