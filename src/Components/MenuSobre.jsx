import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhp,
  faNode,
  faJs,
  faReact,
  faGithub,
  faGitlab,
  faDocker,
  faLaravel,
  faPython
} from "@fortawesome/free-brands-svg-icons";
import { faCode,faDatabase } from "@fortawesome/free-solid-svg-icons";
// inporte o fas fa-cube 
import { faCube } from "@fortawesome/free-solid-svg-icons";

import "./Habilidades.css";

// Adianti = fas fa-cube
const skills = [
  // { icon: faPhp, color: "#8892BF", name: "PHP" },
  { icon: faCube, color: "#58CC4D", name: "Adianti" },
  // { icon: faJs, color: "#F0DB4F", name: "JavaScript" },
  { icon: faNode, color: "#8CC84B", name: "Node.js" },
  { icon: faReact, color: "#61DAFB", name: "React" },
  // { icon: faReact, color: "#06bcee", name: "React Native"},
  { icon: faLaravel, color: "#FF2D20", name: "Laravel" },
  { icon: faDatabase, color: "#00758F", name: "MySQL" },
  { icon: faDocker, color: "#2496ED", name: "Docker" },
  { icon: faGithub, color: "#525252", name: "GitHub"},
  { icon: faGitlab, color: "#FCA121", name: "GitLab"},
  { icon: faPython, color: "#3776AB", name: "Python" }
];


const MenuSobre = () => {
  const [renderedSkills, setRenderedSkills] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const delay = 200; // 2 segundos

    if (index < skills.length) {
      const timeoutId = setTimeout(() => {
        setRenderedSkills([...renderedSkills, skills[index]]);
        setIndex(index + 1);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [index, renderedSkills]);

  return (
    <div className="skills-page-container">
      <h1 className="skill-title">
      <FontAwesomeIcon icon={faCode} style={{ marginRight: "10px" }} />
      Stack
    </h1>
      <div className="skills-page">
      {renderedSkills.map((skill, index) => (
  <div key={index} className="skill-box active" > 
    <div
      className="icon-container"
      style={{ backgroundColor: skill.color }}
    >
      <FontAwesomeIcon
        icon={skill.icon}
        size="3x"
        className="skill-icon"
      />
      <span className="skill-name">{skill.name}</span>
    </div>
  </div>
))}
      </div>
    </div>
  );
  
};

export default MenuSobre;
