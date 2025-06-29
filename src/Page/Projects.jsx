import { Link } from "react-router"; // ✅ react-router-dom এর Link ইউজ করো
import srimg from "../../public/service-review.jpg";
import a5 from "../../public/a5-1.jpg";
import grdn from "../../public/garden-tips1.jpg";
import FadeInSection from "../Component/FadeInSection";

const projects = [
  {
    id: 1,
    name: "Service Review System",
    image: srimg,
    detailsPath: "/projects/service-review",
  },
  {
    id: 2,
    name: "Garden Tips",
    image: grdn,
    detailsPath: "/projects/garden-tips",
  },
  {
    id: 3,
    name: "Task Management",
    image: a5,
    detailsPath: "/projects/task",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="py-20 bg-gray-900 text-gray-200"
  >
    
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-4">
          My Projects
        </h2>
        <p className="text-lg md:text-xl">
          Here are some of the best projects I've worked on.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`
            bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition
            ${index === 2 ? "md:col-span-2" : ""}
          `}
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-teal-500">
                {project.name}
              </h3>
              <Link to={project.detailsPath}>
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
  </section>
);

export default Projects;
