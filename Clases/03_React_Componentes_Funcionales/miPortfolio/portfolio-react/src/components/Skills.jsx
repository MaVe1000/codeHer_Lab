import React from "react";
import SkillCard from "./SkillCard";

const Skills = ({ softSkills, hardSkills }) => {
  return (
    <section className="skills">
      <h2 className="skills__title">Habilidades</h2>
      <div className="skills__grid">
        <SkillCard title="Soft Skills" skills={softSkills} icon="🧠" />
        <SkillCard title="Hard Skills" skills={hardSkills} icon="⚡" />
      </div>
    </section>
  );
};

export default Skills;
