import React, {Component} from 'react';
import girla from '../assets/image/girl.svg'
import girlb from '../assets/image/girlb.svg'
// import shape_green from '../assets/image/shape_green.svg'
import wheel from '../assets/image/wheel.svg'


class Home extends Component {
  constructor(props) {
    super(props);
    this.girlWheel = React.createRef();
  }

  handleMouseIn = () => {
    this.girlWheel.current.src= girlb
  }

  handleMouseOut = () => {
    this.girlWheel.current.src= girla
  }



            // <img src={shape_green} className="home-shape-g"alt="green cloud"/>
  render() {
    return (
      <div className=" max-vw-100  home container position-relative" id="home">
        <div className="row home-row h-100">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="intro-text ">
              <div className="kaki">Kaki Li</div>
              <div className="full-stack">Full Stack Developer</div>
            </div>
          </div>
          <div className="wheel col-lg-6 d-flex justify-content-center align-items-end">
          <img src={girla} ref={this.girlWheel} onMouseEnter = {this.handleMouseIn} onMouseLeave={this.handleMouseOut}className="home-girl mt-3 position-absolute" alt="girl riding wheel"/>

          <img src={wheel} alt="wheel" className="home-wheel position-relative"/>
          </div>

        </div>
      </div>
      )
  }
}

export default Home;
