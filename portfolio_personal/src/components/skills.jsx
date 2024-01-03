import React from "react";






export const Skills=()=>{


    return(
        <div className="container-fluid skills-holder">
            <div className="row">
                <div className="col-10 d-flex skills-container">
                    <div className="col">
                        <div className="logo-skill">
                        <i className="fa-brands fa-html5 logo"></i>
                        </div>
                        <div className="title-skill-cont">
                            <h1 className="skill-title">Front-End</h1>
                        </div>
                        
                        <div className="sub-skills col-10 m-auto">
                            <p className="p-skills">With a passion for pixel-perfect design and a keen eye for detail, I turn code into captivating visuals. Your project isn't just about lines of code; it's about creating an immersive journey for your users</p>
                        </div>
                        <div className="subtitle-skill">
                            <h4 className="subtitle-skill-h4">I create with:</h4>
                            <p className="p-subtitle col-10 m-auto"><span>Languages:</span> HTML, CSS, JavaScript<br />
                            <span>Frameworks/Libraries:</span> React.js <br />
                            <span>Tools:</span> Visual Studio Code, Chrome Developer Tools <br />
                            <span>Responsive Design:</span> Bootstrap, CSS Grid, Flexbox <br />
                            <span>Version Control:</span> Git, Github
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
                            <h4 className="subtitle-skill-h4">Languages I speak:</h4>
                            <p className="p-subtitle">Python, Flask, SQLAlchemy</p>
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
                            <p className="p-skills">Think of databases as the silent guardians of your data. As a database whisperer, I design and optimize these repositories with meticulous care. Your information isn't just stored; it's housed in a secure fortress, ready to be retrieved at the blink of an eye. Let's ensure your data feels right at home.</p>
                        </div>
                        <div className="subtitle-skill">
                            <h4 className="subtitle-skill-h4">I protect your data using:</h4>
                            <p className="p-subtitle">MySQL, SQLite, PostgreSQL</p>
                        </div>
                       
                    </div>
                    
                </div>
            </div>

        </div>
    )
}