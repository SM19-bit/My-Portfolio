import React, { useMemo, Suspense } from "react";
import "./About.css";
import { motion } from "framer-motion";
import codingAnimation from "./assets/Coding.json";

// Lazy load Lottie to improve initial performance
const Lottie = React.lazy(() => import("lottie-react"));

const About = () => {
  // Memoize Lottie animation so it doesn't re-render on scroll
  const lottieView = useMemo(
    () => <Lottie animationData={codingAnimation} loop={true} />,
    []
  );

  return (
    <div id="about" className="about-section">
      <motion.div
        className="about-box"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Left side - Text */}
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
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            I’m a MERN Stack Developer and Computer Engineering student focused
            on building responsive and user-friendly web applications. I enjoy
            turning ideas into interactive experiences with React, Node.js, and
            MongoDB. Motivated by curiosity and creativity, I continuously learn
            and improve, aiming to deliver high-quality solutions that make an
            impact.
          </motion.p>
        </div>

        {/* Right side - Lottie Animation */}
        <div className="about-right">
          <Suspense fallback={<div style={{ height: 300 }}></div>}>
            {lottieView}
          </Suspense>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
