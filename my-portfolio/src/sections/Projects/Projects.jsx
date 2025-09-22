import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="SectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="linkki projektiin" target="_blank">
          <img className="hover" src={viberr} alt="Viberr logo" />
          <h3>Viberr</h3>
          <p>Description of the project.</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
