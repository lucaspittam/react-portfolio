import React from 'react';

const projects = [
    {
        name: "Run Buddy",
        liveURL: "https://lucaspittam.github.io/run-buddy/",
        ghURL: "https://github.com/lucaspittam/run-buddy",
        tech: "HTML/CSS",
        style: "ecommerce"
    },
    
    {
        name: "Residential Matchmaker",
        liveURL: "https://residential-matchmaker.herokuapp.com/",
        ghURL: "https://github.com/Group-0007/Project-2-Group-7",
        tech: "Node.js/Express/Sequelize/Handlebars",
        style: "app1"
    },
    {
        name: "Trekking-App",
        liveURL: "https://project1team7.github.io/Trekking-App",
        ghURL: "https://github.com/project1team7/Trekking-App",
        tech: "Node.js/Express",
        style: "app2"
    },
    {
        name: "Techy blog",
        liveURL: "https://protected-sea-89530.herokuapp.com/",
        ghURL: "https://github.com/lucaspittam/Techy-blog",
        tech: "Node.js/Express/",
        style: "blog-site"
    }
]
const Projects = () => (
    <div>
        <h1>Projects</h1>
            {projects.map(project => (
                <div className={project.style} key={project.name}> 
                    <a href={project.liveURL} target="_blank" rel="noopener noreferrer">

                        {project.name}
                    </a>
                    <a href={project.ghURL} target="_blank" rel="noopener noreferrer">
                        GitHub Repo
                    </a>
                    <p>{project.tech}</p>
                </div>
                
            ))}
    </div>
);

export default Projects;