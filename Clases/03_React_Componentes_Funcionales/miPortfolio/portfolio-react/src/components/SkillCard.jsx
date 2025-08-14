import React from "react";

const SkillCard = ({ title, skills, icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-card__header">
        <span className="skill-card__icon">{icon}</span>
        <h3 className="skill-card__title">{title}</h3>
      </div>
      <ul className="skill-card__list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-card__item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
