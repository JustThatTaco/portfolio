import React, { useEffect, useState } from 'react';
import portrait from '../assets/cato_portrait.png';
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
             alt="Picture of Me"
             style={{ width: `${windowSize.width * 0.5}px`, height: 'auto' }}
        />
        <p className='intro'> Hello! I am Cato Wen, a Junior studying Electrical Engineering
        and Computer Engineering at New York University </p>
      </div>
    );
  };
  
  export default Homepage;

