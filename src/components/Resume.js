import React from 'react';

import Render from "./pdf_render";

import "./Resume.css";

const Resume = () => {
    return (
    <div className="resume_main">
        <p className = "foreword"> The page is a little lackluster</p>
        <h4>Single Page</h4>
        <Render pdf="/portfolio/resume.pdf" />
        <hr />
    </div>
    );
};
  
export default Resume;