"use client";

import { projects } from "@/lib/projects";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="w-full min-h-screen px-6 py-20 bg-black text-white">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-16">My Projects</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-350 mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)]"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              {project.image && (
                <Image
                  src={project.image}
                  alt="project"
                  fill
                  className="object-cover transition duration-500 brightness-75 group-hover:brightness-110 group-hover:scale-110"
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-40 transition" />

              {/* 🔥 Top-right icons */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                {/* Live */}
                <a
                  href={project.websiteLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/90 text-black backdrop-blur-md hover:scale-110 hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] transition"
                >
                  <FiExternalLink size={16} />
                </a>

                {/* GitHub */}
                <a
                  href={project.githubLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/90 text-black backdrop-blur-md hover:scale-110 hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] transition"
                >
                  <FiGithub size={16} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
                {project.name}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.desc}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.techs?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 group-hover:bg-purple-400/20 group-hover:text-purple-400 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
