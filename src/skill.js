import React, {Component} from 'react';
import ipad from '../assets/image/skill_ipad.svg'
import pacman from '../assets/image/pacman.png'
import bean from '../assets/image/bean.png'

class Skill extends Component {
  render() {
    return (
      <div className="skill position-relative" id="skill">
        <div className="d-lg-none d-flex flex-column justify-content-center  w-100 h-75 mb-3 ">
        <div className="skill-hm position-absolute"> Skill</div>
          <div className=" w-75 d-flex align-items-center ">
            <img src={ipad} className="w-100"alt=""/>
          </div>
          <div className="skill-pacman-m w-100 h-50 d-flex align-items-center justify-content-center position-absolute">
            <img src={pacman} className="pacman-m "alt=""/>
            <img src={bean} className="bean-m"alt=""/>
            <img src={bean} className="bean-m"alt=""/>
            <img src={bean} className="bean-m"alt=""/>
            <img src={bean} className="bean-m"alt=""/>
          </div>
        </div>

        <div className="d-lg-block d-none w-100 h-75 ">
          <div className="w-75 border skill-ipad position-absolute ">
            <img src={ipad} className="w-75"alt=""/>
          </div>
          <div className="w-100 border d-flex align-items-center justify-content-center skill-pacman position-absolute">
            <img src={pacman} className="pacman"alt=""/>
            <img src={bean} className="bean px-lg-5"alt=""/>
            <img src={bean} className="bean px-lg-5"alt=""/>
            <img src={bean} className="bean px-lg-5"alt=""/>
            <img src={bean} className="bean px-lg-5"alt=""/>
            <img src={bean} className="bean px-lg-5"alt=""/>
          </div>
        </div>
      </div>


      )
  }
}

export default Skill;
