import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhp,
  faNode,
  faJs,
  faReact,
  faBootstrap,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faCode,faDatabase } from "@fortawesome/free-solid-svg-icons";

import "./Habilidades.css";

const skills = [
  { icon: faPhp, color: "#8892BF", name: "PHP" },
  { icon: faNode, color: "#8CC84B", name: "Node.js" },
  { icon: faJs, color: "#F0DB4F", name: "JavaScript" },
  { icon: faReact, color: "#61DAFB", name: "React" },
  { icon: faDatabase, color: "#00758F", name: "MySQL" },
  { icon: faBootstrap, color: "#8100CF", name: "Bootstrap" },
  { icon: faGithub, color: "#525252", name: "Git" }
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
      Habilidades
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
