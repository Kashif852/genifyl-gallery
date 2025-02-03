import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the default carousel CSS

const imageUrls = [
  "/assets/images/home-page/roadmap/1.png",
  "/assets/images/home-page/roadmap/2.png",
  "/assets/images/home-page/roadmap/3.png",
  "/assets/images/home-page/roadmap/4.png",
  "/assets/images/home-page/roadmap/5.png",
];

const ImageCarousel = () => {
  const onChange = (index) => {
    console.log("Slide changed to:", index);
  };

  const onClickItem = (index) => {
    console.log("Clicked item index:", index);
  };

  const onClickThumb = (index) => {
    console.log("Clicked thumbnail index:", index);
  };

  return (
    <Carousel
      showArrows={true}
      showStatus={false} // Remove status text (e.g., "1/4")
      showIndicators={false} // Remove dots
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      thumbWidth={100} // Adjust thumbnail size if needed
      renderThumbs={() =>
        imageUrls.map((url, index) => (
          <div key={index} style={{ width: "100%", height: "auto"}}>
            <img
              src={url}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: "100px", // Set thumbnail width
                height: "80px", // Set thumbnail height
                objectFit: "cover",
                borderRadius: "5px", // Optional: Add rounded corners
              }}
            />
          </div>
        ))
      }
      
    >
      {imageUrls.map((url, index) => (
        <div key={index} style={{background: "#e8e8e8"}}>
          <img
            src={url}
            alt={`Slide ${index + 1}`}
            style={{
              width: "60%", // Ensure responsiveness
              height: "auto", // Adjust height for proportions
              objectFit: "cover",
              borderRadius: "10px", // Optional: Add rounded corners
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
