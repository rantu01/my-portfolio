import { useState } from "react";
import FadeInSection from "./FadeInSection";

const About = () => {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br  from-gray-900 to-gray-800 py-20 px-4 flex items-center justify-center"
    >
      <FadeInSection>
        <div className="max-w-6xl mx-auto">
          {/* Animated title */}
          <div className="relative mb-16 group">
            <h2 className="text-5xl md:text-7xl bg-clip-text font-bold text-teal-500 text-center">
              About Rantu
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transition-all duration-500 group-hover:w-48"></div>
          </div>

          {/* Interactive profile card */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Profile image placeholder - replace with your image */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition duration-500"></div>
              <div className="relative w-full h-full bg-gray-700 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-xl">
                <img
                  src="https://i.ibb.co/4wnZwHpz/image.png"
                  alt="Rantu Mondal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Interactive content */}
            <div className="flex-1 max-w-2xl">
              <div className="flex space-x-2 mb-6">
                <button
                  onClick={() => setActiveTab("intro")}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    activeTab === "intro"
                      ? "bg-teal-500 text-white"
                      : " bg-gray-700  text-gray-300  hover:bg-gray-600"
                  }`}
                >
                  Intro
                </button>
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    activeTab === "skills"
                      ? "bg-teal-500 text-white"
                      : " bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  Skills
                </button>
                <button
                  onClick={() => setActiveTab("hobbies")}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    activeTab === "hobbies"
                      ? "bg-teal-500 text-white"
                      : "bg-gray-700 text-gray-300  hover:bg-gray-600"
                  }`}
                >
                  Hobbies
                </button>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 min-h-64">
                {activeTab === "intro" && (
                  <div className="space-y-4">
                    <p className="text-lg text-gray-300">
                      Hey there! I'm{" "}
                      <span className="font-bold text-teal-500">
                        Rantu Mondal
                      </span>
                      , a passionate MERN stack developer with a knack for
                      building interactive web experiences.
                    </p>
                    <p className="text-lg text-gray-300">
                      My journey began with simple HTML pages and evolved into
                      full-stack applications that solve real problems. I thrive
                      at the intersection of design and functionality.
                    </p>
                    <p className="text-lg text-gray-300">
                      When I'm not coding, you'll find me exploring new
                      technologies, contributing to open-source, or mentoring
                      aspiring developers.
                    </p>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <span className="font-medium text-teal-500">React.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <span className="font-medium text-teal-500">Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <span className="font-medium text-teal-500">MongoDB</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <span className="font-medium text-teal-500">Express</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <span className="font-medium text-teal-500">
                        Tailwind CSS
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <span className="font-medium text-teal-500">REST APIs</span>
                    </div>
                  </div>
                )}

                {activeTab === "hobbies" && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-teal-900 rounded-lg">
                        <GameController className="text-teal-500 w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">
                          Competitive Gaming
                        </h4>
                        <p className="text-sm text-gray-400">
                          Strategy games and esports enthusiast
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-teal-900 rounded-lg">
                        <Globe className="text-teal-500 w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Travel</h4>
                        <p className="text-sm text-gray-400">
                          Exploring new cultures and landscapes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-teal-900 rounded-lg">
                        <BookOpen className="text-teal-500 w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">
                          Tech Learning
                        </h4>
                        <p className="text-sm text-gray-400">
                          Always expanding my knowledge
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-4 bg-gray-800 rounded-lg shadow border border-gray-700">
              <p className="font-serif italic text-gray-400">
                "Building digital experiences with passion"
              </p>
              <div className="mt-2 text-teal-500 font-signature text-2xl">
                Rantu Mondal
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

// Add these icons to your project (using Heroicons or similar)
const GameController = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
    />
  </svg>
);

const Globe = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const BookOpen = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

export default About;
