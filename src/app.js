import React, { Component } from 'react';
import Nav from './nav';
import Home from './home';
import About from './about';
import Skill from './skill';
import Work from './work';
import Contact from './contact';
import Profile from './profile';
import Profilf from './profilf';
import Fun from './fun';
class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Home/>
        <About/>
        <Skill/>
        <Work/>
        <Contact/>
        <Profile/>
        <Profilf/>
        <Fun/>

      </div>
    );
  }
}
export default App;
