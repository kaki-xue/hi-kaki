import React, {Component} from 'react';
import desktop_a from '../assets/image/desktop_a.png';



class Profilf extends Component {
  render() {
    return (
      <div className="min-vh-100 max-vw-100 ">
        <div className="profilf-m d-lg-none d-flex flex-column vh-100 vw-100">
          <div className="profile-nav  px-3">三</div>

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

        </div>

         <div className="d-lg-flex d-none vh-100 vw-100">
          <div className="profile-nav  px-3 ">三</div>
          <div className="profilf-cd d-flex flex-column justify-content-center vh-100 vw-100">
            <div className="w-75 profilf-text d-flex align-items-center">
              <div>
                <p className="text-black-50">Wechat mini program</p>
                <h3>SpareLeash</h3>
                <p>Spare Leash is a pet-sitting platform that connects pet owners to verified pet-sitters. Services include everything from dog walking, training, and dog boarding to cat sitting and even helping out with trips to the vet. </p>
              </div>
            </div>
            <div className="profilf-display vw-75 d-flex justify-content-center align-items-center">
              <div id="carouselExampleFade" className="carousel slide carousel-fade position-relative" data-ride="carousel">
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
          </div>
          </div>
      </div>
      )
  }
}

export default Profilf;

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

