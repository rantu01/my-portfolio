import FadeInSection from "./FadeInSection";

const Education = () => (
  <section
    id="education"
    className="py-20 bg-gray-900 text-gray-200 text-center"
  >
    <FadeInSection>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-4">
          Educational Qualification
        </h2>
        <p className="text-lg md:text-xl">
          Here’s a summary of my academic background.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 shadow-lg rounded-xl p-6 hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-2 text-teal-500">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-300 mb-1">
            North Western University, Khulna
          </p>
          <p className="text-gray-300 mb-1">
            Expected Graduation: 2027
          </p>
          <p className="text-gray-300">
            Courses include Data Structures, Algorithms, Web Development, and
            Database Systems.
          </p>
        </div>
      </div>
    </FadeInSection>
  </section>
);

export default Education;
