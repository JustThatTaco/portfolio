import React from 'react';

import Render from "./pdf_render";

import "./Resume.css";

const Resume = () => {
    return (
    <div className="resume_main">
        <p className = "foreword"> The page is a little lackluster</p>
  
        <h4>All Pages</h4>
        <div className="all-page-container">
          <Render pdf="/portfolio/resume.pdf" />
        </div>
  
        <hr />
    </div>
    );
};
  
export default Resume;