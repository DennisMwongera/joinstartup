import { siteData } from "@/data";
import Image from "next/image";
import React from "react";

interface FooterProps {
  title: string;
  description: string;
}

const Footer: React.FC<FooterProps> = ({ title, description }) => {
  return (
    <>
      {/* Footer Area */}
      <footer id="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="footer_area_about">
                <img src="/assets/img/logo.png" alt="img" />
                <p>
                {siteData.desc}
                </p>
                <h6>
                  <strong>Address:</strong> {siteData.address}
                </h6>
                <h6>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${siteData.phone}`}>{siteData.phone}</a>
                </h6>
                <h6>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
                </h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="footer_navitem_ara">
                <h3>Quick links</h3>
                <div className="nav_item_footer">
                  <ul>
                    <li>
                      <a href="about">About us</a>
                    </li>
                    <li>
                      <a href="cause">Causes</a>
                    </li>
                    <li>
                      <a href="media">Media</a>
                    </li>
                    
                    <li>
                      <a href="join">Join</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="footer_navitem_ara">
                <h3>Support</h3>
                <div className="nav_item_footer">
                  <ul>
                    <li>
                      <a href="faqs.html">Help &amp; FAQ</a>
                    </li>
                    <li>
                      <a href="causes.html">Causes</a>
                    </li>
                    <li>
                      <a href="events.html">Events</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                    <li>
                      <a href="terms-service.html">Terms of service</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="footer_navitem_ara">
                <h3>Latest tweets</h3>
                {/* <div className="footer_twitter_area">
                  <a href="#!" className="footer_twit_title">
                    <i className="fab fa-twitter" /> #digitalmarketing
                  </a>
                  <p>
                    s
                  </p>
                  <a href="#!" className="footer_twit_two">
                    twitter.com/i/#puredrinkingwater
                  </a>
                  <h6>December 13, 2021 04:20 PM</h6>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright Area */}
      <div className="copyright_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="co-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright_left">
                <p>Copyright © 2022 All Rights Reserved by Sudhakar<a href="techzylabs.com">And Team</a>  </p>
              </div>
            </div>
            <div className="co-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright_right">
                <ul>
                  <li>
                    <a href="#!">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-twitter-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
