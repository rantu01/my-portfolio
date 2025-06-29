import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white px-4"
    >
      {/* Profile Photo with Framer Motion animation */}
      <motion.img
        src="/profile-photo.jpg"
        alt="Rantu Mondal"
        className="w-96 h-96 rounded-full border-4 border-teal-400 mb-6 object-cover"
        animate={{
          y: [0, -20, 0], // উপরে-নিচে ভাসানো
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center">
        Hi, I’m Rantu Mondal
      </h1>

      {/* Designation */}
      <h2 className="text-xl md:text-3xl text-teal-400 mb-4 text-center font-semibold">
        MERN Stack Developer
      </h2>

      {/* Intro Text */}
      <p className="max-w-xl text-center text-gray-300 mb-8 px-2">
        I build full-stack web applications with MongoDB, Express, React, and Node.js.
      </p>

      {/* Social Links */}
      <div className="flex space-x-6 mb-8">
        <a
          href="https://github.com/rantu01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-teal-400 transition text-3xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rantubytes/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-teal-400 transition text-3xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Download Resume Button */}
      <a
        href="/rantu_resume1.pdf"
        download="Rantu_Mondal_Resume.pdf"
        className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
