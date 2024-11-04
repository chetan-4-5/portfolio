import React from 'react';

function ProjectCard({ title, description, link, isVisible }) {
  return (
    <div className={`project-card ${isVisible ? 'fade-in' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>View Project</a>
    </div>
  );
}

export default ProjectCard;
