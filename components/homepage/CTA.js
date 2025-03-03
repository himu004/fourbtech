import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
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
  );
}
