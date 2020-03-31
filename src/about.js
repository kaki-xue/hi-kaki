import React, {Component} from 'react';
import card from '../assets/image/about_card.png'
import cardm from '../assets/image/about_card_m.png'
import carded from '../assets/image/about_card_e.png'

class About extends Component {
  constructor(props) {
    super(props);
    this.carde=React.createRef();
    this.cardf=React.createRef();
  }

  handleMouseIn = () => {
    setTimeout(this.handleClass(), 5000);
  }

  handleClass =() => {
    this.carde.current.classList.remove("d-lg-none");
    this.cardf.current.classList.add('d-lg-none');
    }

 handleMouseOut = () => {
    this.carde.current.classList.add("d-lg-none");
    this.cardf.current.classList.remove('d-lg-none');
    }





  render() {
    return (
      <div className="max-vw-100 " id="about">

        <div className="about d-lg-block d-none position-relative ">
          <div className="about-h d-flex justify-content-end align-items-end">
           <div className="about-ht"> About </div>
          </div>
          <div onMouseEnter={this.handleMouseIn}  className="d-flex justify-content-center h-75 position-relative">
            <div  ref={this.cardf} className=" about-p d-flex justify-content-start align-items-center vh-50">
            <img src={card} className="d-block"alt="about me"/>
            </div>
             <div ref={this.carde}  className="d-lg-none about-p d-flex justify-content-start align-items-center vh-50 about-p-e">
            <img src={carded} className="d-block"alt="about me"/>
            </div>
          </div>
          <div className="about-t" onMouseLeave={this.handleMouseOut}>
            <h3>A Brief Intro</h3>
            <div className="">I’m a China local currently living in Shanghai Love creating stuff. Programming is so far the best way I know how. Been longing for greener world, green is my favorite color. Blahblah</div>
          </div>
        </div>

        <div className="about-m d-block d-lg-none position-relative">
          <div className="about-hm"><div>About</div></div>
          <div className="about-pm w-100"><img src={cardm} className="w-75 "alt=""/></div>
          <div className="about-tm w-100 d-flex align-items-end justify-content-center  ">
            <div className="w-75 text-justify">
               <h5>A Brief Intro</h5>
              <div className="">I’m a China local currently living in Shanghai Love creating stuff. Programming is so far the best way I know how. Been longing for greener world, green is my favorite color. Blahblah</div>
            </div>
          </div>
        </div>


      </div>
      )
  }
}

export default About;
