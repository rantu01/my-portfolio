import { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
      {children}
    </div>
  );
};

const Education = () => (
  <section id="education-experience" className="py-20 bg-gray-900 text-gray-200">
    <FadeInSection>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-3">
            Education & Experience
          </h2>
          <p className="text-lg text-gray-400">My academic background and professional journey.</p>
        </div>

        {/* Two Column Layout — items-stretch makes both cards equal height */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* ── Education ── */}
          <div className="flex flex-col bg-gray-800 rounded-2xl p-7 shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-gray-700 hover:border-teal-500">
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-4h8" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-teal-400 uppercase tracking-widest">Education</h3>
            </div>

            {/* Card — flex-1 pushes content to fill remaining height */}
            <div className="flex flex-col flex-1 border-l-2 border-teal-500 pl-5">
              <h4 className="text-xl font-semibold text-white mb-1">B.Sc. in Computer Science</h4>
              <p className="text-teal-400 font-medium mb-1">North Western University, Khulna</p>
              <span className="inline-block w-fit text-xs bg-teal-500/10 text-teal-300 border border-teal-500/30 rounded-full px-3 py-0.5 mb-3">
                Expected Graduation: 2027
              </span>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                Courses include Data Structures, Algorithms, Web Development, and Database Systems.
              </p>
            </div>
          </div>

          {/* ── Experience ── */}
          <div className="flex flex-col bg-gray-800 rounded-2xl p-7 shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-gray-700 hover:border-teal-500">
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-teal-400 uppercase tracking-widest">Experience</h3>
            </div>

            {/* Card */}
            <div className="flex flex-col flex-1 border-l-2 border-teal-500 pl-5">
              <h4 className="text-xl font-semibold text-white mb-1">Full Stack Developer</h4>
              <p className="text-teal-400 font-medium mb-1">Potato Solution</p>
              <span className="inline-block w-fit text-xs bg-teal-500/10 text-teal-300 border border-teal-500/30 rounded-full px-3 py-0.5 mb-3">
                Present
              </span>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                End-to-end responsibility across the full technology stack — from pixel-perfect frontend to robust backend architecture and VPS server management.
              </p>

              {/* Tags — pinned to bottom */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Frontend", "Backend", "VPS / Server", "Full Stack"].map((tag) => (
                  <span key={tag} className="text-xs bg-gray-700 text-gray-300 rounded-full px-3 py-1 border border-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </FadeInSection>
  </section>
);

export default Education;