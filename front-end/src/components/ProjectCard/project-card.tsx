import React from "react";
import "./style.css";
import { motion } from "framer-motion";
const projectCard = (props) => {
  const projects = props.projects;
  return (
    <div className="project-list">
      {projects
        .filter((project) => project.active)
        .map((project, i) => (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 1.5,
              opacity: { duration: 2 },
            }}
            key={i}
            className="card"
          >
            <div className="content">
              <h1 className="title">{project.title}</h1>
              <h2 className="header">{project.header}</h2>
              <p className="description">{project.description}</p>
            </div>
            <img src={project.image_url} alt="" />
          </motion.div>
        ))}
    </div>
  );
};

export default projectCard;
