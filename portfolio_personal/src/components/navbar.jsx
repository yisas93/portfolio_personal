import React from "react";



export const Navbar=()=>{


    return(
        <nav class="navbar navbar-expand-lg navback">
  <div class="container" >
    
    <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon  button-nav"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
        
      </ul>
    </div>
    <div className="d-none d-sm-flex">
        <span className="m-auto ms-5 nav-link mail-navbar">juan249325@gmail.com</span>
        
    </div>
    <div className="button ms-5 d-none d-sm-flex">
        <a className="button-cv m-auto d-flex">
         <span className="m-auto cv"> CV</span>
          <i className="bi bi-download m-auto"></i>
          </a>
    </div>
  </div>
</nav>
    )
}