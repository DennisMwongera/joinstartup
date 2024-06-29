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
                <img src="assets/img/common/about.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_area_main_text">
                <div className="about_area_heading">
                  <img src="assets/img/icon/about.png" alt="img" />
                  <h3>Welcome to Shine NGO</h3>
                </div>
                <div className="about_area_heading_two">
                  <h2>
                    In a world where you can be anything
                    <br />
                    Be <span className="color_big_heading">kind</span> <br />
                    Givers of{" "}
                    <span className="color_big_heading">good vibes</span>
                    <br /> Givers of{" "}
                    <span className="color_big_heading">Strength</span>
                    <br />
                    We aspire to be Givers of{" "}
                    <span className="color_big_heading">love</span>
                  </h2>
                  <h3>We are the one of the largest NGO in Gorakhpur, We Believe</h3>
                </div>
                <div className="about_area_para">

                  <p>
                    Every child must go to school in his/her appropriate age as
                    everyone has equal rights for education from birth. We,
                    SHINE Education and Welfare Society, provide financial,
                    moral support to poor children and encourage them to gain
                    knowledge by handling over textbooks, stationaries,
                    magzines, refreshments to attract them, etc.
                  </p>
                </div>
                <div className="about_vedio_area">
                  <a href={siteData.donationUrl} className="btn btn_theme btn_md">
                    Donate Now
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/@shinengo/videos"
                    className="vedio_btn popup-vimeo"
                  >
                    <i className="fa fa-play" />
                    How we work
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
