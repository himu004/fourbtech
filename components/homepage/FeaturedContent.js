import Link from "next/link";
import React from "react";

export default function FeaturedContent() {
  return (
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
                    Engagement Amplified Interactive Campaigns for Maximum Reach
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
  );
}
