import React from 'react';
import {animated} from 'react-spring';
import { Link } from 'react-router-dom';



const NavProject = ({ style }) => {


  return (


      <animated.div className='nav-wrapper' style={ style }>

          <div className="nav-box">
            <div className = "projects"> Projects</div>
            <Link to={`/plantopia`} className="pro-nav d-block pt-5"> Wechat Miniprogram</Link>
            <Link to={`/spareleash`} className="pro-nav d-block pt-5"> WebApp</Link>
            <Link to={`/cocktail`} className="pro-nav d-block pt-5"> Ruby on Rails</Link>
            <Link to={`/fun`} className="pro-nav d-block pt-5"> JS projects</Link>
          </div>

      </animated.div>


    )
}

export default NavProject;
