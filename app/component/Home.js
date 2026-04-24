"use client";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const sliderImages = [
  "/images/sliding-2.jpeg", // Place your images in /public/images/slider/
  "/images/slider/paint2.jpg",
  "/images/sliding-4.jpg",
];



export default function HomeSection() {

  //for typing effect
  const [typedText, setTypedText] = useState("");
  const fullText = "Your Trusted Home Service Experts";

  useEffect(() => {
    let index = 0;
    let forward = true;

    const typing = setInterval(() => {
      if (forward) {
        index++;
        setTypedText(fullText.slice(0, index));

        if (index === fullText.length) {
          forward = false;
        }
      } else {
        index--;
        setTypedText(fullText.slice(0, index));

        if (index === 0) {
          forward = true;
        }
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);


  //finished typing effect
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

const socialIcons = (
  <ul className="flex flex-row lg:flex-col gap-3 bg-white/90 backdrop-blur-md shadow-xl rounded-full px-3 py-2 border border-gray-200">
    <li>
      <a
        href="#"
        aria-label="Facebook"
        className="flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-white hover:bg-teal-500 transition-all duration-300"
      >
        <FaFacebookF size={16} />
      </a>
    </li>

    <li>
      <a
        href="#"
        aria-label="Twitter"
        className="flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-white hover:bg-teal-500 transition-all duration-300"
      >
        <FaTwitter size={16} />
      </a>
    </li>

    <li>
      <a
        href="#"
        aria-label="Instagram"
        className="flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-white hover:bg-teal-500 transition-all duration-300"
      >
        <FaInstagram size={16} />
      </a>
    </li>

    <li>
      <a
        href="#"
        aria-label="LinkedIn"
        className="flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-white hover:bg-teal-500 transition-all duration-300"
      >
        <FaLinkedin size={16} />
      </a>
    </li>
  </ul>
);


  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-10 min-h-screen flex flex-col justify-between"
    >
      {/* Background slider images */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt=""
            fill
            priority={idx === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-2000ms ${idx === slide ? "opacity-100" : "opacity-0"
              }`}
          />

        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Social Icons - Desktop (right side) */}
      <div className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-10">
  {socialIcons}
</div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col md:flex-row items-center w-full">
        {/* Left (Text) */}
        <div className="flex-1 md:pr-10 text-center md:text-left text-white">
          <h4 className="text-teal-300 font-semibold text-2xl mb-2">Professional Painting & Home Services</h4>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>

          <span className="block text-lg md:text-xl font-medium mb-4">
            Specializing in Villa & Home Painting • Fast • Reliable • Quality Guaranteed
          </span>
          <p className="mb-6 max-w-xl mx-auto md:mx-0">
            We offer complete home care solutions—<strong className="text-teal-300">Painting, Water Tank Cleaning, Plumbing, Sanitary, Flooring, Handyman, Renovations, AC Duct Cleaning</strong> and more—for villas, apartments, and commercial properties.
          </p>
          <a
            href="#contact"
            className="inline-block bg-teal-500 text-white px-8 py-3 rounded-md font-semibold shadow hover:bg-teal-600 transition"
          >
            Book a Painting Service
          </a>
        </div>
        {/* Right (You can omit the static image; images are now background) */}
        <div className="flex-1"></div>
      </div>
      {/* Social Icons - Mobile, bottom */}
      <div className="relative z-10 lg:hidden flex justify-center w-full mt-6">
        {socialIcons}
      </div>
    </section>
  );
}