
import React from 'react';
import { Document, Page } from 'react-pdf';
import "./Resume.css";

const Resume = () => {
    return (
    <div className="resume_main">
        <p className = "foreword"> The page is a little lackluster</p>
        {/* <iframe
            title="My Resume"
            src = '../assets/cato_resume_aug2023.pdf'
            width="90%"
            // height="500px"
            style={{ border: 'none' }}
        /> */}
        {/* <object data= "../assets/cato_resume_aug2023.pdf"
                type="application/pdf" width="100%" height="100%">
            <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf"> to the PDF!</a></p>
            <p> my Resume </p>
        </object> */}
        <div style={{ width: '100%' }}>
        <Document file= 'cato_resume_aug2023.pdf'>
          <Page pageNumber={1} width={window.innerWidth} />
        </Document>
        </div>
    </div>
    );
};
  
export default Resume;