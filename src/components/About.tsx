import React from "react";
import "../app/styles/about.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h2 className="about-heading" data-aos="zoom-in-up">
        About Me
      </h2>
      <p className="about-text" data-aos="zoom-in-up">
        I’m Shakir Hussain, a professional with a Master’s in Physics and
        expertise in Web Development and Cybersecurity. With a strong analytical
        background, I approach challenges by breaking down complex problems into
        practical, secure solutions.
        <br />
        I specialize in building user-friendly websites and applications,
        ensuring they are both high-performance and protected from security
        threats. Always evolving, I combine my technical skills with a passion
        for innovation to deliver reliable, scalable digital solutions.
        <br />
        Let’s connect and explore how I can help bring your ideas to life with a
        focus on security and efficiency.
      </p>
    </div>
  );
};

export default About;
