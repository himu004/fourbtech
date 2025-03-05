import Blog from "@/components/Blog";
import CaseStudies from "@/components/CaseStudies";
import CounterItems from "@/components/CounterItems";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Services from "@/components/Services";
import ClientSlider from "@/components/sliders/ClientSlider";
import {
  TestimonialSlider1,
  TestimonialsSlider4,
} from "@/components/sliders/TestimonialSlider";
import RiddaLayout from "@/layout/FourBtechLayout";
import Link from "next/link";
import FourBTechLayout from "./layout";

const page = () => {
  return (
    <RiddaLayout>
      {/* Hero Area Start */}
      <section className="hero-area-four bgc-black text-white rel z-2">
        <div className="container px-xxl-0 bordered-x pt-180 rpt-90">
          <div className="row pt-50">
            <div className="col-xl-10">
              <div
                className="hero-content-four"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>Elevate your Business With Us</h1>
                <p>
                  Web & Mobile App's are a critical aspect of creating an
                  effective online presence for any business or individual. A
                  well-designed website or not only reflects a brand's identity
                  but also enhances user experience, ensuring visitors can
                  easily
                </p>
                <Link
                  href="/project-grid"
                  className="theme-btn mt-30 rmt-15 mb-65 rmb-30"
                >
                  <span>Explore Our Projects</span>
                </Link>
                <h5>Trusted Clients</h5>
                <div className="trusted-clients mt-25">
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={50}
                    src="assets/images/hero/author1.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    src="assets/images/hero/author2.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={150}
                    src="assets/images/hero/author3.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={200}
                    src="assets/images/hero/author4.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={250}
                    src="assets/images/hero/author5.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={300}
                    src="assets/images/hero/author6.jpg"
                    alt="Author"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-area-shapes">
          <div className="shape">
            <img src="assets/images/shapes/hero-shape.png" alt="Shape" />
          </div>
          <div className="hero-image">
            <img src="assets/images/hero/hero-four.jpg" alt />
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Counter Area start */}
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
      {/* Counter Area end */}
      {/* About Area start */}
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
      {/* About Area end */}
      {/* Services Area Start */}
      <Services />
      {/* Services Area End */}
      {/* Working Process Area Start */}
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
      {/* Working Process Area End */}
      <section className="featured-area bgc-black text-white">
        <div className="container bordered-x bordered-bottom py-130 rpy-100">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title mb-50 text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mt-10 mb-15">Featured Content</span>
                <h2>Explore Our Featured Work</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div
                className="feature-item"
                data-aos="flip-down"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/featuers/featuer1.jpg" alt="Featue" />
                </div>
                <div className="content">
                  <Link href="services" className="category">
                    Marketing
                  </Link>
                  <h5>
                    <Link href="service-details">
                      Engagement Amplified Interactive Campaigns for Maximum
                      Reach
                    </Link>
                  </h5>
                  <Link
                    href="service-details"
                    className="theme-btn btn-small style-three"
                    data-hover="Learn More"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="feature-item"
                data-aos="flip-down"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img src="assets/images/featuers/featuer2.jpg" alt="Featue" />
                </div>
                <div className="content">
                  <Link href="services" className="category">
                    Influence
                  </Link>
                  <h5>
                    <Link href="service-details">
                      Impact Leveraging Social Media for Brand Growth
                    </Link>
                  </h5>
                  <Link
                    href="service-details"
                    className="theme-btn btn-small style-three"
                    data-hover="Learn More"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="feature-item"
                data-aos="flip-down"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/featuers/featuer3.jpg" alt="Featue" />
                </div>
                <div className="content">
                  <Link href="services" className="category">
                    Content
                  </Link>
                  <h5>
                    <Link href="service-details">
                      Revolution Creating Viral Moments Social Platforms Content
                      Revolution
                    </Link>
                  </h5>
                  <Link
                    href="service-details"
                    className="theme-btn btn-small style-three"
                    data-hover="Learn More"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="feature-item"
                data-aos="flip-down"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img src="assets/images/featuers/featuer4.jpg" alt="Featue" />
                </div>
                <div className="content">
                  <Link href="services" className="category">
                    Analytics
                  </Link>
                  <h5>
                    <Link href="service-details">
                      Analytics-Driven Success Optimizing Campaigns for Maximum
                      ROI
                    </Link>
                  </h5>
                  <Link
                    href="service-details"
                    className="theme-btn btn-small style-three"
                    data-hover="Learn More"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="more-featured text-center"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link
              href="project-grid"
              className="theme-btn style-two hover-secondary mt-20"
              data-hover="Explore Projects"
            >
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Featured Area End */}
      {/* About Us Area start */}
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
                  At FourBtech , we're passionate about helping businesses
                  succeed in the digital world. With years of experience and a
                  dedication to innovation, we've built a reputation for
                  delivering exceptional results
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
      {/* About Us Area end */}
      {/* Team Area start */}
      <section className="team-area bgc-black text-white">
        <div
          className="container bordered-x pb-130 rpb-100 px-sm-0 bgp-bottom"
          style={{
            backgroundImage: "url(assets/images/background/footer-bg-dots.png)",
          }}
        >
          <div className="row no-gap justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="team-item">
                <div className="image">
                  <img 
                  height={200} width={200}
                  src="assets/images/team/kazi.jpg" 
                  alt="Kazi Rfiqul Islam"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="team-details">Kazi Rafiqual Islam</Link>
                  </h5>
                  <span className="designation">Co-Founder &amp; Chairman</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="team-item">
                <div className="image">
                  <img height={200} width={200} src="assets/images/team/himu.jpeg" alt="Himu Chowdhury" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="team-details">Himu Chowdhury</Link>
                  </h5>
                  <span className="designation">Co-Founder &amp; CEO</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="team-item">
                <div className="image">
                  <img height={200} width={200} src="assets/images/team/team3.jpg" alt="Junaid Ahmed  (Zama)" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="team-details">Junaid Ahmed (Zama)</Link>
                  </h5>
                  <span className="designation">Software Engineer</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="team-item">
                <div className="image">
                  <img height={200} width={200} src="assets/images/team/team4.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="team-details">Mohammad Titon</Link>
                  </h5>
                  <span className="designation">Digital Marketing Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area start */}
      <section className="cta-area bg-primary text-white pt-15 d-flex text-center align-items-center justify-content-center flex-wrap">
        <h6 className="mx-3 mb-15">
          Need more help to grow your business and marketing strategy
        </h6>
        <Link
          href="contact"
          className="theme-btn btn-extra-small bgc-secondary mb-15 mx-3"
          data-hover="Get Started"
        >
          <span>Get Started</span>
        </Link>
      </section>
      {/* CTA Area end */}
      {/* Case Studies Area start */}
      <CaseStudies />
      {/* Case Studies Area end */}
      {/* Testimonials Area Start */}
      <section className="testimonials-three-area text-center py-100 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 order-xl-1">
              <div
                className="testimonials-three-wrap rmb-35"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-50">
                  <span className="subtitle color-primary mt-10 mb-15">
                    Testimonials
                  </span>
                  <h2>What Our Clients Say</h2>
                </div>
                <TestimonialsSlider4 />
              </div>
            </div>
            <div className="col-xl-3 col-6 order-xl-0">
              <div
                className="testi-small-images mt-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img1.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img2.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img3.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img4.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img5.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img6.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img7.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img8.jpg"
                    alt="Testimonials"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-6 order-xl-2">
              <div
                className="testi-small-images mt-20"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img11.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img12.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img13.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img14.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img15.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img16.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img17.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img18.jpg"
                    alt="Testimonials"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* Headline Area Start */}
      <div className="headline-area rel z-1">
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
      {/* Headline Area End */}
      {/* Blog Area start */}
      <Blog />
      {/* Blog Area end */}
      {/* FAQ Area Start */}
      <Faq />
      {/* FAQ Area End */}
      {/* Contact area start */}
      <section className="contact-area pb-100 py-50">
        <div className="container container-1290">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div
                className="contact-info-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Ready To Take Your Business to the Next Level?</h2>
                  <p>
                    Contact us today to schedule a consultation or learn more
                    about our services
                  </p>
                </div>
                <div className="contact-info-two-item">
                  <div className="icon">
                    <i className="flaticon-world-map" />
                  </div>
                  <div className="text">
                    Main Location
                    <span className="h6">
                      252-262 Romford Road, E7 9HZ, London, UK
                    </span>
                  </div>
                </div>
                <div className="contact-info-two-item">
                  <div className="icon">
                    <i className="flaticon-email" />
                  </div>
                  <div className="text">
                    Email Address
                    <span className="h6">
                      <a href="mailto:info@fourbtech.com">info@fourbtech.com</a>
                    </span>
                  </div>
                </div>
                <div className="contact-info-two-item">
                  <div className="icon">
                    <i className="flaticon-call" />
                  </div>
                  <div className="text">
                    Need Helps
                    <span className="h6">
                      <a href="callto:+447424438741">+447424438741</a>
                    </span>
                  </div>
                </div>
                <hr className="my-35" />
                <div className="social-style-two mt-15">
                  <h6>Follow Us</h6>
                  <Link href="https://www.facebook.com/fourbtech.ltd">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/fourbtech">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                className="contact-form style-two z-1 rel"
                name="contactForm"
                action="#"
                method="post"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Get In Touch</h3>
                <p>Contact us today to schedule consultation to expert team</p>
                <div className="row mt-30">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        defaultValue
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone_number"
                        className="form-control"
                        placeholder="Phone No"
                        defaultValue
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        defaultValue
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Write Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group mb-0">
                      <ul className="radio-filter mb-25">
                        <li>
                          <input
                            className="form-check-input"
                            type="radio"
                            defaultChecked
                            name="ByActivities"
                            id="activity1"
                          />
                          <label htmlFor="activity1">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </li>
                      </ul>
                      <button
                        type="submit"
                        className="theme-btn bgc-secondary"
                        data-hover="Send Us  Message"
                      >
                        <span>Send Us Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact area end */}
    </RiddaLayout>
  );
};
export default page;
