import React from "react";
import { useEffect, useState } from "react";
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
import newGame from "../../assets/Minimax/uusiPeli.png";
import draw from "../../assets/Minimax/MiniMax.mp4";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import cabin from "../../assets/Capsized/Cabin.png";
import barrels from "../../assets/Capsized/barrels.png";
import cans from "../../assets/Capsized/cans.png";
import glass from "../../assets/Capsized/Glass.png";
import pens from "../../assets/Capsized/Pens.png";
import bottle from "../../assets/miniGame/bottle.png";
import chest from "../../assets/miniGame/chest.png";
import compass from "../../assets/miniGame/compass.png";
import corner from "../../assets/miniGame/corner.png";
import gate from "../../assets/miniGame/gate.png";
import labyrinth from "../../assets/miniGame/labyrinth.png";
import npc from "../../assets/miniGame/npc.png";
import tiles from "../../assets/miniGame/tiles.png";
import spikesDeath from "../../assets/miniGame/Spikes_death.mp4";
import npc_video from "../../assets/miniGame/npc.mp4";
import shards from "../../assets/miniGame/shards.png";
import compass_video from "../../assets/miniGame/compass.mp4";
import win_gate from "../../assets/miniGame/Win.png";
/* Project data structure */
const projectData = {
  "Ganbatte Kudasai": {
    title: "がんばってください (Ganbatte Kudasai)",
    description: "A Japanese language learning app.",
    github: null,
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
    github: "https://github.com/Boustaaja/Minimax",
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
      { type: "video", src: draw },
    ],
  },
  Capsized: {
    title: "Capsized",
    description:
      "A co-operative survival multiplayer game where players must escape a sinking ship. The game draws inspiration from the movie Poseidon and is being developed as a long-term student project.",
    github: null,
    purpose:
      "The goal of this project was to create a collaborative Unreal Engine game that brings together design, 3D modeling, and gameplay programming. The development followed the Scrum methodology, and project management was organized in Azure DevOps. The first phase focused on modeling assets and creating environment modules based on reference materials and ship blueprints from the Poseidon film.",
    feature: [
      "Multiplayer survival gameplay in Unreal Engine",
      "Development managed through Scrum methodology in Azure DevOps",
      "Custom assets modeled in Blender, inspired by the Poseidon movie",
      "Designed and built a cabin module based on real ship blueprints",
      "Implemented gameplay logic such as compass navigation and vending machine functionality",
      "Developed particle effects for underwater bubbles and shader-based breakable glass",
      "Created MetaHuman characters and contributed to animation work",
      "Currently contributing to the AI and multiplayer phase, with my main responsibility focusing on designing and implementing gameplay features through the Gameplay Ability System (GAS).",
    ],
    technologies: [
      "Unreal Engine 5.5",
      "Blueprints and C++",
      "Blender for 3D modeling",
      "Azure DevOps (Scrum project management)",
      "Gameplay Ability System (GAS)",
      "Shader development and Niagara particle systems",
    ],
    solutions:
      "In the early stages, my primary focus was on environment art and interaction logic. I modeled various assets and designed systems like the ships compass and a vending machine that exchanges money for items. I also implemented special effects such as water bubbles and breakable glass using shaders. Throughout the project, I learned how collaborative game development works within a Scrum framework, while adapting to and building upon work already completed by other course teams, and how to communicate efficiently across different disciplines. Currently, I am working on the AI and multiplayer phase, focusing on integrating the Gameplay Ability System (GAS) into the project.",
    media: [
      { type: "image", src: cabin },
      { type: "image", src: barrels },
      { type: "image", src: cans },
      { type: "image", src: glass },
      { type: "image", src: pens },
    ],
  },
  miniGame: {
    title: "MiniGame",
    description:
      "A 3D action-adventure survival mini-game set in a deadly labyrinth, where the player controls a black knight trying to escape before time runs out. The maze is filled with hidden traps: deadly spikes, piercing spears, and crushing walls. To open the final gate, the player must find hidden keys, explore secret paths, and use destructible objects strategically. Along the way, a mysterious hiccupping NPC provides a side quest: recover his lost compass. Carefully placed sound effects enhance the tension and guide the player through the dangers of the maze.",

    github: null,
    purpose: [
      "This project was developed as a skills demonstration for a Game Development course. The creative theme was open, but the game had to meet several specific requirements, including:" +
        " Dynamic camera switching during gameplay, Character animations for running, jumping, and shooting projectiles, Time limit and scoring system, Main menu, pause menu, and sound effects.",
    ],
    feature: [
      "Survival mini-game set in a maze full of deadly traps",
      "Time-based challenge with a scoring system",
      "Multiple trap types: spike pits, wall spears, and crushing walls",
      "Hidden keys required to unlock the exit gate",
      "NPC side quest (recovering a lost compass)",
      "Ambient sound effects enhancing immersion and atmosphere",
      "Main menu and pause menu",
      "A throwable brick used as a projectile to break destructible obstacles",
    ],
    technologies: [
      "Unreal Engine 5.5",
      "Blueprints and C++",
      "Blender for 3D modeling",
      "Fab (torch asset)",
      "Mixamo (character and animation assets)",
      "Niagara particle systems",
    ],
    solutions:
      "The project allowed me to apply both technical and creative skills — from 3D modeling and level design to animation and gameplay scripting in Unreal Engine. I implemented various mechanics including traps, destructible walls, a projectile throwing system, key-based progression, and time-limited gameplay. The project had to be completed within a limited timeframe, which meant it is not as polished as It could be, but the challenge made it incredibly rewarding. I genuinely enjoyed every step of the process, from creating the maze layout to fine-tuning gameplay mechanics, which strengthened both my skills and my passion for game development.",
    media: [
      { type: "image", src: gate },
      { type: "image", src: labyrinth },
      { type: "image", src: bottle },
      { type: "image", src: chest },
      { type: "image", src: compass },
      { type: "video", src: spikesDeath },
      { type: "image", src: npc },
      { type: "image", src: tiles },
      { type: "video", src: npc_video },
      { type: "image", src: corner },
      { type: "image", src: shards },
      { type: "video", src: compass_video },
      { type: "image", src: win_gate },
    ],
  },
};
/* Example project data, can be expanded or fetched from an API */
function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  /* State to manage theme for github icon */
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsDark(document.body.getAttribute("data-theme") === "dark");
  }, [id]);

  const GithubIcon = isDark ? githubDark : githubLight;

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
      {project.github && (
        <span>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <img src={isDark ? githubDark : githubLight} alt="Github icon" />
          </a>
        </span>
      )}
    </section>
  );
}

export default ProjectDetail;
