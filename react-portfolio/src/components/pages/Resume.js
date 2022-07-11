import React from 'react';
import resume from "../../pics/LucasPittam_Resume_2022.pdf";

const resumeName = resume.split('/')[3].split('.')[0].concat(".pdf");


//get the div that has all of the info for Resume 
const Resume = () => (
    <section>
        <h2 className="section-header">Resume</h2>
        <p className="download-link">Download my <a href={resume} download={resumeName}>resume</a></p>

        <h3 className="list-header">Front-end proficiencies</h3>
        <ul className="prof-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
        </ul>

        <h3 className="list-header">Back-end proficiencies</h3>
        <ul className="prof-list">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
        </ul>
    </section>
);

export default Resume;