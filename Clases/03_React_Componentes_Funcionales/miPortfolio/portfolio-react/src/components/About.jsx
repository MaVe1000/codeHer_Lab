import React from "react";

const About = ({ description }) => {
  return (
    <section className="about">
      <h2 className="about__title">Sobre mí</h2>
      <p className="about__description">{description}</p>
    </section>
  );
};

export default About;
