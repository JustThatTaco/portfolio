import React, { useEffect, useState } from 'react';
import portrait from '../assets/cato_portrait.png';
import nyu from '../assets/NYU2.jpg'

import "./Home.css";

const Homepage = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return (
      <div className='main'>
        <img src={portrait}
             alt="Portrait of Me"
             style={{ width: `${windowSize.width * 0.5}px`, height: 'auto'}}
             className = 'portrait'
        />
        <p className='intro'> Hello! I am Cato </p>
        <div className='container'>
          <p className='body1'> I am a Junior at New York University Studying Electrical Engineering and Computer Engineering </p>
          <img src={nyu}
             alt="NYU Logo"
             style={{ width: `${windowSize.width * 0.2}px`, height: 'auto', float: 'left'}}
          />
        </div>
        <div style={{ clear: 'both' }}></div>
        <p className='body2'> I made this website because I wanted a place to include some of my interests that dont fit
        onto resumes very well. On this website, you will find my resume, past projects I've done, and write-ups about
        board games, video games, workshop projects (with 3D printers, lasercutters, etc) and other miscellaneous things
        I find interesting. </p>
        <p className='thanks'> Thanks for visiting my website, I hope you enjoy your stay. </p>
      </div>
    );
  };
  
  export default Homepage;

