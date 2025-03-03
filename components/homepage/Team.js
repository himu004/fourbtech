import Link from "next/link";
import React from "react";

export default function Team() {
  return (
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
                <img src="assets/images/team/team1.jpg" alt="Team Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="team-details">Raymond R. Jacobs</Link>
                </h5>
                <span className="designation">Ceo &amp; Founder</span>
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
                <img src="assets/images/team/team2.jpg" alt="Team Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="team-details">David F. Pelletier</Link>
                </h5>
                <span className="designation">Senior Consultant</span>
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
                <img src="assets/images/team/team3.jpg" alt="Team Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="team-details">James B. Montanez</Link>
                </h5>
                <span className="designation">Junior Marketer</span>
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
                <img src="assets/images/team/team4.jpg" alt="Team Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="team-details">Daniel R. Alexander</Link>
                </h5>
                <span className="designation">Hr &amp; Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
