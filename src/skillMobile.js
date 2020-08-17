import React, {useState}from 'react';
import ipad from '../assets/image/skill_ipad.svg'
import pacman from '../assets/image/skill_pacman_p.svg'
import bean from '../assets/image/skill_bean.svg'
import {useSpring, animated, config} from 'react-spring';
import {Waypoint } from 'react-waypoint'

const SkillMobile =() => {

  const [isToggled, setToggle] = useState(false);
  const moveIt = useSpring({
    transform: isToggled ? 'translateX(500px)':'translateX(0px)',
    delay:500,
    duration: 2000,
    config: config.molasses,

  })
  const moveIpad = useSpring({
    delay: 500,
    transform: isToggled ? 'translateX(380px)':'translateX(0px)',
    duration: 500,
    config: config.molasses
  })
  const makeGone = useSpring({
    visibility: isToggled? 'hidden': 'visible',
    delay: 700
  })
  const makeGoneTwo = useSpring({
    visibility: isToggled? 'hidden': 'visible',
    delay: 800
  })

  const moveFast = useSpring({
    transform: isToggled ? 'translateX(200px)': 'translateX(0px)',
    delay: 800,
    duration:1000,
    tension:400,
    config: config.wobbly
  })

   console.log('hey you')

    return (
      <div className="skill position-relative skillForMobile" >
        <div className=" w-100 h-100 " >
          <Waypoint
            topOffset="90%"
            onEnter={()=> setToggle(true)}
            bottomOffset="40%"
       
          >
            <div className="skill-ipad">
              <animated.img  src={ipad} style={moveIpad} className="w-75"alt=""/>
            </div>
          </Waypoint >
            <div className="w-75  d-none align-items-lg-center align-items-end justify-content-lg-center justify-content-start pl-2 skill-pacman ">
              <img  src={pacman} className="pacman"alt="" />
              <img  src={bean} className="bean px-lg-5"alt=""/>
              <img  src={bean} className="bean px-lg-5"alt=""/>              
              <img  src={bean} className="bean px-lg-5"alt=""/>
            </div>
        </div>
      </div>
      )
}

export default SkillMobile;
//     //onLeave={()=> setToggle(false)}
