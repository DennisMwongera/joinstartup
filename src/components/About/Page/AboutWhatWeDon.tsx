import React from "react";

interface AboutServiceProps {}

interface AboutServiceData {
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

const causesData: AboutServiceData[] = [
  {
    id: "1",
    image: "assets/img/causes/1.jpg",
    badge: "Social Media",
    goal: "20,000",
    progress: 85,
    title: "Social Media Manager",
    description:
        "I will take your social media to new heights!",
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
        " I will create and optimize paid marketing campaigns",
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
        "I provide creative solutions for individuals and businesses seeking a distinctive brand identity.",
    date: "20 June, 2024",
    by: "Brian Kemboi",
  },
  {
    id: "4",
    image: "assets/img/causes/1.jpg",
    badge: "video editing",
    goal: "40,000",
    progress: 85,
    title: "I will edit videos for your event or social media (youtube). ",
    description:
        "Storytelling in video editing is the ultimate key to crafting an indelible impact through the mesmerizing medium of video! ",
    date: "20 June, 2024",
    by: "Yannek",
  },
  {
    id: "5",
    image: "assets/img/causes/2.jpeg",
    badge: "Digital Marketing",
    goal: "5,000",
    progress: 45,
    title: "I will build a website. ",
    description:
        "This is going to be the website.",
    date: "12 May, 2024",
    by: "kaka",
  },
  {
    id: "6",
    image: "assets/img/causes/4.jpg",
    badge: "Logo Design",
    goal: "14,000",
    progress: 55,
    title: "I help businesses grow - awareness, users & revenues. ",
    description:
        "Put your effort and focus in your business and I will help you increase share of voice from customers. Paid ads digital marketing sms marketing",
    date: "20 June, 2024",
    by: "Brian Kemboi",
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
              <h3>Marketplace</h3>
              <h2>Find all the digital gigs </h2>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="service_three_heading_right">
              <p>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {causesData.map(cause => (
              <div key={cause.id} className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="case_boxed_wrapper" style={{ margin: '15px 0' }}>
                  <div className="causes_boxed_text">
                    <h3>
                      <a href="/gig/socialMediaManager">{cause.title}</a>
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

  );
};

export default AboutService;
