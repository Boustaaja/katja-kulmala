import "./App.css";
import AboutMe from "./sections/AboutMe/AboutMe";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Contact/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
