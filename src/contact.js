import React, {useEffect} from 'react';
import CardContact from './contactanime';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Text from './contact_text';
import girl from '../assets/image/contact_girl.svg'





const Contact = () => {
    useEffect(()=> {
    Aos.init({duration:2000});
  }, [])



    return (
      <div className="contact">
        <div className="d-none d-lg-block contact pt-5 position-relative" id="contact">
          <div data-aos= "fade-up" className="w-100 h-100 contact-image">
            <CardContact/>
          </div>
          <div data-aos= "zoom-in-up" className="position-absolute contact-me">
          Hey feel free to contact me via wechat or email, not a big social media fun , but I will get back to you !
          </div>
        </div>
        <div className="d-lg-none pt-5 d-flex flex-column vw-100 vh-100 justify-content-center align-items-center">
          <Text />
          <div className="pt-5 mt-5 d-flex align-items-center ">
            <div>
              <img src={girl}  alt=""/>
            </div>
            <div className="contact-kaki pl-4 ">
              <p> wechat: kakixue-li </p>
              <p> email: kaki.noodles@gmail.com </p>
            </div>
          </div>
        </div>
      </div>
      )

}

export default Contact;
