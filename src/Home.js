import React from 'react';
import './Home.css';

function Home() {
    const experiences = [
        'Web Development Languages: React, HTML, CSS, python,  java and SQL.',
        'Education: Database and administration, Seattle Central Collage,2024.',
        'Content Management Systems (CMS): Content Management Systems (CMS)',
        'Tools: Visual Studio Code, GitHub, and velo.',
        // Add more experiences as necessary
    ];

    return (
        <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <p>I'm Sinit, a Web Developer with a passion for optimizing performance and database administration.</p>
            <h2><strong>My Experiences</strong></h2>
            <ul>
                {experiences.map((experience, index) => {
                    const [firstPart, ...rest] = experience.split(':');
                    return (
                        <li key={index}>
                            <strong>{firstPart}:</strong> {rest.join(':')}
                        </li>
                    );
                })}
            </ul>
            <p>Explore my portfolio to see how I can help manage and maintain your websites.</p>
            <footer>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                    <strong>LinkedIn</strong>
                </a>
            </footer>
        </div>
    );
}

export default Home;