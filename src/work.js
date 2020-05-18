import React, {useEffect} from 'react';

// import card from '../assets/image/work_card.png';
import {Link} from "react-router-dom"
import FunWork from './work_fun'
import PlantopiaWork from './work_plantopia'
import SpareleashWork from './work_spareleash'
import CocktailWork from './work_cocktail'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Work =() => {
  useEffect(()=> {
    Aos.init({duration:3000});
  }, [])

    return (
      <div className="work" id="work">



        <div className="pl-5 ml-5 d-lg-flex d-none h-100 justify-content-center align-items-center vw-100" id="work">
          <div className="h-100 w-100 container py-5">
            <div className="row h-75">
               <div className="cardy h-100 col-3 d-flex flex-column justify-content-center" data-aos="fade-up">
                 <Link to={'/plantopia'}>
                   <PlantopiaWork/>
                 </Link>
               </div>
               <div className="cardy h-100 col-3 d-flex flex-column justify-content-end" data-aos="fade-up">
                 <Link to={'/spareleash'}>
                   <SpareleashWork/>
                 </Link>
               </div>
               <div className="cardy h-100 col-3 d-flex flex-column justify-content-center" data-aos="fade-up">
                 <Link to={'/fun'}>
                   <CocktailWork/>
                 </Link>
               </div>
               <div className="cardy h-100 col-3 d-flex flex-column justify-content-end" data-aos="fade-up">
                 <Link to={'/cocktail'}>
                   <FunWork/>
                 </Link>
               </div>
            </div>
          </div>
        </div>

        <div className="d-md-flex d-none d-lg-none d-xl-none h-100 justify-content-center align-items-center vw-100" id="work">
          <div className="h-75 w-100 container py-5">
            <div className="row  h-50">
              <div className="col-6 d-flex justify-content-center align-items-center" data-aos="fade-right">
                <Link to={'/plantopia'}>
                  <PlantopiaWork/>
                </Link>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center" data-aos="fade-left">
                <Link to={'/spareleash'}>
                  <SpareleashWork/>
                </Link>
              </div>
            </div>
             <div className="row pt-5 h-50">
              <div className="col-6 d-flex justify-content-center  align-items-center" data-aos="fade-right">
                <Link to={'/cocktail'}>
                  <CocktailWork/>
                </Link>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center" data-aos="fade-left">
                <Link to={'/fun'}>
                  <FunWork/>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className="d-flex d-lg-none d-md-none d-xl-none h-100 justify-content-center align-items-center vw-100" id="work">
          <div className="h-75 pt-5 mt-5 w-100 container py-5">
           <div className="w-100 py-4 d-flex justify-content-center align-items-center" data-aos="zoom-in-up">
             <Link to={'/plantopia'}>
               <PlantopiaWork/>
             </Link>
           </div>
           <div className="w-100 py-4 d-flex justify-content-center align-items-center" data-aos="zoom-in-up">
             <Link to={'/spareleash'}>
               <SpareleashWork/>
             </Link>
           </div>
           <div className="w-100 py-4 d-flex justify-content-center align-items-center" data-aos="zoom-in-up">
             <Link to={'/cocktail'}>
               <CocktailWork/>
             </Link>
           </div>
           <div className="w-100 py-4 d-flex justify-content-center align-items-center" data-aos="zoom-in-up">
             <Link to={'/fun'}>
               <FunWork/>
             </Link>
           </div>
          </div>
        </div>

      </div>
      )

}

export default Work;

{/*                <img src={card} className="w-card  "alt=""/>
*/}

/*        <div className="d-lg-none max-vw-100 work d-flex flex-column justify-content-end align-items-end position-relative" id="work">
          <div className="work-container d-flex justify-content-around w-100 ">
            <div className=" work-card-a-m position-absolute"><img src={plantopia_b} className="w-100"alt=""/></div>
            <div className=" work-card-b-m position-absolute"><img src={plantopia_b} className="w-100"alt=""/></div>
          </div>
          <div className="work-container d-flex justify-content-around align-items-end w-100 ">
            <div className=" work-card-c-m position-absolute"><img src={plantopia_b} className="w-100"alt=""/></div>
            <div className=" work-card-d-m  position-absolute"><img src={plantopia_b} className="w-100"alt=""/></div>
          </div>

          <div className="position-absolute work-hm">Work</div>
        </div>*/
  /* <div className="d-lg-flex d-none h-100 work  flex-column justify-content-end align-items-end" id="work">
          <div className="work-container d-flex justify-content-around w-75 position-relative">
            <div className=" work-card-a position-absolute">
              <Link to={'/plantopia'}>
                <Cubes/>
              </Link>
            </div>
            <div className=" work-card-b position-absolute">
              <Link to={'/spareleash'}>
              <Cubes/>
              </Link>
            </div>
          </div>
          <div className="work-container d-flex justify-content-around align-items-end w-75 position-relative">
            <div className=" work-card-c position-absolute">
              <Link to={'/fun'}>
              <Cubes/>
              </Link>
            </div>
            <div className=" work-card-d position-absolute">
              <Link to={'/cocktail'}>
               <Cubes/>
              </Link>
            </div>
          </div>
        </div> */
