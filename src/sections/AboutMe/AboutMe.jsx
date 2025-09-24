import styles from "./AboutMeStyles.module.css";
import { useTheme } from "../../common/ThemeContext";

function AboutMe() {
  const { theme } = useTheme();
  const highlightedColor = theme === "dark" ? "#f8b306" : "#23a79eff";
  return (
    <section id="aboutme" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>
      <p className={styles.description}>
        Hello, my name is{""}
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
        . Before entering IT, I have been working for 17 years in{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          customer service
        </span>
        , where I have learned to adapt to challenging situations and to stay
        up-to-date with an ever-changing product range.
      </p>

      <p className={styles.description}>
        I am a{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          creative
        </span>{" "}
        and{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          innovative
        </span>{" "}
        thinker. I enjoy{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          designing
        </span>{" "}
        and{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          ideating
        </span>
        , but I am especially motivated when I can bring ideas to life. I feel
        at my best working on creative projects with great{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          teammates
        </span>
        , combining problem-solving, technical skills, and imaginative thinking.
        Throughout my studies, I have participated in several highly rewarding
        group projects that followed{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Scrum
        </span>{" "}
        principles, which I have truly enjoyed.
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
        </span>{" "}
        and hobby—from playing, collecting, and trophy hunting to, in recent
        years, developing. In game development, I am particularly interested in{" "}
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
        . I greatly admire Dark Souls series for its style and mechanics, as
        well as the genre it has spawned. I have a solid foundation with{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Unreal Engine
        </span>
        , using both C++ and Blueprints. In software development, I am more
        familiar with .NET and C#, and I also have experience in web development
        with JavaScript, HTML and CSS. Alongside my studies, I work on{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          personal projects
        </span>{" "}
        to explore new tools and methods, improve my skills, and enjoy creative
        experimentation.
      </p>

      <p className={styles.description}>
        Beyond traditional games, I am also interested in{" "}
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
