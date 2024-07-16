import Image from "next/image";
import React from "react";

interface TrendingProps {}
interface Cause {
  id: string;
  image: string;
  badge: string;
  goal: string;
  progress: number;
  title: string;
  description: string;
  date: string;
  by: string;
}
const causesData: Cause[] = [
  {
    id: "1",
    image: "assets/img/causes/1.jpg",
    badge: "Social Media",
    goal: "20,000",
    progress: 85,
    title: "Social Media Manager",
    description:
      "I will take your social media to new heights! Let's craft a strategy that gets your audience talking and your business shine online.",
    date: "20 June, 2024",
    by: "Tiffany Nyambura",
  },
  {
    id: "2",
    image: "assets/img/causes/2.jpeg",
    badge: "Digital Marketing",
    goal: "5,000",
    progress: 45,
    title: "Media Buying",
    description:
      " I WILL create and optimize paid marketing campaigns across digital channels for optimal results",
    date: "12 May, 2024",
    by: "Dennis Onyango",
  },
  {
    id: "3",
    image: "assets/img/causes/4.jpg",
    badge: "Logo Design",
    goal: "14,000",
    progress: 55,
    title: "I will design a logo. ",
    description:
      "I provide creative solutions for individuals and businesses seeking a distinctive brand identity. With personalized attention and collaboration, I craft logos that capture your unique vision. Whether you're a startup or need a logo refresh, I'm here to deliver memorable designs that make a lasting impact. brand identity branding corporate logo ",
    date: "20 June, 2024",
    by: "Brian Kemboi",
  },
];

const Trending: React.FC<TrendingProps> = () => {
  return (
      <>
        {/* Trending causes Area */}
        <section id="trending_causes" className="section_after section_padding bg-color">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                <div className="section_heading">
                  <h3>Featured Services</h3>
                  <h2>
                    Our Trending Services <span className="color_big_heading">Check</span> out
                  </h2>
                </div>
              </div>
            </div>
            <div className="row" id="counter">
              {causesData.map((cause) => (
                  <div key={cause.id} className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="case_boxed_wrapper">
                      <div className="causes_boxed_text">
                        <h3>
                          <a href="causes.html">{cause.title}</a>
                        </h3>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="h3-title">
                            Ksh: <strong><span className="color_big_heading">{cause.goal}</span></strong>
                          </h5>
                        </div>
                        <p>{cause.description}</p>
                        {/*<span className="causes_badge bg-theme badge-sm">{cause.badge}</span>*/}
                        <div className="causes_boxed_bottom_wrapper">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="casuses_bottom_boxed">
                                <div className="casuses_bottom_icon">
                                  <img src="assets/img/icon/cal.png" alt="icon"/>
                                </div>
                                <div className="casuses_bottom_content">
                                  <h5>Date:</h5>
                                  <p>{cause.date}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="casuses_bottom_boxed casuses_left_padding">
                                <div className="casuses_bottom_icon">
                                  <img src="assets/img/icon/user.png" alt="icon"/>
                                </div>
                                <div className="casuses_bottom_content">
                                  <h5>By:</h5>
                                  <p>{cause.by}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </>
  );
};

export default Trending;
