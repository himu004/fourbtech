import React from "react";
import { TestimonialsSlider4 } from "../sliders/TestimonialSlider";

export default function Testimonial() {
  return (
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
  );
}
