import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

// Import images
import project1Img from "./assets/images/project1.png";
import project2Img from "./assets/images/project2.png";
import project3Img from "./assets/images/project3.png";
import project4Img from "./assets/images/project4.png";
import project5Img from "./assets/images/project5.png";

const projects = [
  {
    id: 1,
    title: "Quick Chat",
    description: "Modern MERN chat app with real-time messaging via Socket.io, JWT-secured login, and a sleek TailwindCSS interface.",
    image: project1Img,
    codeLink: "https://github.com/SM19-bit/chat-web",
    liveLink: "https://chat-web-ten-ashy.vercel.app/login",
  },
  {
    id: 2,
    title: "Chess Multiplayer",
    description: "Real-time multiplayer chess game built with Node.js, Express, EJS, Socket.io, and a chess engine for dynamic gameplay.",
    image: project2Img,
    codeLink: "https://github.com/SM19-bit/Chess-game",
    liveLink: "https://chess-game-kp92.onrender.com/",
  },
  {
    id: 3,
    title: "House Price Prediction",
    description: "ML-powered web app for house price prediction using Flask, Bootstrap, and scikit-learn's LinearRegression model.",
    image: project3Img,
    codeLink: "https://github.com/SM19-bit/Predict-Housing-Price",
    liveLink: "https://predict-housing-price.onrender.com/",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe",
    description: "Multiplayer Tic-Tac-Toe web app with a clean and user-friendly interface.",
    image: project4Img,
    codeLink: "https://github.com/SM19-bit/Tic-Tak-to",
    liveLink: "https://sm19-bit.github.io/Tic-Tak-to/",
  },
  {
    id: 5,
    title: "Rock-Paper-Scissors",
    description: "Rock-Paper-Scissors web app with a clean and intuitive interface.",
    image: project5Img,
    codeLink: "https://github.com/SM19-bit/Stone-Paper-Scissors-Game",
    liveLink: "https://sm19-bit.github.io/Stone-Paper-Scissors-Game/",
  },
];

// Animation variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(110, 243, 214, 0.5)" }}
          >
            <div
              className="project-image"
              style={{
                backgroundImage: project.image
                  ? `url(${project.image})`
                  : "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
              }}
            />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
