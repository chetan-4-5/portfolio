import React, { useEffect, useState } from 'react';

function AboutMe() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    const lines = document.querySelectorAll('.line');

    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, index * 1000); // Delay each line by 1 second (1000 ms)
    });
  }, []);

  return (
    <section id="about" className="about-me">
      <h2>About Me</h2>
      {Array.from({ length: 4 }).map((_, index) => (
        <p 
          key={index} 
          className={`line ${visibleLines.includes(index) ? 'fade-in' : ''}`} // Add fade-in class if visible
        >
          {index === 0 && "Hi, I'm Chetan! I'm a fresher passionate about software development and constantly learning new technologies."}
          {index === 1 && "With a proactive attitude and strong collaborative skills, I bring creativity and dedication to every project I work on."}
          {index === 2 && "My skill set includes programming languages like Python, Java, and SQL, and I have experience with full-stack development using React, NodeJS, and MongoDB."}
          {index === 3 && "Currently, I’m focusing on artificial intelligence and UI/UX design. I'm also preparing for the GATE exam, concentrating on Engineering Mathematics to strengthen my technical foundations."}
        </p>
      ))}
    </section>
  );
}

export default AboutMe;
