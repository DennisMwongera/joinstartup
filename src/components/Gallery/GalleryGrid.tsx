import React from "react";

interface GalleryGridProps {}
interface GalleryItem {
  imgSrc: string;
  title: string;
  overlayLink: string;
  overlayTitle: string;
}
const galleryItems: GalleryItem[] = [
  {
    imgSrc: "assets/img/gallery/gallery-grid-1.png",
    title: "FoodCamp",
    overlayLink: "assets/img/gallery/gallery-grid-1.png",
    overlayTitle: "FoodCamp",
  },
  // Add more gallery items as needed
];

const GalleryGrid: React.FC<GalleryGridProps> = () => {
  return (
    <section id="gallery_grid_area" className="section_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="section_heading">
              <h3>Gallery</h3>
              <h2>
                {" "}
                Explore our <span className="color_big_heading">
                  gallery
                </span>{" "}
                to know how we works
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row popup-gallery">
        {galleryItems.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="gallery_item">
              <img src={item.imgSrc} alt="img" />
              <div className="gallery_overlay">
                <a href={item.overlayLink} title={item.overlayTitle}>
                  <img src="assets/img/icon/arrow-round.png" alt="icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;
