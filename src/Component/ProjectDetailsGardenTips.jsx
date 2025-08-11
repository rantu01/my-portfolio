import React from "react";
import g1 from "../../public/garden-tips1.jpg";
import g2 from "../../public/garden-tips2.jpg";
import g3 from "../../public/garden-tips3.jpg";
import g4 from "../../public/garden-tips4.jpg";
import g5 from "../../public/garden-tips5.jpg";
import ModalImage from "react-modal-image";
import FadeInSection from "./FadeInSection";

const ProjectDetailsGardenTips = () => {
  const images = [g1, g3, g4, g5];

  return (
    <section className="min-h-screen py-12 md:py-20 px-4 md:px-8 bg-gray-900 text-gray-200">
      <FadeInSection>
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-4">
              Garden Tips
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              A gardening community platform where users can share tips, post gardening advice, 
              and connect with other enthusiasts.
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Details */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Express', 'MongoDB', 'JWT'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Project Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://garden-tips.surge.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span className="mr-2">🌐</span> Live Project
                  </a>
                  <a
                    href="https://github.com/rantu01/garden-tips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span className="mr-2">💻</span> GitHub Frontend
                  </a>
                  <a
                    href="https://github.com/rantu01/garden-tips-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span className="mr-2">⚙️</span> GitHub Backend
                  </a>
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Challenges & Solutions</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Implemented real-time updates for posts and comments</li>
                  <li>Managed user-generated content effectively</li>
                  <li>Optimized image uploads for gardening photos</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Gallery */}
            <div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Future Plans</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Plant identification feature</li>
                  <li>Gardening calendar</li>
                  <li>Regional plant recommendations based on location</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-teal-500 mb-6 text-center md:text-left">
                Project Gallery
              </h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                  >
                    <ModalImage
                      small={img}
                      large={img}
                      alt={`Garden Tips Screenshot ${index + 1}`}
                      className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      hideDownload={true}
                      hideZoom={true}
                    />
                    <div
                      className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    >
                      <span className="text-white text-lg font-medium">View Fullscreen</span>
                    </div>
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

export default ProjectDetailsGardenTips;
