import React from "react";

import sozialvideo from "../videos/sozialvideo.mp4"

import { Project } from "./project.jsx";
import fuaypi from "../videos/fuaypi.mp4"
import telemercadocr from "../videos/telemercadocr.mp4"
export const Projects=()=>{
    




    return(
        <div className="container-fluid projects-cont">
                <h1 className="projects-title">My recent work</h1>
                <div className="projects row">
                    <div className="col-10 m-auto">
                        <Project
                        video={fuaypi}
                        title={"-Fuaypi Organization Website-"}
                        p={"I spearheaded the development of Fuaypi's organizational website, a robust platform crafted with Bootstrap, React, and cutting-edge technologies. This project not only demonstrates my technical prowess in web development but also underscores my dedication to leveraging technology for positive social impact. The site's responsive design ensures seamless accessibility, fostering an engaging experience for users interacting with Fuaypi's mission and resources."}
                        link1={"https://github.com/yisas93/FUAYPI"}
                        />
                        
                        
                        
                        <Project
                        video={telemercadocr}
                        title={"-Telemercado TV Show Website-"}
                        p={"In leading the development of the Telemercado TV show website, I showcased my expertise in Bootstrap, React, and other advanced technologies. This project reflects my ability to translate the dynamic essence of the television program into an immersive online experience. The site's responsive design ensures consistent engagement across diverse devices, catering to the show's diverse audience."}
                        validate={true}
                        link1={"https://github.com/yisas93/Tv.telemercado"}
                        link2={"https://telemercadocr.com/"}
                        />
                        <Project
                        video={sozialvideo}
                        title={"-Sozial: Ecommerce/Social Media-"}
                        p={`Social Media/E-commerce web application that I developed using a modern and robust tech stack. Leveraging the power of React for the frontend, Flask for the backend, and SQLAlchemy for database management, I ensured a seamless and responsive user experience. The use of Bootstrap enhanced the application's aesthetic appeal and responsiveness across various devices.\n\n The integration of social media features facilitates user engagement, while the e-commerce functionality adds a layer of business capabilities to the application.`}
                        tech6={"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original-wordmark.svg"}
                        tech7={"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/flask/flask-original-wordmark.svg"}
                        tech8={"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sqlalchemy/sqlalchemy-original-wordmark.svg"}
                        link1={"https://github.com/Alvarojavier22/Proyecto-Sozial"}
                        />
                    </div>
                </div>
        </div>
    )
}