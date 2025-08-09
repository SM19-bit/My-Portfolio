import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFramer,
} from "react-icons/si";
import { RiShieldKeyholeFill } from "react-icons/ri";

const frontendSkills = [
  { icon: <FaReact />, label: "ReactJS", class: "react" },
  { icon: <FaHtml5 />, label: "HTML5", class: "html" },
  { icon: <FaCss3Alt />, label: "CSS3", class: "css" },
  { icon: <FaJs />, label: "JavaScript", class: "js" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS", class: "tailwind" },
  { icon: <FaBootstrap />, label: "Bootstrap", class: "bootstrap" },
  { icon: <SiFramer />, label: "Framer Motion", class: "framer" },
];

const backendSkills = [
  { icon: <FaNodeJs />, label: "Node.js", class: "node" },
  { icon: <SiExpress />, label: "Express.js", class: "express" },
  { icon: <SiMongodb />, label: "MongoDB", class: "mongo" },
  { icon: <RiShieldKeyholeFill />, label: "JWT Auth", class: "jwt" },
];

const languages = [
  { icon: <FaJs />, label: "JavaScript", class: "js" },
  { icon: <FaJava />, label: "Java", class: "java" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-category">
        <h3>Frontend Development</h3>
        <div className="skills-grid">
          {frontendSkills.map((skill, index) => (
            <motion.div
              className={`skill-card ${skill.class}`}
              key={index}
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`skill-icon skill-${skill.class}`}>
                {skill.icon}
              </div>
              <span>{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Backend Development</h3>
        <div className="skills-grid">
          {backendSkills.map((skill, index) => (
            <motion.div
              className={`skill-card ${skill.class}`}
              key={index}
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`skill-icon skill-${skill.class}`}>
                {skill.icon}
              </div>
              <span>{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Programming Languages</h3>
        <div className="skills-grid">
          {languages.map((skill, index) => (
            <motion.div
              className={`skill-card ${skill.class}`}
              key={index}
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`skill-icon skill-${skill.class}`}>
                {skill.icon}
              </div>
              <span>{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
