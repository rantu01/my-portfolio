import React from "react";
import { useParams } from "react-router-dom";
import ModalImage from "react-modal-image";
import FadeInSection from "./FadeInSection";
import { projectsData } from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams(); // URL theke id nibe (e.g., /project/soulmate)
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-2xl">Project Not Found</div>;
  }

  return (
    <section className="min-h-screen py-12 md:py-20 px-4 md:px-8 bg-gray-900 text-gray-200">
      <FadeInSection>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-4">{project.title}</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">{project.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Project Links</h3>
                <div className="space-y-3">
                  <a href={project.links.live} target="_blank" className="flex items-center text-teal-400 hover:text-teal-300 transition-colors">
                    <span className="mr-2">🌐</span> Live Project
                  </a>
                  <a href={project.links.frontend} target="_blank" className="flex items-center text-teal-400 hover:text-teal-300 transition-colors">
                    <span className="mr-2">💻</span> GitHub Frontend
                  </a>
                  {project.links.backend && (
                    <a href={project.links.backend} target="_blank" className="flex items-center text-teal-400 hover:text-teal-300 transition-colors">
                      <span className="mr-2">⚙️</span> GitHub Backend
                    </a>
                  )}
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Challenges & Solutions</h3>
                <ul className="space-y-3 list-disc pl-5">
                  {project.challenges.map((challenge, idx) => <li key={idx}>{challenge}</li>)}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Future Plans</h3>
                <ul className="space-y-3 list-disc pl-5">
                  {project.futurePlans.map((plan, idx) => <li key={idx}>{plan}</li>)}
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-teal-500 mb-6 text-center md:text-left">Project Gallery</h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {project.images.map((img, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                    <ModalImage small={img} large={img} alt={`Screenshot ${index + 1}`} className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105" hideDownload hideZoom />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ProjectDetails;