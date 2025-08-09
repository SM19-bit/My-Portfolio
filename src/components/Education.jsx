import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

const educationData = [
  {
    position: "left",
    title: "K.J College of Engineering and Management Research, Pune",
    subtitle: "Bachelor of Computer Engineering",
    duration: "Currently Pursuing in 4th year",
  },
  {
    position: "right",
    title: "Sungrace High School and Jr College, Pune",
    subtitle: "HSC — Science | 79.67%",
    duration: "Dec'20 – May'22",
  },
  {
    position: "left",
    title: "Rosary High School, Pune",
    subtitle: "SSC | 71.6%",
    duration: "Jun'17 – May'20",
  },
];

const Education = () => {
  return (
    <div id="education" className="education-section">
      <h2 className="education-title">Academic Credentials</h2>
      <div className="timeline-container">
        {educationData.map((item, index) => (
          <motion.div
            className={`timeline-item ${item.position}`}
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <span className="timeline-badge">{item.duration}</span>
            </div>
            <motion.div
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.div>
        ))}
        <div className="timeline-line" />
      </div>
    </div>
  );
};

export default Education;
