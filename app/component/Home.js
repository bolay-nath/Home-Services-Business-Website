"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"; // 👈 ADD THESE!
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { whatsappUrl } from "./AllData";
import slider1 from "@/public/images/slider/slider-1.jpg";
import slider2 from "@/public/images/slider/slider-2.jpeg";
import slider3 from "@/public/images/slider/slider-3.jpg";
import slider4 from "@/public/images/slider/slider-4.avif";
import slider5 from "@/public/images/slider/slider-5.jpg";

export const sliderImages = [slider1, slider2, slider3, slider4, slider5];

export default function HomeSection() {
  const [slide, setSlide] = useState(0);

  // ✅ Clean interval (no re-render issue)
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = useCallback((index) => {
    setSlide(index);
  }, []);

  // ✅ Memoized (no re-render cost)
  const socialIcons = useMemo(
    () => (
      <ul className="flex flex-row lg:flex-col gap-3 bg-white/90 shadow-xl rounded-3xl px-4 py-3 border border-white/20">
        {[
          { icon: FaFacebookF, href: "#", label: "Facebook" },
          { icon: FaTwitter, href: "#", label: "Twitter" },
          { icon: FaInstagram, href: "#", label: "Instagram" },
          { icon: FaLinkedin, href: "#", label: "LinkedIn" },
        ].map(({ icon: Icon, href, label }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              className="flex items-center justify-center w-11 h-11 rounded-2xl text-gray-600 hover:text-white hover:bg-teal-600 transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          </li>
        ))}
      </ul>
    ),
    [],
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 min-h-screen flex flex-col justify-between"
    >
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={sliderImages[slide]}
              alt={`Slide ${slide + 1}`}
              fill
              priority={slide === 0}
              loading={slide === 0 ? "eager" : "lazy"}
              sizes="100vw"
              quality={75}
              placeholder="blur"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === slide ? "w-8 bg-white" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Desktop Social */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20">
        {socialIcons}
      </div>

      {/* ✅ Main Content with SAFE motion */}
      <motion.div
        className="relative z-20 container mx-auto px-4 flex-1 flex items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-white max-w-2xl">
          <span className="inline-block bg-teal-500/20 px-6 py-3 rounded-xl text-lg mb-6">
            Professional Painting Experts
          </span>

          {/* ✅ Animated heading */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transform Your Space
            <span className="block text-teal-400">with Expert Painting</span>
          </motion.h1>

          <p className="text-xl mb-6 text-teal-100">
            Interior • Exterior • Villa • Apartment
          </p>

          {/* ✅ Light animation */}
          <motion.p
            className="text-lg mb-10 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Premium painting services with flawless finishes and durable
            results.
          </motion.p>

          {/* Buttons (NO motion, use CSS) */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition"
            >
              Get Free Quote
            </a>

            <a
              href="#services"
              className="px-8 py-4 border border-white text-white rounded-xl hover:bg-white/10 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </motion.div>

      {/* Mobile Social */}
      <div className="relative z-20 lg:hidden flex justify-center mt-10">
        {socialIcons}
      </div>
    </section>
  );
}
