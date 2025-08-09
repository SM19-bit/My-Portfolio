import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
import "./Hero.css";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div id="home" className="hero-container">
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50 },
            color: { value: "#6ef3d6" },
            links: { enable: true, color: "#6ef3d6" },
            move: { enable: true, speed: 1 },
          },
        }}
      />

      <div className="hero-content">
        <p className="intro-text">Hi, my name is</p>
        <h1 className="name-text">Surojeet Manna</h1>

        <h2 className="tagline typewriter">
          <Typewriter
            options={{
              strings: ["I build things for the web."],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 30,
              pauseFor: 2000,
            }}
          />
        </h2>

        <p className="desc-text">
          I am a MERN Stack Web Developer passionate about building interactive, scalable, and user-friendly web applications using modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects"><button className="hero-btn">Check out my work</button></a>
          <a
            href="https://drive.google.com/file/d/18przk0GInIMgaJ0XCDalD8r9fYpCW-Ex/view?usp=drive_link" //change resume link
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hero-btn">View Resume</button>
          </a>
        </div>

        {/* Scroll Down */}
        <a href="#about" className="scroll-down">
          <motion.div
            className="scroll-wrapper"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="scroll-text">Scroll Down</div>
            <div className="scroll-icon">↓</div>
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
