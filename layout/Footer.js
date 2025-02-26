import Link from "next/link";
import { Fragment } from "react";

const FooterMenu = () => {
  return (
    <Fragment>
      <div
        className="container bordered-x pt-80 pb-20"
        style={{
          backgroundImage: "url(assets/images/background/footer-bg-dots.png)",
        }}
      >
        <div className="row justify-content-between">
          <div
            className="col-lg-4 col-sm-8"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-newsletter">
              <div className="footer-logo mb-20">
                <Link href="/">
                  <img src="assets/images/logos/logo.png" alt="Logo" />
                </Link>
              </div>
              <p>
                High-quality content the heart successful marketing strategy
                drives engage.
              </p>
              <form className="newsletter-form mt-25" action="#">
                <label htmlFor="news-email">
                  <i className="fas fa-envelope" />
                </label>
                <input
                  id="news-email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <button
                  type="submit"
                  className="theme-btn btn-small bgc-secondary hover-secondary"
                  data-hover="Subscribe"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
          <div
            className="col-lg-2 col-sm-4 col-6"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-links">
              <div className="footer-title">
                <h6>Features</h6>
              </div>
              <ul>
                <li>
                  <Link href="service-details">Page builder</Link>
                </li>
                <li>
                  <Link href="service-details">Theme options</Link>
                </li>
                <li>
                  <Link href="service-details">Modern builder</Link>
                </li>
                <li>
                  <Link href="service-details">Template library</Link>
                </li>
                <li>
                  <Link href="service-details">Support Team</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-2 col-sm-4 col-6"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-links">
              <div className="footer-title">
                <h6>Product</h6>
              </div>
              <ul>
                <li>
                  <Link href="about">About Us</Link>
                </li>
                <li>
                  <Link href="contact">Careers</Link>
                </li>
                <li>
                  <Link href="blog">News</Link>
                </li>
                <li>
                  <Link href="about">Media Kit</Link>
                </li>
                <li>
                  <Link href="contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-2 col-sm-4 col-6"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-links">
              <div className="footer-title">
                <h6>Company</h6>
              </div>
              <ul>
                <li>
                  <Link href="about">Overview</Link>
                </li>
                <li>
                  <Link href="services-two">Features</Link>
                </li>
                <li>
                  <Link href="services">Solutions</Link>
                </li>
                <li>
                  <Link href="about">Tutorials</Link>
                </li>
                <li>
                  <Link href="pricing">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-2 col-sm-4 col-6"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-contact">
              <div className="footer-title">
                <h6>Follow Us</h6>
              </div>
              <div className="social-style-one mt-15">
                <Link href="contact">
                  <i className="fab fa-facebook" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-twitter-square" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-youtube" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-pinterest" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-vimeo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container bordered-x bordered-top pt-30 pb-15">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright © <Link href="/">Ridda</Link>, all rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Refund</Link>
                </li>
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="faqs">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="far fa-arrow-up" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const Footer = () => {
  return (
    <footer className="main-footer bgc-black text-white rel z-1">
      <div className="footer-marquee pt-60 pb-75 rpy-90 rel">
        <div className="container blank-container bordered-x" />
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Get In Touch</span>
            <span className="marquee-item">_</span>
            <span className="marquee-item">Get In Touch</span>
            <span className="marquee-item">_</span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Get In Touch</span>
            <span className="marquee-item">_</span>
            <span className="marquee-item">Get In Touch</span>
            <span className="marquee-item">_</span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Get In Touch</span>
            <span className="marquee-item">_</span>
            <span className="marquee-item">Get In Touch</span>
            <span className="marquee-item">_</span>
          </span>
        </span>
      </div>
      <div className="container bordered-x pb-50">
        <div className="row justify-content-between">
          <div
            className="col-lg-4 col-sm-8"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-newsletter">
              <div className="footer-logo mb-20">
                <Link href="/">
                  <img src="assets/images/logos/logo.png" alt="Logo" />
                </Link>
              </div>
              <p>
                High-quality content the heart successful marketing strategy
                drives engage.
              </p>
              <form className="newsletter-form mt-25" action="#">
                <label htmlFor="news-email">
                  <i className="fas fa-envelope" />
                </label>
                <input
                  id="news-email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <button
                  type="submit"
                  className="theme-btn btn-small hover-primary"
                  data-hover="Subscribe"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row justify-content-between">
              <div
                className="col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-widget footer-text">
                  <div className="footer-title">
                    <h6>Location</h6>
                  </div>
                  <div className="text">
                    55 Main Street, 2nd block Malborne, Australia
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-widget footer-text">
                  <div className="footer-title">
                    <h6>Contact Us</h6>
                  </div>
                  <div className="text">
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                    <br />
                    <a href="callto:+000(123)8899">+000 (123) 88 99</a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-widget footer-contact">
                  <div className="footer-title">
                    <h6>Follow Us</h6>
                  </div>
                  <div className="social-style-two mt-15">
                    <Link href="contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-dribbble" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-behance" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container bordered-x bordered-top pt-25 pb-10">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright © <Link href="/">Ridda</Link>, all rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Refund</Link>
                </li>
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="faqs">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="far fa-arrow-up" />
          </button>
        </div>
      </div>
      <div className="footer-shapes">
        <div className="shape">
          <img src="assets/images/shapes/footer-shape.png" alt="Shape" />
        </div>
      </div>
    </footer>
  );
};


export default Footer;
