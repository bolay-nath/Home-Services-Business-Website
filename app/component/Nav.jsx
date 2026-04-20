"use client";
import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [active, setActive] = useState("#home");
    const menuRef = useRef(null);

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 20);
            setMenuOpen(false); // close mobile menu on scroll

            const scrollPos = window.scrollY + 120;

            navItems.forEach((item) => {
                const section = document.querySelector(item.href);
                if (section) {
                    if (
                        scrollPos >= section.offsetTop &&
                        scrollPos < section.offsetTop + section.offsetHeight
                    ) {
                        setActive(item.href);
                    }
                }
            });
        };

        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
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
    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        const offset = 10;

        window.scrollTo({
            top: section.offsetTop - offset,
            behavior: "smooth",
        });
    };


    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500
            ${isSticky ? "bg-white py-3 shadow-lg" : "bg-transparent py-6 text-white"}`}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4">

                {/* Logo */}


                <div className="text-2xl font-bold">
                    <a href="#home">
                        <img
                            src={`${isSticky ? "/images/logo-4.png" : "/images/logo-6.png"}`}
                            alt="logo"
                            className="h-12 w-auto"
                        />
                    </a>
                </div>



                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className="flex gap-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className={`relative font-semibold transition pb-1
                                    ${active === item.href
                                            ? "text-teal-500"
                                            : "hover:text-teal-500"
                                        }`}
                                >
                                    {item.label}

                                    {/* Animated underline */}
                                    <span
                                        className={`absolute left-0 bottom-0 h-[2px] bg-teal-500 transition-all duration-300
                                        ${active === item.href
                                                ? "w-full"
                                                : "w-0"
                                            }`}
                                    ></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl text-teal-500"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <FaBars />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`md:hidden bg-white shadow transition-all duration-300 overflow-hidden
                ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <ul className="px-4 py-3">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                    setMenuOpen(false);
                                }}
                                className={`block font-semibold py-2 px-2 rounded transition
                                ${active === item.href
                                        ? "text-teal-500 bg-teal-50"
                                        : "text-gray-700 hover:bg-teal-50"
                                    }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
