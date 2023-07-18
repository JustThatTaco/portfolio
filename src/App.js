import React from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { HashRouter, Routes, Route} from 'react-router-dom';



import Homepage from './components/Home';
import Resume from './components/Resume'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Navbar from './components/Navbar';
import './App.css';




function App() {
  return (
    <div>
    {/* <BrowserRouter> */}
    {/* <HashRouter> */}
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Homepage />}></Route>
          <Route path="/resume" element = {<Resume />}></Route>
          <Route path="/projects" element = {<Projects />}></Route>
          <Route path="/blogs" element = {<Blogs />}></Route>
        </Routes>
      </div>
    {/* </BrowserRouter> */}
    {/* </HashRouter> */}
    </div>
  );
}

  
export default App;