import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/ProfileNoPG.png";
import themeIcon from "../../assets/sun.svg";
import GithubIcon from "../../assets/github-light.svg";
import LinkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.Hero}
          src={heroImg}
          alt="Profile picture of Katja Kulmala"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
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
          <a href="https://github.com/" target="_blank">
            <img src={GithubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={LinkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>
          Third-year game development student at Karelia University of Applied
          Sciences.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
