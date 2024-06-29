import Image from "next/image";
import React from "react";
import uuid4 from "uuid4";

interface UpcomingEventProps {}
interface Event {
  id: string;
  image: string;
  tag: string;
  title: string;
  date: string;
  month: string;
  description: string;
  location: string;
  time: string;
  joinLink: string;
  url: string;
}
const eventsData: Event[] = [
  // {
  //   id: uuid4(),
  //   image: "assets/img/event/event-big.png",
  //   tag: "#FoodCamp",
  //   title: "Healthy food and nutritions awareness campaign December",
  //   date: "20",
  //   month: "Dec",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.",
  //   location: "Montgomery, Alabama.",
  //   time: "10 am",
  //   joinLink: "https://www.google.com",
  //   url: "",
  // },
  // {
  //   id: uuid4(),
  //   image: "assets/img/event/event-small.png",
  //   tag: "#FoodCamp",
  //   title: "Run for the senior citizens.",
  //   date: "20",
  //   month: "Dec",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.",
  //   location: "Montgomery, Alabama.",
  //   time: "10 am",
  //   joinLink: "https://www.google.com",
  //   url: "",
  // },
  // {
  //   id: uuid4(),
  //   image: "assets/img/event/event-small.png",
  //   tag: "#FoodCamp",
  //   title: "Run for the senior citizens.",
  //   date: "20",
  //   month: "Dec",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.",
  //   location: "Montgomery, Alabama.",
  //   time: "10 am",
  //   joinLink: "https://www.google.com",
  //   url: "",
  // },

  // {
  //   id: uuid4(),
  //   image: "assets/img/event/event-small.png",
  //   tag: "#FoodCamp",
  //   title: "Run for the senior citizens.",
  //   date: "20",
  //   month: "Dec",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.",
  //   location: "Montgomery, Alabama.",
  //   time: "10 am",
  //   joinLink: "https://www.google.com",
  //   url: "",
  // },
];

const UpcomingEvent: React.FC<UpcomingEventProps> = () => {
  return (
    <section id="upcoming_events" className="section_padding_bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="section_heading">
              <h3>Upcoming events</h3>
              <h2>
                Join our upcoming Event
                <span className="color_big_heading">events</span> for Contribute
                to society
              </h2>
            </div>
          </div>
        </div>
        {eventsData.length > 0 ? (
          <div className="row">
            <div className="col-lg-6">
              <div className="event_left_side_wrapper">
                <div className="event_big_img">
                  <a href="event-detail.html">
                    <img src="assets/img/event/event-big.png" alt="img" />
                  </a>
                </div>
                <div className="event_content_area big_content_padding">
                  <div className="event_tag_area">
                    <a href="event.html">{eventsData[0].tag}</a>
                  </div>
                  <div className="event_heading_area">
                    <div className="event_heading">
                      <h3>
                        <a href={eventsData[0].url}>{eventsData[0].title}</a>
                      </h3>
                    </div>
                    <div className="event_date">
                      <img src="assets/img/icon/date.png" alt="icon" />
                      <h6>{eventsData[0].date}</h6>
                    </div>
                  </div>
                  <div className="event_para">
                    <p>{eventsData[0].description}</p>
                  </div>
                  <div className="event_boxed_bottom_wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="event_bottom_boxed">
                          <div className="event_bottom_icon">
                            <img src="assets/img/icon/map.png" alt="icon" />
                          </div>
                          <div className="event_bottom_content">
                            <h5>Location:</h5>
                            <p>{eventsData[0].location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="event_bottom_boxed">
                          <div className="event_bottom_icon">
                            <img src="assets/img/icon/clock.png" alt="icon" />
                          </div>
                          <div className="event_bottom_content">
                            <h5>Starts at:</h5>
                            <p>{eventsData[0].time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event_button">
                    <a
                      href={eventsData[0].joinLink}
                      className="btn btn_md btn_theme"
                    >
                      Join event
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {eventsData.map((data, index) => {
                if (index > 0) {
                  return (
                    <div key={data.id} className="event_left_side_wrapper">
                      <div className="event_content_area small_content_padding">
                        <div className="event_tag_area">
                          <a href="#">{data.tag}</a>
                        </div>
                        <div className="event_heading_area">
                          <div className="event_heading">
                            <h3>
                              <a href={data.url}>{data.title}</a>
                            </h3>
                          </div>
                          <div className="event_date">
                            <img src={data.image} alt="icon" />
                            <h6>{data.date}</h6>
                          </div>
                        </div>
                        <div className="event_para">
                          <p>{data.description}</p>
                        </div>
                        <div className="event_boxed_bottom_wrapper">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="event_bottom_boxed">
                                <div className="event_bottom_icon">
                                  <img
                                    src="assets/img/icon/map.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="event_bottom_content">
                                  <h5>Location:</h5>
                                  <p>{data.location}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="event_bottom_boxed">
                                <div className="event_bottom_icon">
                                  <img
                                    src="assets/img/icon/clock.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="event_bottom_content">
                                  <h5>Starts at:</h5>
                                  <p>{data.time}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ) : (
          <h3>No Upcoming Event</h3>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvent;
