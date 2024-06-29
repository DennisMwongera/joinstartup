import { siteData } from "@/data";
import React from "react";

interface ContactProps {}

const ContactMain: React.FC<ContactProps> = () => {
  return (
    <section id="contact_arae_main" className="section_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="section_heading">
              <h3>Contact with us</h3>
              <h2>
                Get in
                <span className="color_big_heading">touch</span>with us &amp;
                stay updates
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact_area_left">
              <div className="contact_left_item">
                <div className="contact_left_icon">
                  <img src="assets/img/icon/map_color.png" alt="icon" />
                </div>
                <div className="contact_left_text">
                  <h3>Address:</h3>
                  <p>
                   {siteData.address}
                  </p>
                </div>
              </div>
              <div className="contact_left_item">
                <div className="contact_left_icon">
                  <img src="assets/img/icon/email-color.png" alt="icon" />
                </div>
                <div className="contact_left_text">
                  <h3>Email:</h3>
                  <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
                 
                </div>
              </div>
              <div className="contact_left_item">
                <div className="contact_left_icon">
                  <img src="assets/img/icon/phon-color.png" alt="icon" />
                </div>
                <div className="contact_left_text">
                  <h3>Phone number:</h3>
                  <a href={`tel:${siteData.phone}`}>{siteData.phone}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact_form_Wrapper">
              <h3>Leave us a message</h3>
              <form action="#!" id="contact_form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your full name*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject**"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows={6}
                    placeholder="Message*"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="contact_submit_form">
                  <button className="btn btn_theme btn_md">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
