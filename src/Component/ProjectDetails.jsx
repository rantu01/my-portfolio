import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImageLightbox from "./ImageLightbox";
import FadeInSection from "./FadeInSection";
import projects from "../data/json/projects.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-2xl">
        Project Not Found
      </div>
    );
  }

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prevLightbox = () => setLightboxIndex((v) => (v - 1 + project.images.length) % project.images.length);
  const nextLightbox = () => setLightboxIndex((v) => (v + 1) % project.images.length);

  return (
    <section className="min-h-screen -mt-10 py-12 md:py-24 px-4 md:px-8 bg-gray-900 text-gray-200">
      <FadeInSection>
        <div className="max-w-6xl mx-auto">
          
          {/* 1. Image Gallery */}
          <div className="mb-14 rounded-3xl border border-gray-700/70 bg-gray-800/40 p-4 md:p-6 shadow-2xl shadow-black/30">
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-teal-400/80">Project Gallery</p>
                <h3 className="mt-1 text-2xl md:text-3xl font-semibold text-white">Visual preview</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400 max-w-2xl md:text-right">
                A cleaner, balanced layout for the project screenshots so each image keeps its own space without stretching the page.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-12">
              {/* Large Featured Image */}
              <div className="lg:col-span-7 group relative overflow-hidden rounded-3xl border border-gray-700/60 bg-black/20 shadow-lg">
                <div className="aspect-[16/9]">
                  <img
                    src={project.images[0]}
                    alt="Project Main"
                    onClick={() => openLightbox(0)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="pointer-events-none absolute left-4 bottom-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  Featured view
                </div>
              </div>

              {/* Supporting Images */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {project.images.slice(1, 5).map((img, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-gray-700/60 bg-black/20 shadow-lg"
                  >
                    <div className="aspect-[4/3]">
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        onClick={() => openLightbox(index + 1)}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                      />
                    </div>

                    {index === 3 && project.images.length > 5 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/55 backdrop-blur-[1px] pointer-events-none">
                        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                          +{project.images.length - 5} more
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Extra images: horizontally scrollable strip to avoid overflow */}
            {project.images.length > 5 && (
              <div className="mt-5 overflow-x-auto no-scrollbar">
                <div className="flex gap-4 py-1">
                  {project.images.slice(5).map((img, idx) => (
                    <div key={idx} className="flex-shrink-0 w-44 sm:w-48 h-28 rounded-2xl overflow-hidden border border-gray-700/60 bg-black/20 shadow-md">
                      <img
                        src={img}
                        alt={`extra-${idx}`}
                        onClick={() => openLightbox(5 + idx)}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {lightboxOpen && (
            <ImageLightbox
              images={project.images}
              index={lightboxIndex}
              onClose={closeLightbox}
              onPrev={prevLightbox}
              onNext={nextLightbox}
            />
          )}

          {/* 2. Header Info */}
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-4 tracking-tight">
              {project.title}
            </h2>
            <div className="w-20 h-1 bg-teal-500 mb-6 md:mx-0 mx-auto"></div>
            <p className="text-lg leading-relaxed text-gray-300 max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* 3. Details Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 shadow-xl">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-4 py-1 bg-gray-700/50 text-teal-300 rounded-full text-sm border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 shadow-xl">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Project Links</h3>
                <div className="flex flex-col space-y-3">
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center text-teal-400 hover:text-teal-300 transition-colors w-fit">
                    <span className="mr-3 p-2 bg-gray-700 rounded-lg">🌐</span> Live Project
                  </a>
                  <a href={project.links.frontend} target="_blank" rel="noreferrer" className="flex items-center text-teal-400 hover:text-teal-300 transition-colors w-fit">
                    <span className="mr-3 p-2 bg-gray-700 rounded-lg">💻</span> GitHub Frontend
                  </a>
                  {project.links.backend && (
                    <a href={project.links.backend} target="_blank" rel="noreferrer" className="flex items-center text-teal-400 hover:text-teal-300 transition-colors w-fit">
                      <span className="mr-3 p-2 bg-gray-700 rounded-lg">⚙️</span> GitHub Backend
                    </a>
                  )}
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 shadow-xl">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Challenges & Solutions</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span className="text-teal-500 mr-2">▹</span> {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Future Plans */}
            <div className="h-full">
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 shadow-xl h-fit">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Future Plans</h3>
                <ul className="space-y-4">
                  {project.futurePlans.map((plan, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <div className="mr-4 mt-1 bg-teal-500/20 p-1 rounded">
                        <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      {plan}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
};

export default ProjectDetails;