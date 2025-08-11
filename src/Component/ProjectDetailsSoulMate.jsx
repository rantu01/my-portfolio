import React from "react";
import soulmate1 from "../../public/soulmate.png";
import soulmate2 from "../../public/about.png";
import soulmate3 from "../../public/biodatas.png";
import soulmate4 from "../../public/contact.png";
import ModalImage from "react-modal-image";
import FadeInSection from "./FadeInSection";

const ProjectDetailsSoulMate = () => {
  const images = [soulmate1, soulmate2, soulmate3, soulmate4];

  return (
    <section className="min-h-screen py-12 md:py-20 px-4 md:px-8 bg-gray-900 text-gray-200">
      <FadeInSection>
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-4">
              SoulMate Project
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              SoulMate is a full-stack matrimony web application where users can register, create biodata, explore profiles, request contact info, and manage favorites. Admins can approve premium requests and manage platform content.
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
                  {['MERN Stack', 'Firebase Auth', 'JWT', 'Tailwind CSS'].map((tech, index) => (
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
                    href="https://soulmate-here.surge.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span className="mr-2">🌐</span> Live Project
                  </a>
                  <a
                    href="https://github.com/rantu01/soulmate-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span className="mr-2">💻</span> GitHub Client
                  </a>
                  <a
                    href="https://github.com/rantu01/matrimony-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span className="mr-2">⚙️</span> GitHub Server
                  </a>
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Challenges & Solutions</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Implementing secure JWT-based authentication</li>
                  <li>Managing conditional data visibility (e.g. contact info for premium users)</li>
                  <li>Creating responsive UI/UX</li>
                  <li>Integrating real-time updates for features like favorites</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Gallery */}
            <div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-semibold text-teal-500 mb-4">Future Plans</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Add in-app messaging</li>
                  <li>Premium payment integration (Stripe)</li>
                  <li>Dashboard analytics for admin</li>
                  <li>Push notifications for requests</li>
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
                      alt={`SoulMate Screenshot ${index + 1}`}
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

export default ProjectDetailsSoulMate;
