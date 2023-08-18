import React from 'react';

import Render from "./pdf_render";

import "./Resume.css";

const Resume = () => {
    return (
    <div className="resume_main">
        <p className = "foreword"> The page is a little lackluster</p>
        <div className='center'>
        <div className="all-page-container">
          <Render pdf="/portfolio/resume.pdf" />
        </div>
        </div>
  
        <hr />
    </div>
    );
};
  
export default Resume;