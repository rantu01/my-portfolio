import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";
import FadeInSection from "./FadeInSection";

const Skills = () => (
  <section
    id="skills"
    className="py-20  bg-gray-900 text-gray-200"
  >
    <FadeInSection>
      <div>
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-4">
            My Skills
          </h2>
          <p className="text-lg md:text-xl">Technologies & Tools I use:</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Marquee speed={50} gradient={false} pauseOnHover>
            <div className="flex space-x-16 items-center text-6xl">
              {/* Frontend */}
              <FaHtml5 className="text-orange-500" title="HTML5" />
              <FaCss3Alt className="text-blue-500" title="CSS3" />
              <FaJs className="text-yellow-400" title="JavaScript" />
              <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />
              <FaReact className="text-blue-400" title="React" />

              {/* Backend */}
              <FaNodeJs className="text-green-500" title="Node.js" />
              <SiExpress
                className="text-gray-300"
                title="Express.js"
              />
              <SiMongodb className="text-green-700" title="MongoDB" />
              <SiFirebase className="text-yellow-500" title="Firebase" />

              {/* Tools */}
              <FaGitAlt className="text-red-500" title="Git" />
              <FaDatabase className="text-indigo-500" title="Databases" />
              <FaFigma className="text-pink-500" title="Figma" />
            </div>
          </Marquee>
        </div>
      </div>
    </FadeInSection>
  </section>
);

export default Skills;
