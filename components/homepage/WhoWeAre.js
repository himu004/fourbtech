import Link from "next/link";
import React from "react";

export default function WhoWeAre() {
  return (
    <section className="about-us-area bgc-black text-white">
      <div className="container bordered-x py-130 rpy-100">
        <div className="row gap-90 justify-content-between align-items-end">
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="about-content ms-xl-5 rmb-55">
              <div className="section-title mb-30">
                <span className="subtitle mt-10 mb-15">Who We Are</span>
                <h2>About Our FourBtech Agency</h2>
              </div>
              <p>
                At FourBtech , we're passionate about helping businesses succeed
                in the digital world. With years of experience and a dedication
                to innovation, we've built a reputation for delivering
                exceptional results
              </p>
              <Link href="about" className="read-more mt-10">
                Continue Reading <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="about-logo-part text-center me-xl-5">
              <img
                src="assets/images/background/about-logo-bg-shape.png"
                alt="Shape"
              />
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo-two-white.png"
                    alt="Logo"
                    data-aos="zoom-in"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    className="rounded"
                    style={{ width: "100px" }}
                  />
                </Link>
              </div>
              <div className="icon one p-5">
                <img src="assets/images/about/author1.jpg" alt="Author" />
              </div>
              <div className="icon two p-15 text-white bgc-primary">
                <i className="flaticon-megaphone" />
              </div>
              <div className="icon three p-15 bgc-secondary">
                <i className="flaticon-trophy" />
              </div>
              <div className="icon four">
                <img src="assets/images/about/author2.jpg" alt="Author" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
