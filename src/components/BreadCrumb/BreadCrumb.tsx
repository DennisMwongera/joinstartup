"use client";
import { useParams } from "next/navigation";
import React from "react";

interface BreadCrumbProps {
  name?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ name }) => {
  const { slug } = useParams<{ slug: string }>();
  let display
  if (name) {
     display = name;
  } else {
     display = slug ? slug.toUpperCase(): ''
  }

  return (
    <section id="common_banner_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="commn_banner_page">
              <h2>
                <span className="color_big_heading">{display}</span>
              </h2>
              <ul className="breadcrumb_wrapper">
                <li className="breadcrumb_item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb_item">
                  <img src="/assets/img/icon/arrow.png" alt="img" />
                </li>
                <li className="breadcrumb_item active">{display}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
