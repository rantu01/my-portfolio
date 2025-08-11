import React from "react";
import soulmate1 from "../../public/soulmate.png"; 
import soulmate2 from "../../public/about.png";
import soulmate3 from "../../public/biodatas.png";
import soulmate4 from "../../public/contact.png";
import ModalImage from "react-modal-image";
import FadeInSection from "./FadeInSection";

const ProjectDetailsSoulMate = () => {
  const images = [soulmate1, soulmate2, soulmate3, soulmate4]; // Add more if needed

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-900 text-gray-200">
      <FadeInSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-6">
            SoulMate Project
          </h2>

          <p className="mb-4">
            <strong>Main Tech Stack:</strong> MERN Stack (MongoDB, Express.js, React, Node.js), Firebase Auth, JWT, Tailwind CSS
          </p>

          <p className="mb-4">
            <strong>Description:</strong> SoulMate is a full-stack matrimony web application where users can register, create biodata, explore profiles, request contact info, and manage favorites. Admins can approve premium requests and manage platform content.
          </p>

          <p className="mb-4">
            <a
              href="https://soulmate-here.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline"
            >
              Live Project
            </a>{" "}
            |
            <a
              href="https://github.com/rantu01/soulmate-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline ml-2"
            >
              GitHub Client
            </a>{" "}
            |
            <a
              href="https://github.com/rantu01/matrimony-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline ml-2"
            >
              GitHub Server
            </a>
          </p>

          <p className="mb-4">
            <strong>Challenges:</strong> Implementing secure JWT-based authentication, managing conditional data visibility (e.g. contact info for premium users), creating responsive UI/UX, and integrating real-time updates for features like favorites.
          </p>

          <p className="mb-8">
            <strong>Future Plans:</strong> Add in-app messaging, premium payment integration (Stripe), dashboard analytics for admin, and push notifications for requests.
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
                alt={`SoulMate Screenshot ${index + 1}`}
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

export default ProjectDetailsSoulMate;
