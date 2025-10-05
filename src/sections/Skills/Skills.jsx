import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h1 className="sectionTitle">Languages & Databases</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="XAML" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="SQL (MariaDB)" />
      </div>
      <hr />
      <h1 className="sectionTitle">Software & Tools</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill=".NET" />
        <SkillList src={checkMarkIcon} skill="Unreal Engine" />
        <SkillList src={checkMarkIcon} skill="VS Code" />
        <SkillList src={checkMarkIcon} skill="Visual Studio" />
        <SkillList src={checkMarkIcon} skill="HeidiSQL" />
        <SkillList src={checkMarkIcon} skill="Azure DevOps" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
      </div>
      <hr />
      <h1 className="sectionTitle">Interest</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Traveling" />
        <SkillList src={checkMarkIcon} skill="Hiking" />
        <SkillList src={checkMarkIcon} skill="Planning" />
        <SkillList src={checkMarkIcon} skill="Games" />
        <SkillList src={checkMarkIcon} skill="Audiobooks" />
        <SkillList src={checkMarkIcon} skill="Escape Rooms" />
      </div>
    </section>
  );
}

export default Skills;
