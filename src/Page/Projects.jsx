import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/json/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-500 mb-3 tracking-wide">
          My Projects
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
          Here are some of the best projects I've worked on.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 justify-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/20 w-full"
            style={{ height: "32rem" }}
          >
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/0 to-teal-500/0 rounded-2xl group-hover:from-teal-500/30 group-hover:via-teal-500/20 group-hover:to-teal-500/0 transition-all duration-500 pointer-events-none"></div>
            
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Image Overlay Icon */}
              <div className="absolute bottom-4 right-4 bg-teal-500/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 h-[calc(32rem-16rem)] flex flex-col justify-between relative">
              {/* Decorative Line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
              
              <div>
                <h3 className="text-2xl font-semibold text-teal-500 mb-3 tracking-tight group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Optional: Add a short description if available in your JSON */}
                {project.shortDescription && (
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                )}
                
                {/* Tech Stack Tags (Optional - if you have tech stack in your JSON) */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded-full">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              {/* Button with animation */}
              <Link to={`/projects/${project.id}`}>
                <button
                  className="relative w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:shadow-lg group-hover:shadow-teal-500/30 overflow-hidden"
                  aria-label={`View more about ${project.title}`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Project
                    <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;