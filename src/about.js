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
              <div className="intro-text" >
              <p>Hey, it's Kaki here. I'm Chinese and currently based in Shanghai.
              I was in marketing for a few years, transformed my career as a free-lance developer in 2019. Trained full-stack, I do have a little preference on frondend / passionate about colors/  design since I was a teenager. Feel free to check on a few of my projects here
              </p>
               <p>Oh , drag and drop 👇🏻 things that I appreciate in life. Cheers  </p>

              </div>
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

