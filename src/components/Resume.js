
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    return (
    <div className="resume_main">
        <p className = "foreword"> The page is a little lackluster</p>
        <div style={{ width: '100%' }}>
        <Document
          file= "/resume.pdf"
          onLoadError={console.error}
        >
        </Document>
        </div>
    </div>
    );
};
  
export default Resume;