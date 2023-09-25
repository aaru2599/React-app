import React, { useState } from "react";
import "./ImageFilter.css";

export const ImageFilter = () => {
  const initialImages = Array(9).fill(
    "https://img.freepik.com/free-photo/closeup-shot-purple-flower_181624-25863.jpg?w=740&t=st=1695628328~exp=1695628928~hmac=fb67b26afbafd59e4443f96a05152ac15a2ecf6124346393be0d64d65b40b036"
  );

  const [images, setImage] = useState(initialImages);
  const [preview, setPreview] = useState(initialImages[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const imgFilters = [
    "grayscale(100%)",
    "blur(2px)",
    "brightness(150%)",
    "contrast(200%)",
    "sepia(100%)",
    "hue-rotate(90deg)",
    "invert(100%)",
    "saturate(200%)",
    "opacity(50%)",
  ];

  const initialFilterStyles = Array(9).fill({
    filter: imgFilters[0], // Apply the first filter to all images initially
  });

  const [imgStyles, setStyles] = useState(initialFilterStyles);

  function handleImagePreview(imageUrl, index) {
    setPreview(imageUrl);
    setSelectedImageIndex(index);
  }

  return (
    <div className="container-fluid row row-cols-2 p-4">
      <div className="row row-3 image-div">
        {images.map((image, index) => (
          <UpdatedImage
            key={index}
            src={image}
            style={index === selectedImageIndex ? imgStyles[index] : {}}
            onClick={() => handleImagePreview(image, index)}
          />
        ))}
      </div>
      <div>
        <img src={preview} style={imgStyles[selectedImageIndex]} alt="Preview" />
      </div>
    </div>
  );
};

function UpdatedImage(props) {
  return (
    <div>
      <img src={props.src} style={props.style} onClick={props.onClick} alt="Image" />
    </div>
  );
}

export default ImageFilter;
