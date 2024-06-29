import React from "react";

interface AboutPageMainProps {}

const AboutPageMain: React.FC<AboutPageMainProps> = () => {
  return (
    <>
      <section id="about_area_two" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_two_img">
                <img src="assets/img/about/7.jpeg" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_two_left_wrapper">
                <h3>Welcome to Shine NGO</h3>
                <h2>We are founded to empower the humanity</h2>
                <p>
                  Shine Educational and Welfare Society started as a camp meant
                  for encouraging education, providing financial support and
                  establishing a good society. The aim got streamlined to make
                  Education Hut centres all round the villages. Along with that
                  we do work for upliftment of women in all spheres and general
                  financial aid that we try to collect for someone in actual
                  need. Fortunately, there were many people like us who joined
                  us in the way and today we are a big family of 125 volunteers
                  all round the country.
                </p>
                <div className="about_two_list_wrapper">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Child Education
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Women Health
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Nature conservation
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Women Health
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Medical Assitance
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Blood Donation
                    </li>
                  </ul>
                </div>
                <div className="about_two_quote_wrapper">
                  <p>
                    Our mission is to create a world where every individual has
                    access to basic necessities and opportunities for a brighter
                    future. Together, we can make a difference, one step at a
                    time.
                  </p>
                  <h5>
                    Samsad Alam <span>(President and Founder)</span>
                  </h5>
                  <img src="assets/img/icon/quate.png" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPageMain;
