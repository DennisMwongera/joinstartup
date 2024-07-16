import React from "react";
import Image from "next/image";

import image1 from "@/assets/img//banner/smiling-woman-looking-desktop.png";
// import image2 from "@/assets/img//banner/4321059.jpeg";
// import image3 from "@/assets/img//banner/7121375.jpeg";
import { getRandomData } from "@/util/randomimegs";

const data = {
  1: image1,
  // 2: image2,
  // 3: image3,
};
interface HomeBannerProps {}

const HomeBanner: React.FC<HomeBannerProps> = () => {
  return (
    <>
      <section id="home_one_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner_one_text">
                <h1>
                  <span>
                    <span className="color_big">STARTUP</span>
                  </span>
                </h1>
                <h3>Connecting Businesses & Freelancers</h3>
                <img className="slide-1__left-dashed moveInRightDash duration--2"
                     src="/images/left-dashed-desktop.svg" alt=""/>
                <p>
                  Our platform seamlessly links you with skilled freelancers,
                  meticulously vetted to provide exceptional digital services.
                  Elevate your endeavors by tapping into their expertise,
                  guiding you towards achieving your desired milestones and objectives.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner_one_img">
                <Image
                  height={619}
                  width={684}
                  src={getRandomData(data)}
                  alt="img"
                />
                <div className="banner_element">
                  {/* <img
                    src="assets/img/banner/element-1.png"
                    alt="icon"
                    className="element_1 shape-1"
                  />
                  <img
                    src="assets/img/banner/element-2.png"
                    alt="icon"
                    className="element_2 shape-2"
                  />
                  <img
                    src="assets/img/banner/element-3.png"
                    alt="icon"
                    className="element_3 shape-3"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
