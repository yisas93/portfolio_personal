import React from "react";
import ReactPlyer from "react-player";


export const Project=(props)=>{

const validate = props.validate

    return(
        <div className="row project-holder " id="projects">
                            <div className="col-12 col-lg-6 video d-grid">
                        <ReactPlyer className="video-player" width={"80%"} id="video-player"  playing loop muted url={props.video} />
                        
                        </div>
                        <div className="col-12 col-lg-6 video-description">
                            <h1 className="project-title">{props.title}</h1>
                            <div className="p-holder-project">
                                <p className="p-project">{props.p}
                                    </p>

                            </div>
                            <div className="techs d-flex">
                                <div className="tech-holder ">
                                <img className="tech" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg" alt="" />
                                </div>
                                <div className="tech-holder ">
                                <img className="tech" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg" alt="" />
                                </div>
                                <div className="tech-holder ">
                                <img className="tech" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" alt="" />
                                </div>
                                <div className="tech-holder ">
                                <img className="tech" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bootstrap/bootstrap-original-wordmark.svg" alt="" />
                                </div>
                                <div className="tech-holder ">
                                <img className="tech" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg" alt="" />
                                </div>
                                <div className="tech-holder ">
                                <img className="tech" src={props.tech6} alt="" />
                                </div>
                                <div className="tech-holder ">
                                <img className="tech" src={props.tech7} alt="" />
                                </div>
                                <div className="tech-holder ">
                                <img className="tech" src={props.tech8} alt="" />
                                </div>
                              
                            </div>
                            <div className="buttons-project d-flex justify-content-around" >
                            <a href={props.link1}>
                                <button className="button-source-visit">Source Code  <i class="fa-brands fa-square-github source-visit-project"></i></button>
                            </a>
                            {validate?(
                                <a href={props.link2}>
                                    <button className="button-source-visit">Visit Site  <i class="fa-solid fa-share source-visit-project"></i></button>
                                    </a>
                            ):""}
                        </div>
                        </div>
                        </div>
    )
}