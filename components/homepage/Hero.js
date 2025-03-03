import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
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
                but also enhances user experience, ensuring visitors can easily
              </p>
              <Link
                href="/contact"
                className="theme-btn mt-30 rmt-15 mb-65 rmb-30"
              >
                <span>Contact Us</span>
              </Link>
              <h5>Trusted Clients</h5>
              <div className="trusted-clients mt-25">
                <Image
                  height={100}
                  width={100}
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={50}
                  src="/assets/images/hero/author1.jpg"
                  alt="Author"
                />
                <Image
                  height={100}
                  width={100}
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={100}
                  src="/assets/images/hero/author2.jpg"
                  alt="Author"
                />
                <Image
                  height={100}
                  width={100}
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={150}
                  src="/assets/images/hero/author3.jpg"
                  alt="Author"
                />
                <Image
                  height={100}
                  width={100}
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={200}
                  src="/assets/images/hero/author4.jpg"
                  alt="Author"
                />
                <Image
                  height={100}
                  width={100}
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={250}
                  src="/assets/images/hero/author5.jpg"
                  alt="Author"
                />
                <Image
                  height={100}
                  width={100}
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={300}
                  src="/assets/images/hero/author6.jpg"
                  alt="Author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-area-shapes">
        <div className="shape">
          <img src="/assets/images/shapes/hero-shape.png" alt="Shape" />
        </div>
        <div className="hero-image">
          <img src="/assets/images/hero/hero-four.jpg" alt />
        </div>
      </div>
    </section>
  );
}
