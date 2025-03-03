import React from "react";
import CounterItems from "../CounterItems";

export default function Counter() {
  return (
    <div className="counter-area bgc-black pt-120 rpt-100 rel z-1">
      <div className="row gap-80 align-items-center">
        <div
          className="col-xxl-5"
          data-aos="fade-right"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="counter-left-image">
            <img src="assets/images/counter/counter.jpg" alt="Counter" />
          </div>
        </div>
        <div className="col-xxl-7">
          <CounterItems />
        </div>
      </div>
      <div className="container text-white blank-container bordered-x" />
      <div className="counter-shapes">
        <div className="shape">
          <img src="assets/images/shapes/counter.png" alt="Shape" />
        </div>
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Web Design Agency</span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Web Design Agency</span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Web Design Agency</span>
          </span>
        </span>
      </div>
    </div>
  );
}
