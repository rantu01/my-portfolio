import React from "react";
import s1 from "../../public/service-ss1.jpg";
import s2 from "../../public/service-ss2.jpg";
import s3 from "../../public/service-ss3.jpg";
import s4 from "../../public/service-ss4.jpg";
import ModalImage from "react-modal-image";
import FadeInSection from "./FadeInSection";

const ProjectDetailsServiceReview = () => {
  const images = [s1, s2, s3, s4];

  return (
    <section className="min-h-screen py-12 md:py-20 px-4 md:px-8 bg-gray-900 text-gray-200">
      <FadeInSection>
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-4">
              Service Review System
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              A full-stack web app where users can add services, post/manage reviews, and explore others' reviews with secure authentication.
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
                    href="https://service-review-system.surge.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span className="mr-2">🌐</span> Live Project
                  </a>
                  <a
                    href="https://github.com/rantu01/SRS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span className="mr-2">💻</span> GitHub Repo
                  </a>
                  <a
                    href="https://github.com/rantu01/srs-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span className="mr-2">⚙️</span> GitHub Repo backend
                  </a>
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Challenges & Solutions</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Handling secure authentication</li>
                  <li>Managing CRUD operations</li>
                  <li>Synchronizing frontend-backend data flow</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Gallery */}
            <div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Future Plans</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Add service ratings</li>
                  <li>Admin dashboard</li>
                  <li>Improve UI responsiveness</li>
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
                      alt={`Screenshot ${index + 1}`}
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

export default ProjectDetailsServiceReview;
