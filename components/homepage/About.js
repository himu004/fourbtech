import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section className="about-area rel z-1">
      <div className="container bordered-x pt-130 rpt-100 pb-100">
        <div className="row px-xl-5 justify-content-between align-items-center">
          <div className="col-xl-4 col-lg-5">
            <div className="about-circles rmb-55">
              <div
                className="circle"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Web Development
              </div>
              <div
                className="circle mx-auto bgc-black text-white"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Mobile Apps Development
              </div>
              <div
                className="circle ms-auto bgc-primary"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Digital Marketing
              </div>
            </div>
          </div>
          <div
            className="col-lg-7"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="about-content-four">
              <div className="section-title mb-40">
                <span className="subtitle mt-10 mb-15">About Agency</span>
                <h2>
                  Technology Transforming Ideas into Reality Empowering Brands
                  with Engaging <span>FourBtech</span>
                </h2>
              </div>
              <p>
                At our web design agency, we specialize in creating visually
                stunning and highly functional websites that help businesses
                stand out in the digital world. Our team of talented designers
                and developers are passionate about crafting
              </p>
              <ul className="list-style-one my-30">
                <li>Web Development</li>
                <li>Mobile Apps Development</li>
                <li>Digital Product Design</li>
                <li>SEO Optimization</li>
                <li>Digital Marketing</li>
                <li>Video Production & Motion Graphics</li>
              </ul>
              <Link
                href="/project-list"
                className="theme-btn style-two"
                data-hover="Explore Our Projects"
              >
                <span>Explore Our Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Video Area Start */}
      <div
        className="video-area bgc-lighter-green bgp-bottom rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/video-bg-dots.png)",
        }}
      >
        <div className="container container-1290">
          <div
            className="video-wrap rel"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/video/video-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=TfU0qjuZkJ4"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <span className="marquee-wrap style-two py-20 rpy-10 bgc-secondary">
          <span className="marquee-inner left">
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Video Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SEO Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SMM Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Digital Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Influencer Marketing
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Video Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SEO Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SMM Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Digital Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Influencer Marketing
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Video Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SEO Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SMM Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Digital Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Influencer Marketing
            </span>
          </span>
        </span>
      </div>
      {/* Video Area End */}
    </section>
  );
}
