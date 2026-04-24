"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqs } from "./AllData";



export default function FAQSection() {
  const [open, setOpen] = useState([]);

  const toggleFAQ = (index) => {
    setOpen((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-10 items-center">
        
        {/* Image Block */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="relative w-full max-w-[400px] h-72 md:h-96">
            <Image
              src="/images/FAQ/FAQ-1.jpg"
              alt="Professional painting FAQ"
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
            <div className="absolute left-0 bottom-0 w-full h-full border-l-8 border-b-8 border-teal-500 rounded-bl-2xl -z-10" />
          </div>
        </div>

        {/* FAQ Block */}
        <div className="w-full md:w-1/2">
          <div className="mb-6 text-center md:text-left">
            <h5 className="text-teal-500 font-semibold text-lg">FAQ</h5>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              Frequently Asked Questions
            </h3>
            <ul className="flex gap-2 justify-center md:justify-start pb-2">
              <li className="w-16 h-1 rounded-full bg-teal-500"></li>
              <li className="w-3 h-1 rounded-full bg-teal-500"></li>
              <li className="w-2 h-1 rounded-full bg-teal-500"></li>
            </ul>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = open.includes(i);

              return (
                <div key={i} className="bg-white rounded-xl shadow p-5">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex items-center justify-between w-full font-semibold text-left text-gray-900 text-lg hover:text-teal-600 transition"
                  >
                    <h4 className="flex-1">{faq.question}</h4>

                    <span
                      className={`ml-2 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {isOpen ? (
                        <FaMinus className="text-teal-500" />
                      ) : (
                        <FaPlus className="text-teal-500" />
                      )}
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
