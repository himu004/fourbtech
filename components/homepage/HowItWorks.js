import React from "react";

export default function HowItWorks() {
  return (
    <section className="working-process-area bgc-black text-white rel z-1">
      <div className="container bordered-x pt-130 rpt-100 pb-80 rpb-50">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-11">
            <div
              className="section-title mb-50 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mt-10 mb-15">How IT Works</span>
              <h2>Step by Step Working Process</h2>
            </div>
          </div>
        </div>
        <div className="row gap-50 justify-content-center rel">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="work-process-item"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/work-process/work-process1.jpg"
                  alt="Work Process"
                />
              </div>
              <div className="circle" />
              <div className="content">
                <h5>
                  Discovery and
                  <br /> Strategy
                </h5>
                <p>
                  We begin by understanding your brand, goals, and target
                  audience competitive
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="work-process-item"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="content">
                <h5>
                  Design and
                  <br /> Prototyping
                </h5>
                <p>
                  We begin by understanding your brand, goals, and target
                  audience competitive
                </p>
              </div>
              <div className="circle" />
              <div className="image">
                <img
                  src="assets/images/work-process/work-process2.jpg"
                  alt="Work Process"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="work-process-item"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/work-process/work-process3.jpg"
                  alt="Work Process"
                />
              </div>
              <div className="circle" />
              <div className="content">
                <h5>
                  Development
                  <br /> and Testing
                </h5>
                <p>
                  We begin by understanding your brand, goals, and target
                  audience competitive
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="work-process-item"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="content">
                <h5>
                  Launch and
                  <br /> Support
                </h5>
                <p>
                  We begin by understanding your brand, goals, and target
                  audience competitive
                </p>
              </div>
              <div className="circle" />
              <div className="image">
                <img
                  src="assets/images/work-process/work-process4.jpg"
                  alt="Work Process"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="work-process-line">
              <img
                src="assets/images/work-process/work-step-line.png"
                alt="Line"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="work-process-shapes" />
    </section>
  );
}
