import { useState } from "react";
import FadeInSection from "./FadeInSection";

// --- Icons Components (SVG form Heroicons) ---
const IconUser = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconSkills = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const IconHobbies = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- Hobbies Icons ---
const GameController = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>
);

const Globe = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BookOpen = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);


const About = () => {
  const [activeTab, setActiveTab] = useState("intro");

  // ডাটা অবজেক্ট (কোড পরিষ্কার রাখার জন্য)
  const skills = [
    "JavaScript", "React.js", "Next.js", "Node.js", "MongoDB",
    "Express", "Tailwind CSS", "REST APIs", "Git & GitHub", "Firebase", "VPS Deployment", "Secure VPS"
  ];

  const hobbiesData = [
    {
      icon: GameController,
      title: "Competitive Gaming",
      desc: "Strategy games and esports enthusiast."
    },
    {
      icon: Globe,
      title: "Travel",
      desc: "Exploring new cultures and landscapes."
    },
    {
      icon: BookOpen,
      title: "Tech Learning",
      desc: "Always expanding my knowledge with the latest frameworks."
    }
  ];

  // ট্যাব বাটনের কমন ক্লাস
  const tabButtonClass = (tabName) => `
    flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300
    ${activeTab === tabName
      ? "text-teal-400 border-b-2 border-teal-400"
      : "text-gray-400 hover:text-gray-200 border-b-2 border-transparent"
    }
  `;

  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen bg-[#050a14] bg-cover bg-center py-20 px-4 md:px-10 flex items-center justify-center font-sans"
      style={{ backgroundImage: "url('/about.jpg')" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#050a14]/45"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-[#050a14] via-[#050a14]/75 to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-b from-transparent via-[#0b1220]/85 to-[#101828]"></div>

      <div className="relative z-10 w-full">
        <FadeInSection>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
          
          {/* --- Left Side: Image & Title/Signature --- */}
          <div
            className="flex flex-col items-center md:items-start flex-shrink-0 w-full md:w-auto transition-transform duration-500"
            style={{ transform: activeTab === 'skills' ? 'translateX(-24px)' : 'translateX(0)', transition: 'transform 500ms ease' }}
          >
            {/* Profile image with Cyan Glow */}
            <div className="relative group mb-10">
              <div className="absolute -inset-1 bg-cyan-400/30 rounded-2xl blur-md group-hover:bg-cyan-400/50 transition duration-500"></div>
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                <img
                  src="https://i.ibb.co.com/VpjJwnwL/Rantu-Photo.jpg"
                  alt="Rantu Mondal"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Title & Signature Area */}
            <div className="w-full text-center md:text-left space-y-4 px-2">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                About Rantu
              </h2>
              {/* Cyan underline */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mx-auto md:mx-0"></div>
              
              <div className="pt-3 space-y-1.5">
                <p className="font-serif italic text-gray-400 text-sm tracking-wide">
                  "Building digital experiences with passion"
                </p>
                <div className="text-teal-400 text-base font-medium flex items-center justify-center md:justify-start gap-1.5">
                  <span className="text-gray-500">—</span> Rantu Mondal
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Side: Interactive Content (Dark Card) --- */}
          <div className="flex-1 w-full" style={{ maxWidth: activeTab === 'skills' ? '680px' : '960px', transition: 'max-width 500ms ease' }}>
            <div className="rounded-2xl p-8 lg:p-10 shadow-2xl min-h-[500px] bg-white/5 backdrop-blur-md border border-white/10">
              
              {/* Custom Tabs Navigation */}
              <div className="flex space-x-3 border-b border-gray-800 mb-10">
                <button onClick={() => setActiveTab("intro")} className={tabButtonClass("intro")}>
                  <IconUser className="w-4 h-4" /> Intro
                </button>
                <button onClick={() => setActiveTab("skills")} className={tabButtonClass("skills")}>
                  <IconSkills className="w-4 h-4" /> Skills
                </button>
                <button onClick={() => setActiveTab("hobbies")} className={tabButtonClass("hobbies")}>
                  <IconHobbies className="w-4 h-4" /> Hobbies
                </button>
              </div>

              {/* Tab Content */}
              <div className="text-gray-300 space-y-8">
                
                {activeTab === "intro" && (
                  <div className="space-y-6 leading-relaxed">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Digital Craftsman</h3>
                    <p className="text-[15px]">
                      Hey there! I'm{" "}
                      <span className="font-semibold text-white">Rantu Mondal</span>
                      , a passionate MERN stack developer with a knack for
                      building interactive web experiences. I specialize in crafting
                      full-stack applications that are not only functional but also deliver
                      exceptional user experiences.
                    </p>
                    <p className="text-[15px]">
                      My journey in the world of code began with a curiosity about how
                      things work under the hood of the web. This curiosity evolved into a
                      deep-seated passion for the JavaScript ecosystem, leading me to
                      master React.js for the frontend and Node.js for scalable backend
                      services.
                    </p>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="space-y-8">
                    <h4 className="text-sm font-bold text-teal-400 uppercase tracking-widest">
                      Technical Arsenal
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                      {skills.map(skill => (
                        <div key={skill} className="flex items-center gap-3 bg-[#111a2e] px-4 py-2.5 rounded-xl border border-gray-800">
                          <IconSkills className="w-4 h-4 text-teal-500" />
                          <span className="font-medium text-sm text-gray-200">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "hobbies" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 pt-4">
                    {hobbiesData.map((hobby, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="p-2.5 bg-[#111a2e] rounded-xl border border-gray-800 flex-shrink-0 mt-1">
                          <hobby.icon className="text-teal-500 w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold text-white text-base">
                            {hobby.title}
                          </h4>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {hobby.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div> {/* End Tab Content */}
            </div> {/* End Dark Card */}
          </div> {/* End Right Side */}

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;