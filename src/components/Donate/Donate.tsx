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
              <h3>We are here to Help People</h3>
              <h2>
                We are fundraising for the{" "}
                <span className="color_big_heading">people</span> who are
                fighting against time
              </h2>
              <a href={siteData.donationUrl} className="btn btn_md btn_theme">
                Donate now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
