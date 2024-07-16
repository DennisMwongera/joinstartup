import React from "react";
import Image from "next/image";

interface AboutTopProps {}

const AboutTop: React.FC<AboutTopProps> = () => {
  return (
    <>
      {/* About Top Area */}
      <section id="about_top_area" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="about_top_boxed bg_one">
                <div className="about_top_boxed_icon">
                  <img src="assets/img/icon/book.png" alt="img" />
                </div>
                <div className="about_top_boxed_text">
                  <p>Mission</p>
                  <h3>Grow & Thrive in digital age</h3>
                  {/*<a href="marketplace.html">More details...</a>*/}
                </div>
                <div className="about_top_boxed_vector">
                  <img src="assets/img/icon/round.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="about_top_boxed bg_two">
                <div className="about_top_boxed_icon">
                  <img src="assets/img/icon/paint.png" alt="img" />
                </div>
                <div className="about_top_boxed_text">
                  <p>Vision</p>
                  <h3>Empower Small Businesses</h3>
                  {/*<a href="marketplace.html">More details...</a>*/}
                </div>
                <div className="about_top_boxed_vector">
                  <img src="assets/img/icon/round.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="about_top_boxed bg_three">
                <div className="about_top_boxed_icon">
                  <img src="assets/img/icon/heart.png" alt="img" />
                </div>
                <div className="about_top_boxed_text">
                  <p>Core Value</p>
                  <h3>Bespoke, Valuable &amp; Accountable </h3>
                  {/*<a href="marketplace.html">More details...</a>*/}
                </div>
                <div className="about_top_boxed_vector">
                  <img src="assets/img/icon/round.png" alt="img" />
                </div>
              </div>
            </div>
            {/*<div className="col-lg-3 col-md-6 col-sm-12 col-12">*/}
            {/*  <div className="about_top_boxed bg_four">*/}
            {/*    <div className="about_top_boxed_icon">*/}
            {/*      <img src="assets/img/icon/restaurant.png" alt="img" />*/}
            {/*    </div>*/}
            {/*    <div className="about_top_boxed_text">*/}
            {/*      <p>Donate for</p>*/}
            {/*      <h3>Hunger Removal</h3>*/}
            {/*      <a href="marketplace.html">More details...</a>*/}
            {/*    </div>*/}
            {/*    <div className="about_top_boxed_vector">*/}
            {/*      <img src="assets/img/icon/round.png" alt="img" />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTop;
