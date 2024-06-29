import { siteData } from "@/data";
import { MenuItem, navMenu } from "@/data/menu";
import { renderMenuItems } from "@/util/renderMenu";
import Image from "next/image";
import React from "react";



interface NavbarProps {}

// const [menuData, setMenuData] = useState([]);

// useEffect(() => {
//   fetch('/path/to/menu.json')
//     .then(response => response.json())
//     .then(data => setMenuData(data.menu))
//     .catch(error => console.error('Error fetching menu data:', error));
// }, []);



const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <div className="main-navbar">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="index.html">
              <img src="/assets/img/logo.png" alt="logo" />
            </a>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">{renderMenuItems(navMenu.desktop)}</ul>
              <div className="others-options d-flex align-items-center">
                <div className="option-item">
                  <a href="#" className="search-box">
                    {" "}
                    <img src="assets/img/icon/search_icon.png" alt="icon" />
                  </a>
                </div>
                <div className="option-item">
                  <a href={siteData.donationUrl} className="btn btn_navber">
                    Donate now
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
