import Navbar from "@/components/Navbar/Navbar";
import { siteData } from "@/data";
import Image from "next/image";
import React from "react";


interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <>
      {/* Header Area */}
      <header className="main_header_arae">
        {/* Top Bar */}
        <div className="topbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-list">
                  <li>
                    <a href="#!">
                      <i className="fa fa-envelope" />
                      <span>{siteData.email}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa fa-phone" />
                      <span>{siteData.phone}</span>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#!">
                      <span>Faqs</span>
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-list-right">
                  <li>
                    <a href={siteData.social.facebook}>
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={siteData.social.twitter}>
                      <i className="fab fa-twitter-square" />
                    </a>
                  </li>
                  <li>
                    <a href={siteData.social.instagram}>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href={siteData.social.linkedin}>
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar Bar */}
        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <a href={"/"}>
                    <img src="/assets/img/logo.png"  alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Navbar />
          <div className="others-option-for-responsive">
            <div className="container">
              <div className="dot-menu">
                <div className="inner">
                  <div className="circle circle-one" />
                  <div className="circle circle-two" />
                  <div className="circle circle-three" />
                </div>
              </div>
              <div className="container">
                <div className="option-inner">
                  <div className="others-options d-flex align-items-center">
                    {/* <div className="option-item">
                      <a href="#" className="search-box">
                        <i className="fas fa-search" />
                      </a>
                    </div> */}
                    <div className="option-item">
                      <a
                        href={siteData.donationUrl}
                        className="btn  btn_navber"
                      >
                        Donate now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
