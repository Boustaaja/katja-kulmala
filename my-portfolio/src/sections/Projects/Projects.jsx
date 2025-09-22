import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* Using the ProjectCard component to display individual projects. So far just an examples */}
        <ProjectCard
          src={viberr}
          link="Linkki projektiin"
          h3="Viberr"
          p="Description of the project."
        />
        <ProjectCard
          src={freshBurger}
          link="Linkki projektiin"
          h3="Fresh Burger"
          p="Description of the project."
        />
        <ProjectCard
          src={viberr}
          link="Linkki projektiin"
          h3="Viberr"
          p="Description of the project."
        />
        <ProjectCard
          src={freshBurger}
          link="Linkki projektiin"
          h3="Fresh Burger"
          p="Description of the project."
        />
      </div>
    </section>
  );
}

export default Projects;
