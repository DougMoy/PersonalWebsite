import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PhotoGallery.css";

const PhotoGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className="photo-gallery">
      <div className="image-container">
        <div
          className="image-content"
          style={{ backgroundImage: `url(${currentImage.url})` }}
        />
      </div>
      <p className="caption">{currentImage.caption}</p>
      <div className="navigation-arrows">
        <button onClick={goToPrevious} className="arrow-button">
          {"<"} {/* Left arrow */}
        </button>
        <button onClick={goToNext} className="arrow-button">
          {">"} {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PhotoGallery;
