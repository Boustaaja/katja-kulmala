import React, { use } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProjectDetailStyles.module.css";
import ProjectCarousel from "../../common/ProjectCarousel";
import testImage from "../../assets/Test.png";

const projectData = {
  Viberr: {
    title: "Viberr",
    description: "Detailed description of the Viberr project goes here.",
    /* Added media array for potential gallery */
    media: [
      { type: "image", src: testImage },
      { type: "image", src: testImage },
      { type: "image", src: testImage },
      { type: "video", src: "assets/viberr-demo.mp4" },
    ],
  },
  "Fresh Burger": {
    title: "Fresh Burger",
    description: "Detailed description of the Fresh Burger project goes here.",
    /* Added media array for potential gallery */
    media: [
      { type: "image", src: "assets/fresh-burger.png" },
      { type: "video", src: "assets/fresh-burger-demo.mp4" },
    ],
  },
};
/* Example project data, can be expanded or fetched from an API */
function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData[id];
  if (!project) return <h2>Project not found</h2>;
  // Function to navigate back to the main projects section
  const goBackToProjects = () => {
    navigate("/");
    // Adding a slight delay to ensure the navigation has completed
    setTimeout(() => {
      document
        .getElementById("projects")
        // Scroll to the projects section smoothly
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100); // 100ms delay
  };
  return (
    <section className={styles.container}>
      <h1>{project.title}</h1>
      <p>{project.description}</p> <ProjectCarousel media={project.media} />
      <button className={styles.btn} onClick={goBackToProjects}>
        Projects
      </button>
    </section>
  );
}

export default ProjectDetail;
