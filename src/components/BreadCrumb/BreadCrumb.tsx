import React from "react";

interface BreadCrumbProps {
  name:string
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({name='string'}) => {
  return (
    <section id="common_banner_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="commn_banner_page">
              <h2>
                <span className="color_big_heading">{name}</span>
              </h2>
              <ul className="breadcrumb_wrapper">
                <li className="breadcrumb_item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb_item">
                  <img src="/assets/img/icon/arrow.png" alt="img" />
                </li>
                <li className="breadcrumb_item active">{name}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
