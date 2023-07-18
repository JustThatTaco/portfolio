import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './components/Home';
import Resume from './components/Resume'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Navbar from './components/Navbar';
import './App.css';



function App() {
  return (
    <div>
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/portfolio/" element = {<Homepage />} />
          <Route path="/portfolio/resume" element = {<Resume />} />
          <Route path="/portfolio/projects" element = {<Projects />} />
          <Route path="/portfolio/blogs" element = {<Blogs />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
  // return (
  //   <div>
  //     <Navbar/>
  //     <Homepage/>
  //   </div>
  // );
}
  
export default App;