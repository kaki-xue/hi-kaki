import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="position-sticky sticky-top">
        <div className="d-lg-flex d-none justify-content-center bg-white">
          <div className=" d-flex justify-content-around pt-4 w-75 ">
            <a className=" nav-item text-black-50 h5" href="#home">Home</a>
            <a className=" nav-item text-black-50 h5" href="#about">About</a>
            <a className=" nav-item text-black-50 h5" href="#skill">Skill</a>
            <a className=" nav-item text-black-50 h5" href="#work">Work</a>
            <a className=" nav-item text-black-50 h5" href="#contact">Contact</a>
          </div>
        </div>
        <div className="d-lg-none d-flex justify-content-start  px-4">
          <div className="dropdown ">
            <div className="dropdown-toggle p-4" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
      )
  }
}

export default Nav;
