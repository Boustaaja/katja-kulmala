import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProjectDetailStyles.module.css";
import ProjectCarousel from "../../common/ProjectCarousel";
import category from "../../assets/GanbatteKudasai/category_rs_temp.png";
import calendar from "../../assets/GanbatteKudasai/calendar_rs_temp.png";
import hiragana from "../../assets/GanbatteKudasai/hiragana_rs_temp.png";
import menu from "../../assets/GanbatteKudasai/Menu_rs_temp.png";
import words from "../../assets/GanbatteKudasai/words_rs_temp.png";
import win from "../../assets/GanbatteKudasai/win.mp4";
import info from "../../assets/GanbatteKudasai/info.png";
import info2 from "../../assets/GanbatteKudasai/info2.png";
import hard from "../../assets/GanbatteKudasai/vaikea.mp4";
import newGame from "../../assets/Minimax/NewGame.png";
import minimax from "../../assets/Minimax/MiniMax.mp4";
import draw from "../../assets/Minimax/draw_short.mp4";
/* Importing media assets for projects */
/* Project data structure with media assets */

const projectData = {
  "Ganbatte Kudasai": {
    title: "がんばってください (Ganbatte Kudasai)",
    description: "A Japanese language learning app.",
    purpose:
      "This project was created as my personal project to strengthen and apply the skills I developed during my first year of studies, which focused heavily on C#. At the same time, I was also studying databases, so I wanted to combine both areas in a practical way. The theme was chosen based on my personal interests: I am learning Japanese and I am particularly interested in gamification and serious games, which made a language learning app a natural fit.",
    feature: [
      "Practice words in a game-like format",
      "Choose a category of words to study",
      "Request hints to support learning",
      "A life system is included: wrong answers reduce lives, adding challenge and motivation",
    ],
    technologies: [
      "C# and .NET (WPF framework)",
      "XAML for UI definition",
      "MariaDB (local database)",
      "MySQL for database communication",
    ],
    solutions:
      "Through this project, I got to practice building WPF applications and connecting them to a database. I combined UI design, C# logic, and database work to create a gamified study tool. It was a great way to dive deeper into how different technologies can work together, and I also got to explore how game mechanics can make learning apps more engaging and fun.",
    /* Added media array for potential gallery */
    media: [
      { type: "image", src: category },
      { type: "image", src: calendar },
      { type: "image", src: hiragana },
      { type: "image", src: menu },
      { type: "image", src: words },
      { type: "video", src: win },
      { type: "image", src: info },
      { type: "image", src: info2 },
      { type: "video", src: hard },
    ],
  },
  "Connect-4 AI": {
    title: "Connect-4 AI (Minimax with Alpha-Beta Pruning)",
    description:
      "A WPF-based Connect 4 game featuring an AI opponent using the Minimax algorithm with Alpha-Beta pruning.",
    purpose:
      "This project was developed as a group assignment for our Artificial Intelligence and Robotics course. The goal was to explore how the Minimax algorithm works and how it can be optimized for better performance using Alpha-Beta pruning. The project focused on understanding AI decision-making in turn-based games while implementing it in a practical, visual way.",
    feature: [
      "Playable Connect 4 game against an AI opponent",
      "AI uses Minimax algorithm enhanced with Alpha-Beta pruning",
      "Turn-based logic with clear UI indicators for each player",
      "Graphical interface built with WPF (XAML and C#)",
      "Game state detection for wins, draws, and valid moves",
    ],
    technologies: [
      "C# and .NET (WPF framework)",
      "XAML for UI design",
      "Minimax algorithm with Alpha-Beta pruning",
    ],
    solutions:
      "My main responsibility in the project was designing and implementing the user interface and core game logic. I also contributed to testing and debugging the application. Together, our team discussed and refined the algorithm’s optimization methods, ensuring the AI played efficiently while maintaining a smooth user experience. The project deepened my understanding of how game AI works under the hood and how algorithmic efficiency affects gameplay. Additionally, it taught me a great deal about teamwork and the importance of clear communication when developing software collaboratively.",
    /* Added media array for potential gallery */
    media: [
      { type: "image", src: newGame },
      { type: "video", src: minimax },
      { type: "video", src: draw },
    ],
  },
};
/* Example project data, can be expanded or fetched from an API */
function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
      <ProjectCarousel media={project.media} />
      <p>{project.description}</p>
      <h2>Purpose:</h2>
      <p>{project.purpose}</p>
      <h2>Key Features:</h2>
      <ul className={styles.descriptionList}>
        {project.feature.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2>Technologies Used:</h2>
      <ul className={styles.descriptionList}>
        {project.technologies.map((technologies, index) => (
          <li key={index}>{technologies}</li>
        ))}
      </ul>
      <h2>Solution & Learning:</h2>
      <p>{project.solutions}</p>
      <button className={styles.btn} onClick={goBackToProjects}>
        Projects
      </button>
    </section>
  );
}

export default ProjectDetail;
