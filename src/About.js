import React from 'react';
import './About.css'; // Import your CSS file

function About() {
    return (
        <div className="about-container">
            <div className="about-text">
                <h2>About Me</h2>
                <p>I'm a Web Developer with a passion for optimizing performance and database administration.</p>
                <p>I have experience in various programming languages and frameworks such as JavaScript, React, Node.js, and more.</p>
                <p>I'm always eager to learn new technologies and improve my skills.</p>
            </div>
            <img src={process.env.PUBLIC_URL + '/senu.jpg'} alt="Profile" className="profile-image" />
        </div>
    );
}

export default About;