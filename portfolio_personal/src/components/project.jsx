import React from "react";
import ReactPlyer from "react-player";


export const Project=(props)=>{



    return(
        <div className="row project-holder">
                            <div className="col-12 col-lg-6 video ">
                        <ReactPlyer id="video-player" width={"80%"} playing loop muted url={props.video} />
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
                        </div>
                        </div>
    )
}