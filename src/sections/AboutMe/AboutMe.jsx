import styles from "./AboutMeStyles.module.css";
import { useTheme } from "../../common/ThemeContext";

function AboutMe() {
  const { theme } = useTheme();
  const highlightedColor = theme === "dark" ? "#f8b306" : "#23a79eff";
  return (
    <section id="aboutme" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>
      <p className={styles.description}>
        Hello, my name is
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          {" "}
          Katja Kulmala
        </span>
        !
      </p>

      <p className={styles.description}>
        I am currently a third-year Business IT student at Karelia University of
        Applied Sciences, specializing in{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          game and software development
        </span>
        . With 17 years in{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          customer service
        </span>
        , I have developed strong communication, teamwork, and problem-solving
        skills.
      </p>

      <p className={styles.description}>
        {" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Creativity
        </span>{" "}
        drives me. I love turning ideas into tangible experiences. Whether
        designing{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          game mechanics
        </span>{" "}
        crafting{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          immersive levels
        </span>{" "}
        or building{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          innovative software solutions
        </span>
        . I thrive in{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          collaborative
        </span>
        ,{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Scrum-based
        </span>{" "}
        projects where technical skill meets{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          imaginative thinking.
        </span>{" "}
      </p>

      <p className={styles.description}>
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Games
        </span>{" "}
        have always been
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          {" "}
          my passion
        </span>
        , from playing and collecting to developing. In game development, I am
        particularly interested in{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          game mechanics
        </span>{" "}
        and{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          level design
        </span>
        . I admire Dark Souls for its design brilliance and enjoy exploring what
        makes games memorable. I have a solid foundation with{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Unreal Engine
        </span>
        (C++ and Blueprints). In software development, I am more familiar with
        .NET and C#, and web technologies (JavaScript, HTML and CSS). Outside of
        school, I dive into{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          personal projects
        </span>{" "}
        to experiment, learn, and push creative boundaries.
      </p>

      <p className={styles.description}>
        I am also fascinated by{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          gamification
        </span>{" "}
        and{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          serious games
        </span>
        . My specialization in both software and game development supports this
        interest, and I believe that my combination of technical skills and
        passion for gaming enables me to contribute effectively to projects that
        integrate game elements in meaningful and innovative ways.
      </p>

      <p
        className={`${styles.description} ${styles.nameHighlight} ${styles.thankYou}`}
        style={{ color: theme === "dark" ? "#f8b306" : "#23a79eff" }}
      >
        Thank you for reading!
      </p>
    </section>
  );
}

export default AboutMe;
