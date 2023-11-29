import React, { useState } from 'react';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
setSelectedImage(file)

    
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <input type={file} accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
