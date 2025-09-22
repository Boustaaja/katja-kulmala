import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="HTML" />
      </div>
      <hr />
      <h1 className="sectionTitle">Something</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="HTML" />
      </div>
      <hr />
      <h1 className="sectionTitle">Tools</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="HTML" />
      </div>
    </section>
  );
}

export default Skills;
