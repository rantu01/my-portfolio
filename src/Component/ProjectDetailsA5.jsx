import React from "react";
import a1 from "../../public/a5-1.jpg";
import ModalImage from "react-modal-image";
import FadeInSection from "./FadeInSection";

const ProjectDetailsA5 = () => {
  const images = [a1];

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-900 text-gray-200">
      <FadeInSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-6">
            A-5 Project
          </h2>

          <p className="mb-4">
            <strong>Main Tech Stack:</strong> HTML5, CSS3, JavaScript
          </p>
          <p className="mb-4">
            <strong>Description:</strong> A responsive front-end web application
            showcasing modern design principles and interactive elements.
            Features include smooth animations, responsive layouts, and engaging
            user interface components.
          </p>
          <p className="mb-4">
            <a
              href="https://rantu01.github.io/A-5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline"
            >
              Live Project
            </a>{" "}
            |
            <a
              href="https://github.com/rantu01/A-5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline ml-2"
            >
              GitHub Repo
            </a>
          </p>
          <p className="mb-4">
            <strong>Challenges:</strong> Implementing complex CSS animations
            while maintaining performance, ensuring cross-browser compatibility,
            and creating responsive designs for all device sizes.
          </p>
          <p className="mb-8">
            <strong>Future Plans:</strong> Add more interactive components,
            implement a dark/light mode toggle, and optimize loading
            performance.
          </p>

          <h3 className="text-2xl font-semibold text-teal-500 mb-4">
            Project Screenshots
          </h3>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {images.map((img, index) => (
              <ModalImage
                key={index}
                small={img}
                large={img}
                alt={`A-5 Screenshot ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow cursor-pointer"
                hideDownload={true}
                hideZoom={true}
              />
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ProjectDetailsA5;
