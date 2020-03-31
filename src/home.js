import React, {Component} from 'react';
import girla from '../assets/image/home_girl_a.svg'
import girlb from '../assets/image/home_girl_b.svg'
import shape_green from '../assets/image/shape_green.svg'

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



  render() {
    return (
      <div className="min-vh-100 max-vw-100  home container position-relative" id="home">
        <div className="row">
          <div className="col-lg-7 ">
            <img src={shape_green} className="home-shape-g"alt="green cloud"/>
            <div className="intro-text position-absolute">
              <div className="kaki">Kaki Li</div>
              <div className="full-stack">Full Stack Developer</div>
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img src={girla} ref={this.girlWheel} onMouseEnter = {this.handleMouseIn} onMouseLeave={this.handleMouseOut}className="home-girl mt-3" alt="girl riding wheel"/>
          </div>
        </div>
      </div>
      )
  }
}

export default Home;
