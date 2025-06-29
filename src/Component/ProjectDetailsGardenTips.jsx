import React from "react";
import g1 from "../../public/garden-tips1.jpg";
import g2 from "../../public/garden-tips2.jpg";
import g3 from "../../public/garden-tips3.jpg";
import g4 from "../../public/garden-tips4.jpg";
import g5 from "../../public/garden-tips5.jpg";
import ModalImage from "react-modal-image";
import FadeInSection from "./FadeInSection";

const ProjectDetailsGardenTips = () => {
  const images = [g1, g2, g3, g5];

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-900 text-gray-200">
      <FadeInSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-6">
            Garden Tips
          </h2>

          <p className="mb-4">
            <strong>Main Tech Stack:</strong> React, Node.js, Express, MongoDB,
            JWT
          </p>
          <p className="mb-4">
            <strong>Description:</strong> A gardening community platform where
            users can share tips, post gardening advice, and connect with other
            gardening enthusiasts. Features include user authentication, CRUD
            operations for posts, and interactive discussions.
          </p>
          <p className="mb-4">
            <a
              href="https://garden-tips.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline"
            >
              Live Project
            </a>{" "}
            |
            <a
              href="https://github.com/rantu01/garden-tips"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline ml-2"
            >
              GitHub Frontend
            </a>{" "}
            |
            <a
              href="https://github.com/rantu01/garden-tips-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline ml-2"
            >
              GitHub Backend
            </a>
          </p>
          <p className="mb-4">
            <strong>Challenges:</strong> Implementing real-time updates for
            posts and comments, managing user-generated content, and optimizing
            image uploads for gardening photos.
          </p>
          <p className="mb-8">
            <strong>Future Plans:</strong> Add plant identification feature,
            gardening calendar, and regional plant recommendations based on user
            location.
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
                alt={`Garden Tips Screenshot ${index + 1}`}
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

export default ProjectDetailsGardenTips;
