import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio';
import Projects from './components/projects/Projects';
import Certifications from './components/certifications/Certifications';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import React from 'react';
import { useState } from 'react'; 
import './app.scss'

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="App">
      <Navbar menu={menu} setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} />
      <div className='section'>
        <Intro />
        <Portfolio />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}

export default App;
