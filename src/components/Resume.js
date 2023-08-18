import React from 'react';
import Render from "./pdf_render";
import arrow from '../assets/arrow.png';
import "./Resume.css";

const Resume = () => {
    return (
    <div className="resume_main">
        <img src={arrow}
             alt= "My Resume V"
             style={{ width: '15vw', height: 'auto'}}
             className = 'elem_center'
        />
        <div className='center'>
          <div className="all-page-container">
            <Render pdf="/portfolio/resume.pdf" />
          </div>
          <a href={"/portfolio/resume.pdf"} target="_blank"> Download </a>
        </div>
          
        <hr />
    </div>
    );
};
  
export default Resume;