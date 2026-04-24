"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaBrush } from "react-icons/fa6";
import { navItems, serviceDropdown } from "./AllData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [active, setActive] = useState("#home");
  const [serviceOpen, setServiceOpen] = useState(false);
  const menuRef = useRef(null);
  const menuOpenRef = useRef(menuOpen);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      const offset = 80; // navbar height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 20);
          if (menuOpenRef.current) setMenuOpen(false);

          const scrollPos = window.scrollY + window.innerHeight / 2;
          let newActive = "#home";

          navItems.forEach((item) => {
            const section = document.querySelector(item.href);
            if (
              section &&
              scrollPos >= section.offsetTop &&
              scrollPos < section.offsetTop + section.offsetHeight
            ) {
              newActive = item.href;
            }
          });

          setActive(newActive);
          ticking = false;
        });

        ticking = true;
      }
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setServiceOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setServiceOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavItemClick = (item) => {
    if (item.label === "Services") {
      setServiceOpen(!serviceOpen);
    } else {
      scrollToSection(item.href);
      setMenuOpen(false);
      setServiceOpen(false);
    }
  };

  const handleServiceItemClick = (href) => {
    scrollToSection(href);
    setMenuOpen(false);
    setServiceOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isSticky
          ? "py-2.5 shadow-lg border-b border-gray-100 bg-white/95 backdrop-blur-md text-gray-900"
          : "py-4 text-white bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-12">
        {" "}
        {/* Fixed height */}
        {/* FIXED: Perfect Mobile/Desktop Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          {" "}
          {/*  Reduced gap */}
          {/* Paint Brush Icon - Perfect mobile size */}
          <div
            className={`h-10 w-10 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 rounded-lg shrink-0 ${
              isSticky
                ? "bg-linear-to-br from-gray-800 to-gray-900"
                : "bg-linear-to-br from-teal-500 to-teal-600"
            }`}
          >
            <FaBrush className="text-xl text-white drop-shadow-sm" />
          </div>
          {/* Responsive Text - Perfect on ALL screens */}
          <div className="text-left leading-tight min-w-0 overflow-hidden">
            <h1
              className={`font-black tracking-tight transition-all duration-300 truncate ${
                isSticky
                  ? "text-lg text-gray-900 drop-shadow-sm" //Smaller mobile
                  : "text-xl text-white/95 drop-shadow-2xl"
              }`}
            >
              Modern
            </h1>
            <p
              className={`font-bold tracking-wide transition-all duration-300 truncate text-xs sm:text-sm ${
                isSticky ? "text-teal-600" : "text-teal-300/90"
              }`}
            >
              Painting Services
            </p>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {" "}
          {/* Reduced gap */}
          <ul className="flex gap-6">
            {" "}
            {/* Reduced gap */}
            {navItems.map((item) => (
              <li key={item.href} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative font-semibold transition-all duration-100 pb-1 px-1 text-sm ${
                    active === item.href
                      ? "text-teal-500"
                      : "hover:text-teal-500 "
                  }`}
                >
                  {item.label}
                  {item.label === "Services" && (
                    <span className="ml-1 transition-transform group-hover:rotate-180 text-xs">
                      ▾
                    </span>
                  )}
                  <span
                    className={`absolute left-0 bottom-0 h-[0.5] bg-teal-500 transition-all duration-300 origin-left ${
                      active === item.href
                        ? "w-full scale-x-100"
                        : "w-0 scale-x-0"
                    }`}
                  />
                </a>

                {item.label === "Services" && (
                  <div
                    className="absolute left-0 top-full mt-2 w-56 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl opacity-0 invisible 
                                    group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100"
                  >
                    <ul className="py-2">
                      {serviceDropdown.map((service, i) => (
                        <li key={i}>
                          <a
                            href={service.href}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(service.href);
                            }}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 
                                                        transition-all duration-200 font-medium"
                          >
                            {service.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-teal-500 text-white px-5 py-1.5 rounded-lg font-semibold text-sm 
                        hover:bg-teal-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
          >
            Get Quote
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1.5 rounded-lg text-teal-500 hover:bg-teal-50/50 
                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100
                transition-all duration-300 overflow-hidden ${
                  menuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                }`}
      >
        <ul className="px-4 py-4 space-y-1.5">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick(item);
                }}
                className={`flex justify-between items-center w-full font-semibold py-2.5 px-3 rounded-xl transition-all duration-200 text-left text-sm ${
                  active === item.href
                    ? "text-teal-500 bg-teal-50 shadow-sm border border-teal-200"
                    : "text-gray-700 hover:bg-teal-50 hover:text-teal-500 hover:shadow-sm"
                }`}
              >
                <span>{item.label}</span>
                {item.label === "Services" && (
                  <span
                    className={`text-xs transition-transform duration-200 ${
                      serviceOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                )}
              </a>

              {item.label === "Services" && serviceOpen && (
                <div className="ml-4 mt-2 p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                  <ul className="space-y-1.5">
                    {serviceDropdown.map((service, i) => (
                      <li key={i}>
                        <a
                          href={service.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleServiceItemClick(service.href);
                          }}
                          className="block py-1.5 px-2.5 text-xs text-gray-600 
                                                    hover:text-teal-500 hover:bg-white hover:rounded-md 
                                                    transition-all duration-200 pl-1.5 border-l-2 border-transparent
                                                    hover:border-teal-300"
                        >
                          {service.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="px-4 pb-4 pt-2">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
              setMenuOpen(false);
            }}
            className="block w-full bg-linear-to-br from-teal-500 to-teal-600 text-white 
                        text-center py-3 px-6 rounded-xl font-semibold text-base 
                        hover:from-teal-600 hover:to-teal-700 shadow-lg hover:shadow-xl
                        transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
