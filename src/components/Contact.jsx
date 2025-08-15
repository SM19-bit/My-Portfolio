import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const contactItems = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    text: "+91 8830752463",
    link: "tel:+918830752463"
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    text: "surojeetmanna8@gmail.com",
    link: "mailto:surojeetmanna8@gmail.com"
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    text: "Pune, Maharashtra",
    link: "https://goo.gl/maps/x3cF6Q8zK6L2"
  },
  {
    id: 4,
    icon: <FaLinkedin />,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/surojeet-manna-6683352b9/"
  },
  {
    id: 5,
    icon: <FaGithub />,
    text: "GitHub",
    link: "https://github.com/SM19-bit"
  }
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-grid">
        {contactItems.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="contact-icon">{item.icon}</div>
            <p>{item.text}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
