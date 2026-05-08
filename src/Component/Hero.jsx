import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [videoReady, setVideoReady] = useState(false);
  return (
    <section
      id="home"
      className="relative overflow-hidden h-screen flex flex-col justify-center items-center text-white px-4 -mt-10"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/14519632_3840_2160_25fps.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay to preserve readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/60 -z-10" aria-hidden="true" />

      {/* Black fallback while video is loading (behind content) */}
      <div className={`absolute inset-0 bg-black z-10 transition-opacity duration-500 ${videoReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} aria-hidden="true" />

      {/* Bottom blend into About section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-black/70 to-[#050a14]" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center">
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
        href="/Resume_of_Rantu Mondal.pdf"
        download="Rantu_Mondal_Resume.pdf"
        className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition"
      >
        Download Resume
      </a>
      </div>
    </section>
  );
};

export default Hero;
