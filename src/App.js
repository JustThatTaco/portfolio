import React, { useEffect, useState } from 'react';
import Homepage from './components/Home';
import Navbar from './components/Navbar';
import './App.css';



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
      <Homepage />
    </div>
  );
}
  
export default App;