import React, { useEffect, useState } from 'react';
import portrait from '../assets/cato_portrait.png';
import nyu from '../assets/NYU2.jpg';
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
      <div>
        <img src={portrait}
             alt="Portrait of Me"
             style={{ width: `${windowSize.width * 0.5}px`, height: 'auto' }}
        />
        <p className='intro'> Hello! I am Cato Yuan Wen </p>
        <div className='container'>
          <p className='body1'> I am a Junior at New York University Studying Electrical Engineering and Computer Engineering </p>
          <img src={nyu}
             alt="NYU Logo"
             style={{ width: `${windowSize.width * 0.2}px`, height: 'auto', float: 'left'}}
          />
        </div>

      </div>
    );
  };
  
  export default Homepage;

