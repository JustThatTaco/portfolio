
import React from 'react';
import { Document, Page } from 'react-pdf';
import "./Resume.css";

const Resume = () => {
    return (
    <div className="resume_main">
        <p className = "foreword"> The page is a little lackluster</p>
        <div style={{ width: '100%' }}>
        <Document file= 'resume.pdf'>
          <Page pageNumber={1} width={window.innerWidth} />
        </Document>
        </div>
    </div>
    );
};
  
export default Resume;