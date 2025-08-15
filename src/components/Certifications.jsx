import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css";

// Import certificate images
import cert1 from "./assets/images/cert1.png";
import cert2 from "./assets/images/cert2.png";
import cert3 from "./assets/images/cert3.png";

const certifications = [
  {
    id: 1,
    title: "Backend Web Development",
    image: cert1,
    link: "https://drive.google.com/file/d/1mXzU1y2dUySReLApaZi0MZG0ywykR1LS/view"
  },
  {
    id: 2,
    title: "Frontend Web Development with Node & Express",
    image: cert2,
    link: "https://www.cert.devtown.in/verify/Z122l2z"
  },
  {
    id: 3,
    title: "Frontend Web Development with React",
    image: cert3,
    link: "https://www.cert.devtown.in/verify/1Ove7W"
  }
];

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="cert-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open(cert.link, "_blank")}
          >
            <div className="cert-image-container">
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <div className="cert-overlay">
                <span>View Credential</span>
              </div>
            </div>
            <h3 className="cert-title">{cert.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
