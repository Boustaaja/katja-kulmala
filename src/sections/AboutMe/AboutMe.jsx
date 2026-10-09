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
        I am currently a final-year Business IT student at Karelia University of
        Applied Sciences, specializing in{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          game and software development
        </span>
        , and I am expected to graduate in autumn 2026. With 18 years of
        experience in{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          customer service
        </span>
        , I have developed strong communication and teamwork skills, along with
        a customer-oriented mindset.
      </p>

      <p className={styles.description}>
        During my studies, I have gained hands-on industry experience through
        internships at{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Lohkare Games{" "}
        </span>
        and{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          MiTale
        </span>
        , both game development studios. At Lohkare Games, I worked on{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Last Drop
        </span>{" "}
        using Unreal Engine and Blueprints. At MiTale, I worked on{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Willow Guard
        </span>{" "}
        and its{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Frostreign DLC
        </span>
        , working with programming and level design using Unity and C#.
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
        designing and implementing{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          game mechanics
        </span>
        , crafting{" "}
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
          creative thinking.
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
        . I have practical experience with{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Unity and C#
        </span>
        , as well as{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Unreal Engine, C++, and Blueprints.{" "}
        </span>
        I enjoy continuously expanding my skills and exploring new technologies.
        I am currently learning and gaining experience with{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Godot.{" "}
        </span>
        I also have experience with .NET and web technologies such as
        JavaScript, HTML, and CSS. Outside of school, I dive into{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          personal projects
        </span>{" "}
        to experiment, learn, and push my skills further.
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
        , as well as the ways game design can influence player motivation and
        experience. I am currently finalizing my thesis, commmissioned by
        MiTale, where I have designed and implemented{" "}
        <span
          className={styles.nameHighlight}
          style={{ color: highlightedColor }}
        >
          Steam achievements{" "}
        </span>
        for the Frostreign DLC of Willow Guard. The topic was chosen based on my
        own interests in this area.
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
