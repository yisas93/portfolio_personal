import React from "react";






export const Code=()=>{

const code_line = "while (!success){\n     tryagain()\n"
const final_line="}"
const codeStyle = {
    whiteSpace: "pre-line",
};
    return(
        <div className="container-fluid code-cont">
            <div className="row">
                <div className="col-sm-6 col-lg-4 m-auto ">
                    <p style={codeStyle} className="p-code">
                    <span className="while-code">while</span>
                    <span className="parent-code"> &#40;</span>
                        <span className="success-code">nosuccess</span>
                        <span className="parent-code">&#41;</span>
                        <span className="curly-code">&#123;</span><br />
                        <span className="try-code">tryagain</span>
                        <span className="parent-code">&#40;</span>
                        <span className="parent-code">&#41;</span><br />
                        <span className="curly-code">&#125;</span>
                    </p>
                </div>
            </div>
        </div>
    )
}