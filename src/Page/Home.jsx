import About from "../Component/About";
import Contact from "../Component/Contact";
import Education from "../Component/Education";
import Hero from "../Component/Hero";
import Skills from "../Component/Skills";
import Projects from "./Projects";


const Home = () => {
  return (
    <div>
      <Hero></Hero>

      {/* Future sections can go here */}
      {/* <About /> */}
      <About></About>
      {/* <Skills /> */}
      <Skills></Skills>
      <Education></Education>
      {/* <Projects /> */}
      <Projects></Projects>
      {/* <Contact /> */}
      <Contact></Contact>
    </div>
  );
};

export default Home;
