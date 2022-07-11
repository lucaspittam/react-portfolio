import React from 'react';
import profilePic from "../../pics/profile.jpg";


const About = () => (
    <section>
        <h2 className="section-header">Me</h2>
        <img src={profilePic} alt="Joe Lawton" />
        <p>
        Full-stack developer with a passion for solving problems and a commitment to lifelong learning. Skills in Html,
        Javascript, React and with the unique skill set of using creativity and logic to solve comprehensive puzzles 
        through code. I am Motivated to develop responsive websites and apps. Positioned to provide a unique perspective 
        on how users interact with websites and software platforms by leveraging educational background with a Certificate 
        of Web Development from University of Toronto and work experience in Brand Development and Sales. When not drinking 
        coffee and spending long hours at a computer, I like to stay fit with Mixed Martial arts like Brazilian Jiu Jitsu and Boxing.
        </p>
        
    </section>
);

export default About;