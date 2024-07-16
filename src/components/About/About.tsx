import { siteData } from "@/data";
import Image from "next/image";
import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      {/* About Area */}
      <section id="about_area" className="section_padding_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_area_img">
                <img src="https://phive.ivqonsanada.com/images/slide-2.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_area_main_text">
                <div className="about_area_heading">
                  <img src="assets/img/icon/about.png" alt="img" />
                  <h3>About Startup at Belva Digital</h3>
                </div>
                <div className="about_area_heading_two">
                  <h2>
                    Welcome to our digital marketplace where
                    <br />
                    small <span className="color_big_heading">businesses</span> <br />
                    can connect with
                    <span className="color_big_heading"> freelancers</span>
                    {/*<br /> offering a wide range of*/}
                    {/*<span className="color_big_heading">digital services</span>*/}
                    {/*<br />*/}
                    {/*Our platform is designed to create a seamless experience for both*/}
                    {/*<span className="color_big_heading">businesses & freelancers</span>*/}
                  </h2>
                  <h3>Connecting Businesses & Freelancers</h3>
                </div>
                <div className="about_area_para">

                  <p>
                    Our platform seamlessly links you with skilled freelancers,
                    meticulously vetted to provide exceptional digital services.
                    Elevate your endeavors by tapping into their expertise,
                    guiding you towards achieving your desired milestones and objectives.
                  </p>
                </div>
                <div className="about_vedio_area">
                  <a href={siteData.donationUrl} className="btn btn_theme btn_md">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
