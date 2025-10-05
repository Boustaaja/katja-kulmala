import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/ProfilePictureSized.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

// Hero section component
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const GithubIcon = theme === "light" ? githubLight : githubDark;
  const LinkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <nav className={styles.navbar}>
        <a href="#hero">Home</a>
        <a href="#aboutme">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Katja Kulmala"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Katja
          <br />
          Kulmala
        </h1>
        <h2>
          Game Development
          <br /> Software Development
        </h2>
        <span>
          <a href="https://github.com/Boustaaja/" target="_blank">
            <img src={GithubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/katja-kulmala-628706377/"
            target="_blank"
          >
            <img src={LinkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          A dedicated and motivated team player passionate about designing and
          brainstorming. Inspired by bringing ideas to life and the learning
          that comes with it.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
