import React, {Component} from 'react';
import phone_a from '../assets/image/phone-plantopia-a.png'
import phone_b from '../assets/image/phone-plantopia-b.png'
import phone_c from '../assets/image/phone-plantopia-c.png'
import phone_d from '../assets/image/phone-plantopia-d.png'
import phone_e from '../assets/image/phone-plantopia-e.png'
import phone_f from '../assets/image/phone-plantopia-f.png'
import home from '../assets/image/home.svg'
import {Link} from 'react-router-dom'
import next from '../assets/image/next.svg'
import previous from '../assets/image/previous.svg'

class Plantopia extends Component {
  render() {
    return (
      <div className="profile-a max-vw-100">
        <div className=" d-flex flex-lg-row flex-column vh-100 vw-100">
          <div className="profile-nav  px-lg-3 px-2 d-lg-block d-flex justify-content-end">
            <Link to={`/`} className="d-block pt-lg-5 pt-3">
             <img src={home} className="px-4"alt="go back" />
            </Link>
          </div>
          <div className="profile-content text-justify px-4 ">
            <div className = "pt-lg-5 ">
              <p className="text-black-50">Wechat mini program</p>
              <h2>Plantopia</h2>
              <p>Plant topia is a wechat mini program that isdesigned for people who has little knowledge as how to take care plant or</p>
            </div>
          </div>

          <div className="profile-display w-100 d-flex justify-content-center align-items-center">
            <div id="carouselExampleFade" className="carousel slide carousel-fade position-relative" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={phone_a} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={phone_b}  className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={phone_c}  className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={phone_d}  className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={phone_e}  className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={phone_f}  className="d-block w-100" alt="..."/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <Link to={'/spareleash'}><img src={next} className="position-absolute next d-none d-lg-block" /></Link>
            <Link to={'/cocktail'}><img src={previous} className="position-absolute previous d-none d-lg-block" /></Link>

          </div>



        </div>
      </div>
        )
  }
}

export default Plantopia;

