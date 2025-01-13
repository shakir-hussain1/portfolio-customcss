import React from "react";
import "../app/styles/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        <div data-aos="zoom-in-up" className="skills-left">
          <h2 className="skills-heading">Skills</h2>
          <p className="skills-text">
            Web Development <br />
            Frontend: HTML, CSS, JavaScript, Typescript, Next.js, Node.js <br />
            Tools: Git, VS Code, REST APIs. <br />
            Cybersecurity <br />
            Network Security: Firewalls, VPNs, Intrusion Detection Systems
            (IDS). <br />
            Vulnerability Assessment: Penetration Testing, OWASP Top 10. <br />
            Tools: Wireshark, Metasploit, Nmap. <br />
            Compliance: ISO 27001, GDPR Awareness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
