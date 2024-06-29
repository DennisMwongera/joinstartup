import React from "react";
import ShareCause from "../ShareCause/ShareCause";
import { causeDetailData } from "@/data/cause";
import { siteData } from "@/data";

interface CauseDetailProps {
  slug: string;
}



const CauseDetail: React.FC<CauseDetailProps> = ({ slug }) => {
    const educationCause = causeDetailData[slug];
  return (
    <section id="trending_causes_main" className="section_padding">
      <div className="container">
        <div className="row" id="counter">
          <div className="col-lg-8">
            <div className="details_wrapper_area">
              <div className="details_big_img">
                <img
                  src={educationCause.mainImageSrc}
                  alt={educationCause.mainImageAlt}
                />
                <span className="causes_badge bg-yellow">
                  {educationCause.badgeText}
                </span>
              </div>
              <div className="details_skill_area">
                <div className="class-full causes_pro_bar_flex progress_bar">
                  <div className="class-full-bar-box">
                    <h3 className="h3-title">
                      Goal: <span>{educationCause.goalAmount}</span>
                    </h3>
                    <div className="class-full-bar-percent">
                      <h2>
                        <span
                          className="counting-data"
                          data-count={educationCause.progressPercentage}
                        >
                          {educationCause.progressPercentage}
                        </span>
                        <span>%</span>
                      </h2>
                    </div>
                    <div
                      className="skill-bar class-bar"
                      data-width={`${educationCause.progressPercentage}%`}
                    >
                      <div className="skill-bar-inner class-bar-in"></div>
                    </div>
                  </div>
                  <div className="details_top_btn">
                    <a
                      href={siteData.donationUrl}
                      className="btn btn_md btn_theme"
                    >
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
              <div className="details_text_wrapper">
                {educationCause.detail.map((data: { title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description1: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                  <>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <p>{data.description1}</p>
                  </>
                ))}

                <div className="row">
                  {educationCause.smallImages.map((image: string | undefined, index: React.Key | null | undefined) => (
                    <div
                      key={index}
                      className="col-lg-4 col-md-4 col-sm-6 col-12"
                    >
                      <div className="details_small_img">
                        <img src={image} alt="img" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* <p>
                  Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                  phaedrum. There are many variations of passages of Lorem Ipsum
                  available, but the majority have alteration in some injected
                  or words which don't look even slightly believable.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar_first">
              {/* Project Causes */}
              <div className="project_organizer_wrapper sidebar_boxed">
                <div className="project_organizer_img">
                  <img
                    src="/assets/img/team/1.jpeg"
                    alt="img"
                  />
                </div>
                <div className="project_organizer_text">
                  <h5>Project organizer:</h5>
                  <h3>{educationCause.organizer.name}</h3>
                  <p>{educationCause.organizer.role}</p>
                  <ul>
                    <li>
                      <img src="/assets/img/icon/tag.png" alt="icon" /> Category:{" "}
                      <span>{educationCause.organizer.category}</span>
                    </li>
                    <li>
                      <img src="/assets/img/icon/map.png" alt="icon" /> Location:{" "}
                      <span>{educationCause.organizer.location}</span>
                    </li>
                    <li>
                      <img src="/assets/img/icon/cal.png" alt="icon" /> Date:{" "}
                      <span>{educationCause.organizer.date}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <>
                <div className="project_recentdonet_wrapper sidebar_boxed">
                  <div className="sidebar_heading_main">
                    <h3>Top donations</h3>
                  </div>

                  {educationCause.topDonater.map((data: { name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; amount: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                    <div className="recent_donet_item">
                      <div className="recent_donet_img">
                        <a href="#">
                          <img
                            src="assets/img/sidebar/rec-donet-2.png"
                            alt="img"
                          />
                        </a>
                      </div>
                      <div className="recent_donet_text">
                        <div className="sidebar_inner_heading">
                          <h4>
                            <a href="#">{data.name}</a>
                          </h4>
                          <h5>{data.amount}</h5>
                          <p>Business man</p>
                          <h6>2 hours ago</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Recent Causes */}
              </>

              {/* Project Causes */}
              <div className="project_organizer_wrapper sidebar_boxed">
                <div className="project_organizer_img">
                  <img src="assets/img/causes/causes-sidebar.png" alt="img" />
                </div>
              </div>
              {/* share Causes */}
              <ShareCause />
            </div>
            {/* <div className="download_pdf_area">
              <div className="pdf_download_left">
                <img src="/assets/img/icon/pdf.png" alt="icon" />
                <h4>Children education manual .pdf</h4>
              </div>
              <div className="pdf_download_right">
                <a href="!#" className="btn btn_md btn_theme">
                  Download now
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CauseDetail;
