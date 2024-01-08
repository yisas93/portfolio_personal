import React from "react";






export const Skills=()=>{


    return(
        <div className="container-fluid skills-holder">
            <div className="row">
                <div className="col-sm-11 col-lg-10 d-flex skills-container m-auto">
                    <div className="col">
                        <div className="logo-skill">
                        <i className="fa-brands fa-html5 logo"></i>
                        </div>
                        <div className="title-skill-cont" >
                            <h1 className="skill-title">Front-End</h1>
                        </div>
                        
                        <div className="sub-skills col-10 m-auto">
                            <p className="p-skills">With a passion for pixel-perfect design and a keen eye for detail, I turn code into captivating visuals. Your project isn't just about lines of code; it's about creating an immersive journey for your users</p>
                        </div>
                        <div className="subtitle-skill">
                            <h4 className="subtitle-skill-h4">I create with:</h4>
                            <p className="p-subtitle col-10 m-auto"><span className="tools-skills">Languages:</span> HTML, CSS, JavaScript<br />
                            <span className="tools-skills">Frameworks/Libraries:</span> React.js <br />
                            <span className="tools-skills">Tools:</span> Visual Studio Code, Chrome Developer Tools <br />
                            <span className="tools-skills">Responsive Design:</span> Bootstrap, CSS Grid, Flexbox <br />
                            <span className="tools-skills">Version Control:</span> Git, Github
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="logo-skill">
                        <i className="fa-solid fa-code logo"></i>
                        </div>
                        <div className="title-skill-cont">
                            <h1 className="skill-title">
                            Back-End
                        </h1>
                        </div>
                        <div className="sub-skills col-10 m-auto">
                            <p className="p-skills"> I thrive on turning complex concepts into elegant, efficient code. Let me build the backbone of your digital ambitions, ensuring everything runs smoothly and effortlessly.</p>
                        </div>
                        <div className="subtitle-skill">
                            <h4 className="subtitle-skill-h4">I work with:</h4>
                            <p className="p-subtitle  col-10 m-auto"><span className="tools-skills">Languages:</span> Python, JavaScript<br />
                            <span className="tools-skills">Frameworks:</span> Flask, SQLAlchemy<br />
                            <span className="tools-skills">Database Management:</span> MySQL, PostgreSQL, SQLlite<br />
                            <span className="tools-skills">APIs:</span> RESTful<br />
                            <span className="tools-skills">Testing:</span> Unit testing, Jest<br />
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="logo-skill">
                        <i className="fa-solid fa-database logo"></i>
                        </div>
                        <div className="title-skill-cont">
                             <h1 className="skill-title">
                            Database
                        </h1>
                        </div>
                        <div className="sub-sklls col-10 m-auto">
                            <p className="p-skills"> Your information isn't just stored; it's housed in a secure fortress, ready to be retrieved at the blink of an eye. Let's ensure your data feels right at home.</p>
                        </div>
                        <div className="subtitle-skill">
                            <h4 className="subtitle-skill-h4">I protect your data using:</h4>
                            <p className="p-subtitle col-10 m-auto">
                            <span className="tools-skills">Relational Databases:</span> MySQL, PostgreSQL <br />
                            <span className="tools-skills">Database Design:</span> ERD(Entity-Relationship Diagrams), Database normalization<br />
                            <span className="tools-skills">Query language:</span> SQL<br />
                            <span className="tools-skills">Database Management System:</span> MySQL Workbench, DBeaver<br />
                            </p>
                        </div>
                       
                    </div>
                    
                </div>
            </div>

        </div>
    )
}