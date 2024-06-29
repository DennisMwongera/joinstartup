import React from "react";

interface ShareCauseProps {}

const ShareCause: React.FC<ShareCauseProps> = () => {
  return (
    <div className="share_causes_wrapper sidebar_boxed">
      <div className="sidebar_heading_main">
        <h3>Share causes</h3>
      </div>
      <div className="social_icon_sidebar">
        <ul>
          <li>
            <a href="#!">
              <img src="/assets/img/icon/facebook.png" alt="icon" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src="/assets/img/icon/instagram.png" alt="icon" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src="/assets/img/icon/twitter.png" alt="icon" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src="/assets/img/icon/linkedin.png" alt="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShareCause;
