import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
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
  );
}
