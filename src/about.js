import React, { useEffect}from 'react';
// import React, {Component} from 'react';
import Gallery from './gallery'
import Aos from 'aos';
import 'aos/dist/aos.css';



const About = () => {
  useEffect(()=> {
    Aos.init({duration:2000});
  }, [])
   return (
      <div className="max-vw-100 " id="about" >
        <div className="about d-block  container">
          <div className="d-flex flex-column justify-content-center" data-aos="fade-up">
            <div className="px-lg-5 px-2 py-5 mt-5 " >
              <h3 >A Brief Intro</h3>
              <div className="" >I’m a China local currently living in Shanghai Love creating stuff. Programming is so far the best way I know how. Been longing for greener world, green is my favorite color. Blahblah</div>
            </div>
            <div className="w-100 pt-3 mx-0 d-flex justify-content-center" >
              <Gallery />
            </div>
          </div>
        </div>


      </div>
      )


}


export default About;

