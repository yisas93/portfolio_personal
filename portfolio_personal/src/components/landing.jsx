import React from "react";




export const Landing=()=>{


    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-11 m-auto" >
                    <div className="row">
                        <div className="col-12 title">
                            <h1 className="landing-title ">
                                &lt;Full-Stack Developer&gt;
                            </h1>
                        </div>
                        <div className="col-12 d-flex landing-holder">
                            <div className="landing-info col-6">
                            <p className="landing-p">Hey there! 👋 I'm Juan Carlos, a passionate full-stack developer with a knack for turning coffee into <span style={{color: "red"}}>&lt;code&gt;</span>.  Let's connect and explore how my skills align with the vision and objectives of your organization.</p>
                        </div>
                        <div className="col-6">
                            <div className="img-cont ">
                            <img className="img-landing" src="https://imgs.search.brave.com/Jx38atpbcgNY3NNbZs_-D9n4DmcgNdgfH06NB0JmE2Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzc3LzM5LzY5/LzM2MF9GXzQ3NzM5/NjkyNV9XYncxQmxK/Y2RwZ0NwamV5aXBz/MVY3S0JpWUVVb1da/aC5qcGc" alt="" />

                            </div>
                        </div>
                        </div>
                        
                        <div className="title-dwo col-12">
                        <h1 className="landing-down-title ">
                                &lt;/Full-Stack Developer&gt;
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}