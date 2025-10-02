import "./App.css";
import AboutMe from "./sections/AboutMe/AboutMe";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import ProjectDetail from "./sections/Projects/ProjectDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        /* This is my front page */
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
