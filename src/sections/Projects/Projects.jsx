import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import Ganbatte from "../../assets/GanbatteKudasai/hiragana_rs_temp.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* Using the ProjectCard component to display individual projects. So far just an examples */}
        <ProjectCard
          id="Ganbatte Kudasai" /* Added id prop for routing */
          src={Ganbatte} /* Image source */
          h3="がんばってください" /* Project title */
          p="Japanese language learning app." /* Short description */
        />
        <ProjectCard
          id="Fresh Burger"
          src={freshBurger}
          h3="Fresh Burger"
          p="Description of the project."
        />
        <ProjectCard
          id="Viberr"
          src={viberr}
          h3="Viberr"
          p="Description of the project."
        />
        <ProjectCard
          id="Fresh Burger"
          src={freshBurger}
          h3="Fresh Burger"
          p="Description of the project."
        />
      </div>
    </section>
  );
}

export default Projects;
