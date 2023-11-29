import React from 'react';
import './Projects.css'; // Import the CSS file

function Projects() {
    const projects = [
        { name: 'View Project 1', description: 'webflow project.', link: 'https://www.sinitkeren.com/' },
        { name: 'View Project 2', description: 'wix project.', link: 'https://prov311112.wixsite.com/sinit' },
        // Add more projects as necessary
    ];

    return (
        <div className="projects-container">
            <h2 className="projects-title">My Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} className="project-link">{project.name}</a>
                </div>
            ))}
        </div>
    );
}

export default Projects;