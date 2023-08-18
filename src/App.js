import React from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { HashRouter, Routes, Route} from 'react-router-dom';



import Homepage from './components/Home';
import Resume from './components/Resume'
import Projects from './components/Projects'
import Blog from './components/Blogs'
import Notes from './components/Notes'

import Navbar from './components/Navbar';
import Footer from './components/Footer2'

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
          <Route path="/blog" element = {<Blog />}></Route>
          <Route path="/notes" element = {<Notes />}></Route>
        </Routes>
        <Footer/>
      </div>
    {/* </BrowserRouter> */}
    {/* </HashRouter> */}
    </div>
  );
}

  
export default App;