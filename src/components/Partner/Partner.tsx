"use client";
import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "@/assets/img/partner/logo-1.png";

import dynamic from "next/dynamic";
import Image from "next/image";
var $ = require("jquery");

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
interface ParterProps {}

const options = {
  loop: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  smartSpeed: 1000,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 3,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 7,
    },
  },
};
const Partner: React.FC<ParterProps> = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
  });
  return (
    <section id="partner_area">
      <h2 className="d-none">Heading</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <OwlCarousel
              {...options}
              className="partner_slider_wrapper owl-theme owl-carousel"
            >
              <div className="partner_logo">
                <a href="#!">
                  <Image height={90} width={90} src="/assets/img/partner/1.jpg" alt="img" />
                </a>
              </div>
              <div className="partner_logo">
                <a href="#!">
                  <Image height={90} width={90} src="assets/img/partner/2.jpg" alt="img" />
                </a>
              </div>
              <div className="partner_logo">
                <a href="#!">
                  <Image height={90} width={90} src="assets/img/partner/3.jpg" alt="img" />
                </a>
              </div>
              <div className="partner_logo">
                <a href="#!">
                  <Image height={90} width={90} src="assets/img/partner/4.jpg" alt="img" />
                </a>
              </div>
              <div className="partner_logo">
                <a href="#!">
                  <Image height={90} width={90} src="assets/img/partner/5.png" alt="img" />
                </a>
              </div>
              <div className="partner_logo">
                <a href="#!">
                  <Image height={90} width={90} src="assets/img/partner/10.png" alt="img" />
                </a>
              </div>
              <div className="partner_logo">
                <a href="#!">
                  <Image height={90} width={90} src="assets/img/partner/sss.jpeg" alt="img" />
                </a>
              </div>
              <div className="partner_logo">
                <a href="#!">
                  <Image height={90} width={90} src="assets/img/partner/together.png" alt="img" />
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
