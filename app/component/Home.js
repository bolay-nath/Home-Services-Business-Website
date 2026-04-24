"use client";
import { useState, useEffect, useCallback } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { sliderImages } from "./AllData";

export default function HomeSection() {
  // Slider state
  const [slide, setSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setSlide((s) => (s + 1) % sliderImages.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const goToSlide = useCallback((index) => {
    setIsTransitioning(true);
    setSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, []);

  const socialIcons = (
    <motion.ul
      className="flex flex-row lg:flex-col gap-3 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl px-4 py-3 lg:px-3 lg:py-2 border border-white/20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {[
        { icon: FaFacebookF, href: "#", label: "Facebook" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaInstagram, href: "#", label: "Instagram" },
        { icon: FaLinkedin, href: "#", label: "LinkedIn" },
      ].map(({ icon: Icon, href, label }, i) => (
        <motion.li key={label} whileHover={{ y: -2 }}>
          <a
            href={href}
            aria-label={label}
            className="flex items-center justify-center w-11 h-11 lg:w-10 lg:h-10 rounded-2xl text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 shadow-md transition-all duration-300 group"
          >
            <Icon
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 min-h-screen flex flex-col justify-between"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={sliderImages[slide]}
              alt={`Premium painting project ${slide + 1}`}
              fill
              priority={slide === 0}
              sizes="100vw"
              className="object-cover"
              quality={[75, 85]}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/10 to-transparent" />
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {sliderImages.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === slide
                ? "w-10 bg-white shadow-lg"
                : "bg-white/50 hover:bg-white hover:w-6"
            }`}
            aria-label={`Go to slide ${i + 1} of ${sliderImages.length}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Social Icons - Desktop */}
      <motion.div
        className="hidden lg:flex absolute right-6 xl:right-12 top-1/2 -translate-y-1/2 z-20"
        variants={itemVariants}
      >
        {socialIcons}
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 container mx-auto px-4 md:px-8 flex-1 flex flex-col lg:flex-row items-center justify-center w-full py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex-1 text-center lg:text-left text-white max-w-2xl lg:pr-16 xl:pr-24"
          variants={itemVariants}
        >
          {/* Subtitle */}
          <motion.span
            className="inline-block bg-gradient-to-r from-teal-500/20 to-teal-400/20 text-teal-100 px-8 py-4 rounded-3xl text-xl md:text-2xl font-bold mb-8 backdrop-blur-md border border-teal-500/30 shadow-2xl"
            variants={itemVariants}
          >
            Professional Painting Experts
          </motion.span>

          {/* Main heading - INSTANT & IMPACTFUL */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl"
            variants={itemVariants}
          >
            Transform Your Space
            <span className="block text-teal-400 drop-shadow-xl">
              with Expert Painting
            </span>
          </motion.h1>

          {/* Services */}
          <motion.p
            className="text-2xl md:text-3xl font-bold mb-8 text-teal-100 tracking-wide uppercase"
            variants={itemVariants}
          >
            Interior • Exterior • Villa • Apartment
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto lg:mx-0 text-gray-200 leading-relaxed font-light"
            variants={itemVariants}
          >
            Premium painting services with flawless finishes, meticulous
            execution, and durable results. From luxury villas to commercial
            spaces — we deliver perfection in every stroke.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-teal-500/50 transform hover:-translate-y-2 transition-all duration-500 overflow-hidden backdrop-blur-sm border border-teal-500/20"
              aria-label="Get your free painting quote today"
            >
              <span className="relative z-10 tracking-wide">
                Get Free Quote
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent blur opacity-75 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                whileHover={{ x: "100%" }}
              />
            </a>

            <a
              href="#services"
              className="inline-flex items-center px-12 py-5 border-2 border-white/60 text-white font-bold text-xl rounded-3xl hover:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm hover:shadow-2xl"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Social Icons */}
      <motion.div
        className="relative z-20 lg:hidden flex justify-center w-full mt-16 px-4"
        variants={itemVariants}
      >
        {socialIcons}
      </motion.div>
    </section>
  );
}
