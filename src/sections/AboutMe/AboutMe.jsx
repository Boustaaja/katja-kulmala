import styles from "./AboutMeStyles.module.css";
import { useTheme } from "../../common/ThemeContext";

function AboutMe() {
  const { theme } = useTheme();
  return (
    <section id="aboutme" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>
      <p className={styles.description}>
        Hello, my name is{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: theme === "dark" ? "#f8b306" : "#23a79eff" }}
        >
          Katja Kulmala
        </span>
        !
      </p>

      <p className={styles.description}>
        I am currently a third-year Business IT student at Karelia University of
        Applied Sciences, specializing in game and software development. Before
        entering IT, I have been working for 17 years in customer service, where
        I have learned to adapt to challenging situations and to stay up-to-date
        with an ever-changing product range.
      </p>

      <p className={styles.description}>
        I am a creative and innovative thinker. I enjoy designing and ideating,
        but I am especially motivated when I can bring ideas to life. I feel at
        my best working on creative projects with great teammates, combining
        problem-solving, technical skills, and imaginative thinking. Throughout
        my studies, I have participated in several highly rewarding group
        projects that followed Scrum principles, which I have truly enjoyed.
      </p>

      <p className={styles.description}>
        Games have always been my passion and hobby—from playing, collecting,
        and trophy hunting to, in recent years, developing them. In game
        development, I am particularly interested in game mechanics and level
        design. I greatly admire the Dark Souls series for its style and
        mechanics, as well as the genre it has spawned. I have a solid
        foundation with Unreal Engine, using both C++ and Blueprints. In
        software development, I am more familiar with .NET and C#, and I also
        have experience in web development with JavaScript, HTML, and CSS.
        Alongside my studies, I work on personal projects to explore new tools
        and methods, improve my skills, and enjoy creative experimentation.
      </p>

      <p className={styles.description}>
        Beyond traditional games, I am also interested in gamification and
        serious games. My specialization in both software and game development
        supports this interest, and I believe that my combination of technical
        skills and passion for gaming enables me to contribute effectively to
        projects that integrate game elements in meaningful and innovative ways.
      </p>

      <p
        className={`${styles.description} ${styles.nameHighlight}`}
        style={{ color: theme === "dark" ? "#f8b306" : "#23a79eff" }}
      >
        Thank you for reading!
      </p>
    </section>
  );
}

export default AboutMe;
