import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillList}></div>
        <img src={checkMarkIcon} alt="Checkmark icon" />
      </div>
    </section>
  );
}

export default Skills;
