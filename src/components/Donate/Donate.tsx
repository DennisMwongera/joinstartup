import { siteData } from "@/data";
import React from "react";

interface DonateProps {
  donationLink:string
}

const Donate: React.FC<DonateProps> = ({donationLink}) => {
  return (
    <section id="donate_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="donate_text">
              <h3>Connecting Businesses & Freelancers</h3>
              <h2>
                Elevate your endeavors by tapping into their expertise{" "}
                <span className="color_big_heading">people </span>
                 guiding you towards achieving
              </h2>
              <a href={siteData.donationUrl} className="btn btn_md btn_theme">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
