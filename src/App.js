import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

import portrait from './assets/cato_portrait.png';

function App() {
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
    <div className="App">
      <Navbar />
      <img
        src={portrait}
        alt="Picture of Me"
        style={{ width: `${windowSize.width * 0.5}px`, height: 'auto' }}
      />
    </div>
  );
}
  
export default App;