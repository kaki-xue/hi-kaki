import React from 'react';
import Nav from './nav';
import Home from './home';
import About from './about';
import Skill from './skill';
import Work from './work';
import Contact from './contact';

const App = () => {


    return (
      <div>
        <Nav/>
        <Home/>
        <div className="stickybg"></div>
        <About/>
        <Skill/>
        <Work/>
        <Contact/>



      </div>
    );
}
export default App;
