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
import add from "../../assets/InvoiceApp/add.png";
import invoice from "../../assets/InvoiceApp/Invoice_app.png";
import item from "../../assets/InvoiceApp/Item.png";
import update from "../../assets/InvoiceApp/update.png";
import testInvoice from "../../assets/InvoiceApp/Testi.mp4";
import cave from "../../assets/miniGame/Cave.png";
import caveEntrance from "../../assets/miniGame/CaveEntrance.png";
import mine from "../../assets/miniGame/Mine.png";
import tracks from "../../assets/miniGame/Tracks.png";
import bridge from "../../assets/miniGame/bridge.png";
import magnetism from "../../assets/WillowGuard/Magnetism_Willow.mp4";
import color from "../../assets/WillowGuard/Color.mp4";
import loot from "../../assets/WillowGuard/Loot.png";
import rarity from "../../assets/WillowGuard/Rarity.png";
import completed from "../../assets/WillowGuard/DungeonCompleted.png";
import cottages from "../../assets/Frostreign/cottages.png";
import armory from "../../assets/Frostreign/Armory.mp4";
import boss from "../../assets/Frostreign/Albino1.mp4";
import boss2 from "../../assets/Frostreign/Albino2.mp4";
import church from "../../assets/Frostreign/church.mp4";
import mill from "../../assets/Frostreign/Mill.mp4";
import tavern from "../../assets/Frostreign/Tavern.mp4";
import ice from "../../assets/Frostreign/IceDamage.mp4";
import open from "../../assets/Frostreign/openArea.png";

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
      { type: "image", src: cave },
      { type: "image", src: caveEntrance },
      { type: "image", src: mine },
      { type: "image", src: tracks },
      { type: "image", src: bridge },
    ],
  },

  invoiceApp: {
    title: "invoice Application",
    description:
      "A WPF-based billing application developed as the final project for the User Interface Programming course during my first year of studies. The application features a graphical user interface and a relational MariaDB database for managing customers, products, and invoices. Users can create, edit, and delete data across all entities through an intuitive interface.",
    github: "https://github.com/Boustaaja/laskutussovellus",
    purpose:
      "The goal of this project was to design and implement a desktop invoicing application using object-oriented programming principles and a relational MariaDB database. The system enables users to create, edit, and manage invoices, customers, and products through a graphical WPF interface. The project emphasized database design, data relationships, and practical software architecture.",
    feature: [
      "Add, update, and delete customers through the WPF GUI",
      "Add, update, and delete products with price and quantity data",
      "Create and modify invoices for existing customers",
      "Automatic total calculation based on invoice rows and product data",
      "Archive views for browsing customers, products, and invoices",
      "Relational database design",
      "Connection to a local MariaDB database with automatic table creation for testing",
    ],
    technologies: ["C#", ".NET / WPF", "MariaDB", "MySQL"],
    solutions:
      "I designed and implemented the database structure using relational principles, defining one-to-many and many-to-one relationships between entities (Invoices, InvoiceRows, and Products). The application includes full CRUD functionality and connects to a local MariaDB instance. On startup, the app checks for required tables and creates them automatically if needed. I focused on ensuring data integrity, relationship consistency, and a user-friendly WPF interface for managing all entities. Through this project, I gained strong experience in relational database design, GUI programming, and integrating database operations with an object-oriented C# application.",
    media: [
      { type: "image", src: add },
      { type: "image", src: invoice },
      { type: "image", src: item },
      { type: "video", src: testInvoice },
      { type: "image", src: update },
    ],
  },

  willowGuard: {
    title: "Willow Guard",

    role: "Programming / Level Design Intern – MiTale",
    period:
      "Internship: January–April 2026 | Thesis project: May 2026 – present",

    description:
      "Willow Guard is a story-driven action RPG set in a dark fantasy world where gods have abandoned the animals. The game combines fast-paced hack-and-slash combat with roguelite elements, including dungeon-like levels, partially randomized environments and loot, and progression loss upon death.",

    github: null,
    steamUrl: "https://store.steampowered.com/app/2377090/Willow_Guard/",
    purpose: [
      "During my internship at MiTale, I worked as a Programmer and a Level Designer on Willow Guard and its Frostreign DLC.",
    ],
    feature: [
      "Equipment rarity system with rarity-based logic and color coding",
      "New damage type and arrow weapon with a freezing shader effect",
      "Implemented an item magnetism system that attracts nearby inaccessible items to the player when the player remains stationary for a moment.",
      "Refactored cooldown logic to support global time scaling for cooldowns and animations",
    ],
    technologies: ["Unity", "C#", "Jira", "GitLab", "Git"],
    solutions: [
      "My work on Willow Guard included developing a dynamic equipment rarity system that adjusted chest rewards based on the highest rarity of the corresponding equipment already owned by the player. I also implemented rarity-based color coding displaying the rarity color in loot names, dungeon completion rewards, and as a glow around equipment sprites. Additionally, I implemented a new cold damage type and corresponding cold arrow weapon, which were utilized in the Frostreign DLC. I also created randomized hunt maps for the main game and worked on level design for the Frostreign DLC, which is presented in a separate project.",

      "Through this work, I gained practical experience with Unity and learned to navigate a large existing codebase and understand connections between related systems. I also gained experience using Jira for task management and GitLab for version control. I worked independently on my assigned tasks with guidance from my supervisor when needed, while weekly team meetings provided opportunities to share updates and discuss completed work. This experience strengthened my communication and collaboration skills in a professional development environment.",
    ],
    media: [
      { type: "video", src: magnetism },
      { type: "video", src: color },
      { type: "image", src: loot },
      { type: "image", src: rarity },
      { type: "image", src: completed },
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/KT_BjcJW9XM?si=wa4cUITCdLXU5KBf",
      },
    ],
  },

  frostreign: {
    title: "Willow Guard: Frostreign",

    role: "Programming / Level Design Intern – MiTale",
    period:
      "Internship: January–April 2026 | Thesis project: May 2026 – present",

    description:
      "Frostreign is a DLC for Willow Guard that continues the story of the main character, Ghweros, and his companions journey through the frozen Atalaka Mountains towards Regnum Polis. The DLC introduces new environments, enemies, mysteries, and a new companion who adds new tactical possibilities to combat.",

    github: null,
    steamUrl:
      "https://store.steampowered.com/app/4413850/Willow_Guard__Frostreign/",
    purpose: [
      "During my internship at MiTale, I worked as a Programmer and Level Designer on Willow Guard and its Frostreign DLC. My work on the DLC focused on level design and creating game environments using tilemaps and pixel-art assets.",
    ],
    feature: [
      "Designed and implemented one of the DLC's main story levels, including gameplay puzzles",
      "Created additional partially randomized maps using tilesets and pixel-art assets",
      "Set up tilemaps and prepared assets for use in the game",
    ],
    technologies: ["Unity", "C#", "Jira", "GitLab", "Git"],
    solutions: [
      "As a Level Designer, I designed and implemented one of the DLC's main story levels, including gameplay puzzles and the design of the main boss arena. I also created additional partially randomized maps using tilesets and pixel-art assets. These maps used manually designed variations of layout sections and decorative elements, which were randomly combined by the game to create variation between playthroughs. My work also included designing enemy encounters and spawn setups, setting up tilemaps, and configuring existing game components in the Unity Editor. On Willow Guard I implemented a new cold damage type and corresponding cold arrow weapon, which were utilized in the Frostreign DLC.",

      "During the work, I received short training on the level design workflow and using the tilemap editor and tools, as well as on designing enemy encounters and spawn setups. I reviewed my progress with my supervisor throughout the work and took part in weekly level design meetings where we discussed layouts and problems. The work gave me extensive experience working in the Unity Editor and allowed me to learn how to use and understand existing game components and ScriptableObjects within a larger project.",
    ],
    media: [
      { type: "image", src: cottages },
      { type: "image", src: open },
      { type: "video", src: church },
      { type: "video", src: tavern },
      { type: "video", src: mill },
      { type: "video", src: armory },
      { type: "video", src: boss },
      { type: "video", src: boss2 },
      { type: "video", src: ice },
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/GsFBbR9KgL8?si=Ydza8a7qTQH-kRph",
      },
    ],
  },

  lastDrop: {
    title: "Last Drop",

    role: "Programming Intern – Lohkare Games",
    period: "Internship: November–December 2025",

    description:
      "Last Drop is an open-world action-adventure game set in the fictional city of Nykylä in 1994. The game world is based on Jyväskylä and the Huhtasuo district, and partially recreates real locations, while the story and characters draw from real-life experiences during the 1990s recession and Finnish culture.",

    github: null,
    steamUrl: "https://store.steampowered.com/app/3275750/Last_Drop/",
    purpose: [
      "During my internship at Lohkare Games, I worked as a Game Development Intern on Last Drop using Unreal Engine and Blueprints. My work focused on gameplay programming, multiplayer functionality, and improving the project's bug-reporting workflow.",
    ],
    feature: [
      "Developed a vehicle break-in system with different locks and tools",
      "Implemented mechanics for breaking into vehicles and stealing items such as car radios, batteries, and cargo",
      "Modified the Traffic AI System to support spawning designated parked vehicles at specific locations alongside randomly spawned traffic vehicles",
      "Created 3D crowbar model for use in the vehicle break-in system",
      "Worked with multiplayer functionality and replication",
      "Created a GitHub Issue Form Template for bug reports and documented its use",
    ],
    technologies: ["Unity", "C#", "Blender", "GitHub Issues"],
    solutions: [
      "I developed a vehicle break-in system using partly existing gameplay functionality where applicable. For example, I utilized the project's existing quick time event (QTE) and adapted the interaction to work as part of the break-in system. I also implemented similar interaction logic for accessing vehicle storage, based on the existing trunk inventory functionality. The system included different levels of locks and tools, with tools having limited durability and eventually breaking through use. Players could use appropriate tools to break into vehicles and steal items such as car radios, batteries, and cargo from trunks.",

      "To support the break-in system, I worked with the project's Traffic AI System and modified its existing vehicle spawning logic. I implemented support for designated parked vehicles that could be spawned at specific locations alongside randomly generated traffic vehicles. These designated vehicles could then be used as targets for the vehicle break-in gameplay.",

      "I also created 3D crowbar model to be used as break-in tool.",

      "Alongside the gameplay work, I worked with the project's multiplayer functionality and replication. This included implementing replicated door interactions and investigating replication issues together with another developer. I also studied the existing multiplayer implementation and used additional learning materials to improve my understanding of multiplayer development in Unreal Engine.",

      "During the internship, I identified development needs related to bug reporting and created a GitHub Issue Form Template for bug reports. I also wrote documentation explaining how to use the template and report bugs, helping the team maintain a more consistent bug-reporting workflow.",

      "The work was carried out mainly independently, with development sessions and discussions with my internship supervisor when needed. I took part in daily written scrum updates and weekly meetings, which supported communication and helped me follow the project's progress. The internship gave me practical experience working with an existing Unreal Engine project, gameplay systems, multiplayer functionality, and development workflows using Blueprints.",
    ],
    media: [
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/_h_vC4RUB7w?si=_KxKBfIimkrgWBYC",
      },
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
      {project.role && <p>{project.role}</p>}
      {project.period && <p>{project.period}</p>}
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
      {Array.isArray(project.solutions) ? (
        project.solutions.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))
      ) : (
        <p>{project.solutions}</p>
      )}
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

      {project.steamUrl && (
        <a
          href={project.steamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.steamLink}
        >
          View on Steam ↗
        </a>
      )}
    </section>
  );
}

export default ProjectDetail;
