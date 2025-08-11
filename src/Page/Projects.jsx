import { Link } from "react-router-dom"; // corrected import
import srimg from "../../public/service-review.jpg";
import a5 from "../../public/about.png";
import grdn from "../../public/garden-tips1.jpg";

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
    name: "SoulMate",
    image: a5,
    detailsPath: "/projects/SoulMate",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-900 text-gray-200">
    <div className="max-w-6xl mx-auto text-center mb-16 px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-teal-500 mb-3 tracking-wide">
        My Projects
      </h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
        Here are some of the best projects I've worked on.
      </p>
    </div>

    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4 justify-center">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl w-full max-w-sm"
          style={{ height: "30rem" }} // height about 480px
        >
          <div className="relative h-72">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>

          <div className="p-8 h-[calc(30rem-18rem)] flex flex-col justify-between">
            <h3 className="text-3xl font-semibold text-teal-500 mb-4 tracking-tight">
              {project.name}
            </h3>
            <Link to={project.detailsPath}>
              <button
                className="inline-block bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white font-semibold py-3 px-6 rounded-lg transition"
                aria-label={`View more about ${project.name}`}
              >
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
