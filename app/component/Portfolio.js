"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import {filters} from "./AllData";
import {projects} from "./AllData";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h5 className="text-teal-500 font-semibold text-lg">
            Our Painting Projects
          </h5>

          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Recent Painting Work in Dubai
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our latest villa, apartment, and commercial painting
            projects. We deliver high-quality interior and exterior painting
            services with professional finishing and long-lasting results.
          </p>

          <ul className="flex gap-2 justify-center pt-4">
            <li className="w-16 h-1 rounded-full bg-teal-500"></li>
            <li className="w-3 h-1 rounded-full bg-teal-500"></li>
            <li className="w-2 h-1 rounded-full bg-teal-500"></li>
          </ul>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`uppercase border border-teal-500 px-4 py-2 rounded font-semibold transition-all
              ${
                activeFilter === filter.value
                  ? "bg-teal-500 text-white"
                  : "bg-white text-teal-500 hover:bg-teal-100"
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden shadow cursor-pointer hover:shadow-lg transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.label}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all">
                <h4 className="text-lg font-bold text-teal-400 mb-2 capitalize">
                  {project.label}
                </h4>
                <div className="flex justify-center">
                  <span className="bg-teal-500 text-white rounded-full p-3">
                    <FaSearch />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
