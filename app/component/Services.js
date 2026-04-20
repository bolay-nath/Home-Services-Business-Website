import { FaMobileAlt, FaLaptopCode, FaPalette, FaCode, FaSearch, FaBullhorn } from "react-icons/fa";
import Image from "next/image";

const services = [
  {
    image: "/images/portfolio/Painting-8.jpeg",
    title: "Villa Painting",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!",
  },
  {
    image: "/images/slider/paint2.jpg",
    title: "Office Painting",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!",
  },
  {
    image: "/images/slider/paint3.jpg",
    title: "Shop & Commercial Painting",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!",
  },
  {
    image: "/images/slider/paint4.jpg",
    title: "Warehouse Painting",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!",
  },
  {
    image: "/images/slider/paint1.jpg",
    title: "Exterior Painting",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!",
  },
  {
    image: "/images/slider/paint2.jpg",
    title: "Floor Painting",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-screen bg-gray-50 py-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h5 className="text-teal-500 font-semibold text-lg">services</h5>
          <h3 className="text-3xl md:text-4xl font-bold mb-2">Services I Provide</h3>
          <ul className="flex gap-2 justify-center pb-2">
            <li className="w-16 h-1 rounded-full bg-teal-500"></li>
            <li className="w-3 h-1 rounded-full bg-teal-500"></li>
            <li className="w-2 h-1 rounded-full bg-teal-500"></li>
          </ul>
        </div>
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden group transition duration-300 flex flex-col min-h-[380px]"
            >

              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center flex-grow">

                {/* Icon */}


                {/* Title */}
                <h3 className="font-semibold text-xl mb-2">
                  {service.title}
                </h3>

                {/* Text */}
                <p className="text-gray-600">
                  {service.text}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}