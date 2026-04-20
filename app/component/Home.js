"use client";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const sliderImages = [
  "/images/slider/paint1.jpg", // Place your images in /public/images/slider/
  "/images/slider/paint2.jpg",
  "/images/slider/paint3.jpg",
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
        setTypedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          forward = false;
          setTimeout(() => { }, 2000); // pause
        }
      } else {
        setTypedText(fullText.slice(0, index));
        index--;
        if (index === 0) {
          forward = true;
        }
      }
    }, 70);

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
    <ul className="flex flex-row lg:flex-col gap-2 border border-teal-500/20 rounded-full bg-white shadow px-2 py-1 lg:p-0">
      <li><a href="#" className="block p-2 text-gray-400 hover:text-teal-500 transition" aria-label="Facebook"><FaFacebookF size={20} /></a></li>
      <li><a href="#" className="block p-2 text-gray-400 hover:text-teal-500 transition" aria-label="Twitter"><FaTwitter size={20} /></a></li>
      <li><a href="#" className="block p-2 text-gray-400 hover:text-teal-500 transition" aria-label="Instagram"><FaInstagram size={20} /></a></li>
      <li><a href="#" className="block p-2 text-gray-400 hover:text-teal-500 transition" aria-label="LinkedIn"><FaLinkedin size={20} /></a></li>
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
            className={`object-cover transition-opacity duration-2000 ${idx === slide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Social Icons - Desktop (right side) */}
      <div className="hidden lg:flex flex-col gap-2 absolute right-6 top-1/2 -translate-y-1/2 z-10 items-end">
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