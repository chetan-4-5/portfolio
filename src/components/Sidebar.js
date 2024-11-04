import React from 'react';


function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Education</h3>
      <ul className="education">
        <li>Bachelor's in Computer Science - KL University</li>
        <li>AWS Cloud Practioner Certified</li>
        <li>Red Hat Enterprise Application Developer Certified</li>
      </ul>

      <h3>Skills</h3>
      <ul className="skills">
        <li>Languages: Python, Java, SQL, C</li>
        <li>Frameworks: React, Django, Spring Boot</li>
        <li>Tools: Git, MySQL</li>
        <li>Web: HTML, CSS, JavaScript</li>
        <li>Soft Skills: Problem-Solving, Communication, Collaboration</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
