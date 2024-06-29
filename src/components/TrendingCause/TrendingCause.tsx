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
    badge: "Health/Sanitation",
    goal: "50,000",
    progress: 85,
    title: "Khyal (Every Month )",
    description:
      "We organised the second event of Khyaaal by distributing sanitary pads among women and felicitating old aged as well as widowed women with blankets",
    date: "20 June, 2024",
    by: "TECH_TEAM",
  },
  {
    id: "2",
    image: "assets/img/causes/2.jpeg",
    badge: "Education",
    goal: "45,000",
    progress: 45,
    title: "Education Hut",
    description:
      " Eduaction hut school teaches class 1-3 kids of the village where they are provided with books, bags, sweaters etc.",
    date: "20 June, 2024",
    by: "TECH_TEAM",
  },
  {
    id: "3",
    image: "assets/img/causes/4.jpg",
    badge: "Nature",
    goal: "14,000",
    progress: 55,
    title: "Plantation Drive (Complete Year)",
    description:
      "There is no need to explain why we all must try to save environment.The easiest way out there is only through community participation",
    date: "20 June, 2024",
    by: "TECH_TEAM",
  },
];

const Trending: React.FC<TrendingProps> = () => {
  return (
    <>
      {/* Trending causes Area */}
      <section
        id="trending_causes"
        className="section_after section_padding bg-color"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
              <div className="section_heading">
                <h3>What We Do</h3>
                <h2>
                  {" "}
                  We are for the people{" "}
                  <span className="color_big_heading">need</span> help
                </h2>
              </div>
            </div>
          </div>
          <div className="row" id="counter">
            {causesData.map((cause) => (
              <div
                key={cause.id}
                className="col-lg-4 col-md-12 col-sm-12 col-12"
              >
                <div className="case_boxed_wrapper">
                  <div className="case_boxed_img">
                    <a href="causes.html">
                      <img src={cause.image} alt="img" />
                    </a>
                    <span className="causes_badge bg-theme">{cause.badge}</span>
                  </div>
                  <div className="causes_boxed_text">
                    <div className="class-full causes_pro_bar progress_bar">
                      <div className="class-full-bar-box">
                        <h3 className="h3-title">
                          Goal: <span>{cause.goal}</span>
                        </h3>
                        <div className="class-full-bar-percent">
                          <h2>
                            <span
                              className="counting-data"
                              data-count={cause.progress}
                            >
                              0
                            </span>
                            <span>%</span>
                          </h2>
                        </div>
                        <div
                          className="skill-bar class-bar"
                          data-width={`${cause.progress}%`}
                        >
                          <div className="skill-bar-inner class-bar-in" />
                        </div>
                      </div>
                    </div>
                    <h3>
                      <a href="causes.html">{cause.title}</a>
                    </h3>
                    <p>{cause.description}</p>
                    <div className="causes_boxed_bottom_wrapper">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <div className="casuses_bottom_boxed">
                            <div className="casuses_bottom_icon">
                              <img src="assets/img/icon/cal.png" alt="icon" />
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
                              <img src="assets/img/icon/user.png" alt="icon" />
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
