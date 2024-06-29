import Image from "next/image";
import React from "react";

interface BlogThumbProps {}
interface Blog {
  id: string;
  image: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  author: string;
}
const blogsData: Blog[] = [
  {
    id: "1",
    image: "assets/img/news/1.jpeg",
    tag: "#Nutrition,#Awwareness",
    title: "Educating Women and Blanket Donation",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...",
    date: "4 FEB, 2021",
    author: "Admin",
  },
  {
    id: "2",
    image: "assets/img/news/2.jpeg",
    tag: "#Poverty #Medical",
    title: "Funraise for Treatment",
    description:
      "Shine Ngo Raised fund for the family affected by the ...",
    date: "1 JAN, 2021",
    author: "Admin",
  },
  {
    id: "3",
    image: "assets/img/news/3.jpeg",
    tag: "#Awwareness",
    title: "Police Joined the Journey With Shine",
    description:
      "A Awareness Program Conduted By Shine...",
    date: "30 Dec, 2020",
    author: "Admin",
  },
];
const BlogThumb: React.FC<BlogThumbProps> = () => {
  return (
    <section id="home_blog_area" className="section_after bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="section_heading">
              <h3>Our latest news</h3>
              <h2>
                Check all
                <span className="color_big_heading">our latest</span> news
                updates and announcements
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogsData.map((blog) => (
            <div key={blog.id} className="col-lg-4">
              <div className="blog_card_wrapper">
                <div className="blog_card_img">
                  <a href={`news-details.html?blogId=${blog.id}`}>
                    <img src={blog.image} alt="img" />
                  </a>
                </div>
                <div className="blog_card_text">
                  <div className="blog_card_tags">
                    <a href="news.html">{blog.tag}</a>
                  </div>
                  <div className="blog_card_heading">
                    <h3>
                      <a href={`news-details.html?blogId=${blog.id}`}>
                        {blog.title}
                      </a>
                    </h3>
                    <p>{blog.description}</p>
                  </div>
                  <div className="blog_boxed_bottom_wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="blog_bottom_boxed">
                          <div className="blog_bottom_icon">
                            <img src="assets/img/icon/cal.png" alt="icon" />
                          </div>
                          <div className="blog_bottom_content">
                            <h5>Date:</h5>
                            <p>{blog.date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="blog_bottom_boxed blog_left_padding">
                          <div className="blog_bottom_icon">
                            <img src="assets/img/icon/user.png" alt="icon" />
                          </div>
                          <div className="blog_bottom_content">
                            <h5>By:</h5>
                            <p>{blog.author}</p>
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

export default BlogThumb;
