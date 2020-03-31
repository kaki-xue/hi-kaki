import React, {Component} from 'react';

import plantopia_b from '../assets/image/card_plantopia_b.png';
import card from '../assets/image/work_card.png';


class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="d-lg-none max-vw-100 work d-flex flex-column justify-content-end align-items-end position-relative" id="work">
          <div className="work-container d-flex justify-content-around w-100 ">
            <div className=" work-card-a-m position-absolute"><img src={plantopia_b} className="w-100"alt=""/></div>
            <div className=" work-card-b-m position-absolute"><img src={plantopia_b} className="w-100"alt=""/></div>
          </div>
          <div className="work-container d-flex justify-content-around align-items-end w-100 ">
            <div className=" work-card-c-m position-absolute"><img src={plantopia_b} className="w-100"alt=""/></div>
            <div className=" work-card-d-m  position-absolute"><img src={plantopia_b} className="w-100"alt=""/></div>
          </div>

          <div className="position-absolute work-hm">Work</div>
        </div>

        <div className="d-lg-flex d-none h-100 work  flex-column justify-content-end align-items-end" id="work">
          <div className="work-container d-flex justify-content-around w-100 position-relative">
            <div className=" work-card-a position-absolute"><img src={card} className="w-100 "alt=""/></div>
            <div className=" work-card-b position-absolute"><img src={card} className="w-100"alt=""/></div>
          </div>
          <div className="work-container d-flex justify-content-around align-items-end w-100 position-relative">
            <div className=" work-card-c position-absolute"><img src={card} className="w-100"alt=""/></div>
            <div className=" work-card-d position-absolute"><img src={card} className="w-100"alt=""/></div>
          </div>
        </div>

      </div>
      )
  }
}

export default Work;
