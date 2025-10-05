import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import Ganbatte from "../../assets/GanbatteKudasai/hiragana_rs_temp.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";
import newGame from "../../assets/Minimax/newGameRS.png";
import capsized_boat from "../../assets/Capsized/CSRS.png";

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
          id="Connect-4 AI"
          src={newGame}
          h3="Connect-4 AI"
          p="Connect 4 game featuring an AI opponent"
        />
        <ProjectCard
          id="Capsized"
          src={capsized_boat}
          h3="Capsized"
          p="A co-operative survival multiplayer game"
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
