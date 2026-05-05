import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/json/projects.json"; // Load projects from JSON

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

      {/* Grid container: 1 column for mobile, 3 columns for large screens */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 justify-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl w-full"
            style={{ height: "30rem" }} 
          >
            {/* Project Image */}
            <div className="relative h-72">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Project Content */}
            <div className="p-8 h-[calc(30rem-18rem)] flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-teal-500 mb-4 tracking-tight">
                {project.title}
              </h3>
              
              {/* Dynamic Path using project id */}
              <Link to={`/projects/${project.id}`}>
                <button
                  className="w-full bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white font-semibold py-3 px-6 rounded-lg transition"
                  aria-label={`View more about ${project.title}`}
                >
                  View More
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