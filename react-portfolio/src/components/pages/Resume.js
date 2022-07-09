import React from 'react';
import resume from "../../pics/LucasPittam_Resume_2022.pdf";

const resumeName = resume.split('/')[3].split('.')[0].concat(".pdf");


//get the div that has all of the info for Resume 
const Resume = () => (
    <div>
        <a href={resume} download={resumeName}>Resume</a>

        <h3>Front-end Skills</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>

        <h3>Back-end Skills</h3>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
        </ul>
    </div>
);

export default Resume;