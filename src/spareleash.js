import React, {Component} from 'react';
import desktop_a from '../assets/image/ipad-spareleash-a.png';
import desktop_b from '../assets/image/ipad-spareleash-b.png';
import desktop_c from '../assets/image/ipad-spareleash-c.png';
import desktop_d from '../assets/image/ipad-spareleash-d.png';
import desktop_e from '../assets/image/ipad-spareleash-e.png';
import {Link} from 'react-router-dom';
import chili from '../assets/image/home.svg'
import next from '../assets/image/next.svg'
import previous from '../assets/image/previous.svg'
import next_m from '../assets/image/next-m.svg';
import pre_m from '../assets/image/pre-m.svg';


class SpareLeash extends Component {
  render() {
    return (
      <div className="profile-b  max-vw-100 ">

         <div className="d-flex flex-lg-row flex-column vh-100 vw-100">
          <div className="profile-nav  px-lg-3 px-2 d-lg-block d-flex justify-content-between">
          <div className="d-flex w-50 pt-3 px-3 d-lg-none justify-content-between">
            <div>
              <Link to={'/plantopia'}><img src={pre_m} alt="Previous"/> </Link>
            </div>
            <div>
              <Link to={'/fun'}><img src={next_m}  alt="Next"/></Link>
            </div>
          </div>
            <Link to={`/`} className="d-block pt-lg-5 pt-3">
              <img src={chili} className="px-4"alt="go back" />
            </Link>
          </div>
          <div className="profile-content  d-flex flex-column ">
            <div className=" profilf-text d-flex align-items-center px-lg-0 px-4  pb-2">
              <div className="pt-lg-5">
                <p className="text-black-50">Web APP & Wechat mini program </p>
                <h3>SpareLeash</h3>
                <p>Spare Leash is an online platform connecting pet owners to applied pet sitters. No longer need to impose on your families and friends when you are going for vacations or simply not available to take care of your darling pets.
</p>
              </div>
            </div>
            <div className="profilf-display  d-flex justify-content-center align-items-center">
              <div id="carouselExampleFade" className="carousel slide carousel-fade position-relative" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={desktop_a} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={desktop_b}  className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={desktop_c}  className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={desktop_d}  className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={desktop_e}  className="d-block w-100" alt="..."/>
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
              <Link to={'/fun'}><img src={next} className="position-absolute next d-none d-lg-block" /></Link>
              <Link to={'/plantopia'}><img src={previous} className="position-absolute previous d-none d-lg-block" /></Link>
            </div>
          </div>
        </div>




      </div>
      )
  }
}

export default SpareLeash;


{/*
        <div className="profilf-m d-lg-none d-flex flex-column vh-100 vw-100">
          <div className="profile-nav  px-3">
          <Link to={`/`} className="d-block pt-5"> Home</Link></div>

          <div className="profilf-content d-flex justify-content-end align-items-start px-4 ">
            <div className="w-50">
              <p className="text-black-50">Wechat mini program</p>
              <h2>Spare Leash</h2>
              <p>Plant topia is a wechat mini program that isdesigned for people who has little knowledge as how to take care plant or</p>
            </div>
          </div>

          <div className="profilf-display-m w-100 d-flex justify-content-center align-items-center">
            <div id="carouselExampleFade" className="carousel slide carousel-fade w-75 position-relative" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={desktop_a} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={desktop_a}  className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={desktop_a}  className="d-block w-100" alt="..."/>
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
          </div>

        </div>*/}

        {/*    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={phone_a}className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={phone_b} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={phone_a} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>*/}

