import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import codingAnimation from "./assets/Coding.json";

const About = () => {
  return (
    <div id="about" className="about-section">
      <motion.div
        className="about-box"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="about-left">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            viewport={{ once: true }}
          >
            I’m a MERN Stack Developer and Computer Engineering student focused on building responsive and user-friendly web applications. I enjoy turning ideas into interactive experiences with React, Node.js, and MongoDB. Motivated by curiosity and creativity, I continuously learn and improve, aiming to deliver high-quality solutions that make an impact.
          </motion.p>
        </div>

        <div className="about-right">
          <Lottie animationData={codingAnimation} loop={true} />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
