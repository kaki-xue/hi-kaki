import React, {Component} from 'react';
import cocktaila from '../assets/image/cocktail-ipad-a.png'
import cocktailb from '../assets/image/cocktail-ipad-b.png'
import cocktailc from '../assets/image/cocktail-ipad-c.png'
import {Link } from 'react-router-dom'
import home from '../assets/image/home.svg'
import next from '../assets/image/next.svg'
import previous from '../assets/image/previous.svg'
import next_m from '../assets/image/next-m.svg';
import pre_m from '../assets/image/pre-m.svg';

class Cocktail extends Component {
  render() {
    return (
      <div className="profile-c max-vw-100">

         <div className="d-flex flex-lg-row flex-column vh-100 vw-100 cocktail">
            <div className="profile-nav  px-lg-3 px-2 d-lg-block d-flex justify-content-between">
            <div className="d-flex w-50 pt-3 px-3 d-lg-none justify-content-between">
              <div>
                <Link to={'/fun'}><img src={pre_m} alt="Previous"/> </Link>
              </div>
              <div>
                <Link to={'/plantopia'}><img src={next_m}  alt="Next"/></Link>
              </div>
            </div>
              <Link to={`/`} className="d-block pt-lg-5 pt-3">
                <img src={home} className="px-4"alt="go back" />
              </Link>
            </div>

          <div className="profile-content d-flex justify-content-center align-items-start pt-lg-5 pt-md-5 mt-lg-4 mt-md-4 ">
            <div className="w-lg-75 w-md-75 w-100 px-4 mx-2">
              <p className="text-black-50">Web APP</p>
              <h3>Project Bar of Change</h3>
              <p className="mt-3">A web-app called Bar of Change that showcases ‘iching” inspired cocktails. On top of that , visitors can also create their own special mix to contribute to the cocktail recipe base.</p>
            </div>
          </div>

          <div className="profile-display-c w-100 d-flex justify-content-center  align-items-end pb-5 ">
            <div id="carouselExampleFade" className="carousel slide carousel-fade position-relative" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={cocktaila} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={cocktailb}  className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={cocktailc}  className="d-block w-100" alt="..."/>
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
        </div>
               <Link to={'/plantopia'}><img src={next} className="position-absolute next d-lg-block d-none" /></Link>
              <Link to={'/fun'}><img src={previous} className="position-absolute previous d-lg-block d-none" /></Link>

      </div>
      )
  }
}

export default Cocktail;

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

        //             <div className="d-lg-none d-flex flex-column vh-100 vw-100 cocktail_m">
        //   <div className="profile-nav  px-3">三</div>

        //   <div className="profile-content text-justify px-4 ">
        //     <div>
        //       <p className="text-black-50">Wechat mini program</p>
        //       <h2>Plantopia</h2>
        //       <p>Plant topia is a wechat mini program that isdesigned for people who has little knowledge as how to take care plant or</p>
        //     </div>
        //   </div>

        //   <div className="profile-display-f w-100 d-flex justify-content-center align-items-center">
        //     <div id="carouselExampleFade" className="carousel slide carousel-fade position-relative" data-ride="carousel">
        //       <div className="carousel-inner">
        //         <div className="carousel-item active">
        //           <img src={phone_a} className="d-block w-100" alt="..."/>
        //         </div>
        //         <div className="carousel-item">
        //           <img src={phone_b}  className="d-block w-100" alt="..."/>
        //         </div>
        //         <div className="carousel-item">
        //           <img src={phone_a}  className="d-block w-100" alt="..."/>
        //         </div>
        //       </div>
        //       <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Previous</span>
        //       </a>
        //       <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Next</span>
        //       </a>
        //     </div>
        //   </div>

        // </div>


