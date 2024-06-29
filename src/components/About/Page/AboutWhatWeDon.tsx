import React from "react";

interface AboutServiceProps {}

interface AboutServiceData {
  id: number;
  imgSrc: string;
  badge: string;
  title: string;
  description: string;
  goalAmount: number;
  currentAmount: number;
}

const causesData: AboutServiceData[] = [
  {
    id: 1,
    imgSrc: "assets/img/causes/causes-1.png",
    badge: "Food & Water",
    title: "Collect fund for drinking water & healthy food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    goalAmount: 10000,
    currentAmount: 8512, // Example: 85.12% of $10,000
  },
  {
    id: 2,
    imgSrc: "assets/img/causes/causes-2.png",
    badge: "Safe Food",
    title: "Mollit aute sint ad quis irure aute irure quis",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    goalAmount: 89000,
    currentAmount: 89000, // Example: 100% of $89,000
  },
  {
    id: 3,
    imgSrc: "assets/img/causes/causes-3.png",
    badge: "Green Earth",
    title: "Voluptate velit qui anim laboris deserunt dolo",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    goalAmount: 55000,
    currentAmount: 30165, // Example: 55.1555% of $55,000
  },
  {
    id: 4,
    imgSrc: "assets/img/causes/causes-4.png",
    badge: "Education",
    title: "Amet pariatur et grut nostrud aute cupidat",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    goalAmount: 35000,
    currentAmount: 35080, // Example: 35.0802% of $35,000
  },
];
// About -> Service
const AboutService: React.FC<AboutServiceProps> = () => {
  return (
    <section id="service_area_thre" className="section_padding bg-color">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="service_three_heading">
              <h3>What we do</h3>
              <h2>We help people in various ways that are needed</h2>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="service_three_heading_right">
              <p>
                Our warehousing services are known nationwide to be one of the most
                reliable, safe, and affordable because we take pride in delivering
                the best warehousing services.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {causesData.map(cause => (
            <div key={cause.id} className="col-lg-3 col-md-4 col-sm-12 col-12">
              <div className="case_boxed_wrapper causes_boxed_three">
                <div className="case_boxed_img">
                  <a href="causes.html">
                    <img src={cause.imgSrc} alt="img" />
                  </a>
                  <span className="causes_badge bg-theme">{cause.badge}</span>
                </div>
                <div className="causes_boxed_text">
                  <div className="causes_boxed_text_left">
                    <h3>
                      <a href="causes.html">{cause.title}</a>
                    </h3>
                    <p>{cause.description}</p>
                  </div>
                  <div className="class-full causes_pro_bar progress_bar">
                    <div className="class-full-bar-box">
                      <h3 className="h3-title">
                        Goal: <span>${cause.goalAmount}</span>
                      </h3>
                      <div className="class-full-bar-percent">
                        <h2>
                          <span className="counting-data">{((cause.currentAmount / cause.goalAmount) * 100).toFixed(2)}</span>
                          <span>%</span>
                        </h2>
                      </div>
                      <div className="skill-bar class-bar" data-width={`${((cause.currentAmount / cause.goalAmount) * 100).toFixed(2)}%`}>
                        <div className="skill-bar-inner class-bar-in" style={{ width: `${((cause.currentAmount / cause.goalAmount) * 100).toFixed(2)}%`, overflow: 'hidden' }} />
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
  
  );
};

export default AboutService;
