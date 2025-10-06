import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

function ProjectCard({ id, src, h3, p }) {
  return (
    <div className={styles.cardContainer}>
      <Link to={`/projects/${id}`}>
        <img src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </Link>
    </div>
  );
}

export default ProjectCard;
