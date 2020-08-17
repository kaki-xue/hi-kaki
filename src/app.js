import React from 'react';
import Nav from './nav';
import Home from './home';
import About from './about';
import Skill from './skill';
import Work from './work';
import Contact from './contact';
import SkillMobile from './skillMobile';


const App = () => {


    return (
      <div>
        <Nav/>
        <Home/>
        <div className="stickybg"></div>
        <About/>
        <SkillMobile />
        <Skill/>
        <Work/>
        <Contact/>



      </div>
    );
}
export default App;
