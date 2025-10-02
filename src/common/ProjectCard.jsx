import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ id, src, link, h3, p }) {
  return (
    <div /* className={styles.card} */>
      <Link to={`/projects/${id}`}>
        <img className={`hover`} src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </Link>
    </div>
  );
}

export default ProjectCard;
