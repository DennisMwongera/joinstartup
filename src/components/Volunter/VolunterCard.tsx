import React from "react";

interface VolunterCardProps {
  volunteer: any;
}

const VolunterCard: React.FC<VolunterCardProps> = ({ volunteer }) => {
  return (
    <div key={volunteer.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="volunteer_wrapper">
        <div className="volunteer_img">
          <img src={volunteer.imgSrc} alt="img" />
          <div className="volunteer_icon">
            <ul>
              <li>
                <a href={volunteer.socialLinks.facebook}>
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href={volunteer.socialLinks.twitter}>
                  <i className="fab fa-twitter-square" />
                </a>
              </li>
              <li>
                <a href={volunteer.socialLinks.instagram}>
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href={volunteer.socialLinks.linkedin}>
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="volunteer_text">
          <h3>
            <a href="#!">{volunteer.name}</a>
          </h3>
          <p>{volunteer.role}</p>
        </div>
      </div>
    </div>
  );
};

export default VolunterCard;
