import React, {useState} from 'react';
import {useSpring} from 'react-spring'
import NavProject from './nav_project';

const Nav =() => {


  const [isNavOpen, setNavOpen] = useState(false);
  const navAnime = useSpring({
    display: isNavOpen
      ? `block`
      : `none`
  });
  // const fade = useSpring({
  //   from: {
  //     opacity: 0
  //   },
  //   opacity:1
  // });

    return (
      <div >
        <div className="nav vw-100  bg-white d-flex justify-content-between position-fixed fixed-top  px-5-lg  pt-2 align-items-center">
          <div className="d-lg-block d-md-block d-sm-none d-none p-4 ml-4 nav-burger" onClick={()=> setNavOpen(!isNavOpen)} >三</div>

            <div className="d-lg-flex d-md-flex d-none justify-content-start " >
              <div className=" d-flex justify-content-end px-5 w-100 " >
                <a className=" nav-item  h5 px-4" href="#home">Home</a>
                <a className=" nav-item  h5 px-4" href="#about">About</a>
                <a className=" nav-item  h5 px-4" href="#skill">Skill</a>
                <a className=" nav-item  h5 px-4" href="#work">Work</a>
                <a className=" nav-item  h5 px-4" href="#contact">Contact</a>
              </div>
            </div>



          <div className="d-lg-none d-md-none d-block p-3 ">
            <div className="dropdown  ">
              <div className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                三
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                <a className="dropdown-item pt-5 pb-5 h5" href="#home">Home</a>
                <a className="dropdown-item pt-5 pb-5 h5" href="#about">About</a>
                <a className="dropdown-item pt-5 pb-5 h5" href="#skill">Skill</a>
                <a className="dropdown-item pt-5 pb-5 h5" href="#work">Work</a>
                <a className="dropdown-item pt-5 pb-5 h5" href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-start" >
          <NavProject style={navAnime}/>
        </div>
      </div>


      )

}

export default Nav;
