import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
    {
      title: 'Stock Price Prediction',
      description: 'Created a sophisticated stock price prediction model using advanced machine learning techniques, achieving a 12% improvement in forecast accuracy and enhancing decision-making for investment strategies. Integrated and analyzed historical price data from Yahoo Finance, resulting in a 15% increase in prediction quality and more accurate forecasting.',
      link: 'https://example.com/stock-price-prediction',
    },
    {
      title: 'Hand Gesture Detection System',
      description: 'Engineered and launched a real-time hand gesture detection system using convolutional neural networks (CNNs), resulting in effective gesture recognition and a 30% reduction in recognition latency. Achieved a recognition accuracy rate of 92% by employing advanced image preprocessing techniques and improving network architecture.',
      link: 'https://example.com/hand-gesture-detection',
    },
    {
      title: 'Employability Consultancy System',
      description: 'Analyzed candidate skills and preferences, resulting in a 40% increase in successful job placements and enhancing the hiring process for 50+ positions monthly. Improved matching accuracy by 20% through detailed feature extraction and personalized recommendations.',
      link: 'https://example.com/employability-consultancy',
    },
    {
      title: 'Movie Search System',
      description: 'Developed a system where users can search for movies and add them to public or private playlists, implementing security features to store keys in local storage and session storage.',
      link: 'https://example.com/movie-search-system',
    },
    {
      title: 'Project Management System',
      description: 'Created a system to streamline project management processes, enhancing collaboration and tracking for teams.',
      link: 'https://example.com/project-management-system',
    },
    // Add more projects as needed
];

function Projects() {
  const [visibleIndex, setVisibleIndex] = useState(0); // Start with the first project visible

  useEffect(() => {
    if (visibleIndex < projectData.length) {
      const timer = setTimeout(() => {
        setVisibleIndex((prev) => prev + 1); // Increment index to show the next project
      }, 1000); // 1 second delay for each card

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [visibleIndex]); // Run effect when visibleIndex changes

  return (
    <section id="projects" className="project-section">
      <h2>Projects</h2>
      <div className="project-card-container">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            isVisible={index < visibleIndex} // Show cards that are less than the visible index
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
