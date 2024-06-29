import React from "react";
import VolunterCard from "./VolunterCard";

interface Volunteer {
  id: number;
  imgSrc: string;
  name: string;
  role: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

const volunteersData: Volunteer[] = [
    {
        id: 1, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Vinay Sharma", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 2, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Shivam Madhesiya", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 3, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Mohd Saif", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 4, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Mohtashim Ansari", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 5, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Nandan Mishra", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 6, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Mohd. Hassan", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 7, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Aftab Alam", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 8, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Vaibhav Sharma", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 9, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Abdul Kareem", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 10, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Vyom Srivastava", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 11, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Deepak Yadav", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 12, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Rudramani Singh", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 13, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Amit Kumar", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 14, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Manish Kumar Rao", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 15, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Anurag Sonkar", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 16, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Lakshmi Narayan Verma", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 17, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Akash Patel", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 18, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Swarnim Dixit", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 19, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Pranjal Sachan", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 20, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Pradumnya Yadav", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: 21, imgSrc: 'assets/img/volunteer/volunteer-1.png', name: "Ziya Firdous", role: "Volunteer",
        socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
  ];
interface VolunterProps {}

const Volunter: React.FC<VolunterProps> = () => {
  return (
    <section id="volunteer_area_main" className="section_padding ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="section_heading">
              <h3>Ready to help</h3>
              <h2>
                {" "}
                We have thousands of happy volunteer to{" "}
                <span className="color_big_heading">help</span> you
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {volunteersData.map((volunteer, index) => (
            <VolunterCard key={index} volunteer={volunteer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunter;
