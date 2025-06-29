import React from "react";
import s1 from "../../public/service-ss1.jpg";
import s2 from "../../public/service-ss2.jpg";
import s3 from "../../public/service-ss3.jpg";
import s4 from "../../public/service-ss4.jpg";
import s5 from "../../public/service-ss5.jpg";
import ModalImage from "react-modal-image";
import FadeInSection from "./FadeInSection";

const ProjectDetailsServiceReview = () => {
  const images = [s1, s2, s3, s4];

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-900 text-gray-200">
      <FadeInSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-6">
            Service Review System
          </h2>

          <p className="mb-4">
            <strong>Main Tech Stack:</strong> React, Node.js, Express, MongoDB,
            JWT
          </p>
          <p className="mb-4">
            <strong>Description:</strong> A full-stack web app where users can
            add services, post/manage reviews, and explore others' reviews with
            secure authentication.
          </p>
          <p className="mb-4">
            <a
              href="https://service-review-system.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline"
            >
              Live Project
            </a>{" "}
            |
            <a
              href="https://github.com/rantu01/SRS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline ml-2"
            >
              GitHub Repo
            </a>{" "}
            |
            <a
              href="https://github.com/rantu01/srs-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline ml-2"
            >
              GitHub Repo backend
            </a>
          </p>
          <p className="mb-4">
            <strong>Challenges:</strong> Handling secure authentication, CRUD
            operations, and synchronizing frontend-backend data flow.
          </p>
          <p className="mb-8">
            <strong>Future Plans:</strong> Add service ratings, admin dashboard,
            and improve UI responsiveness.
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
                alt={`Screenshot ${index + 1}`}
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

export default ProjectDetailsServiceReview;
