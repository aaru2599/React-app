// URL.createObjectURL(event.target.files[0])
import { useEffect, useState } from "react"
import "./ImageFilter.css"



const FilterChange = () => {
    return (
        <div>
            <FilteredImage />
        </div>
    )
}


export const FilteredImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const [image, setImage] = useState()
    const [filterdImage, setFilteredImage] = useState({
        imageSrc: `${selectedImage}`,
        imageStyle: ""
    })
    
    const [filters] = useState([

        "blur(4px)",
        "grayscale(100%)",
        "brightness(150%)",
        "contrast(200%)",
        "sepia(100%)",
        "hue-rotate(90deg)",
        "invert(100%)",
        "saturate(200%)",
        "opacity(50%)"

    ])

    const handleImageChange = (event) => {
        const file = URL.createObjectURL(event.target.files[0]);
        console.log("file",file);
        setSelectedImage(file)
        setImage(file)
    }



    function handleImageFilter(e) {
        setFilteredImage({
            imageSrc: e.target.src,
            imageStyle: e.target.style.filter
        })
    
    }
    // console.log(props.filterPer);
    return (
        <div className="container-fluid">
             <h1>Image Uploader</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}
            <div className="container-fluid  d-flex justify-content-between">
                <div className="image-div ">
                    {
                        filters.map((filter, index) =>
                            <img onClick={handleImageFilter} key={index}
                                src={image}
                                style={{ filter: filter }} />
                        )
                    }
                </div>
                <div className=" ">
                    <img src={filterdImage.imageSrc}
                    
                        style={{ filter: filterdImage.imageStyle }}
                        />
                    <div>
                        <a href={filterdImage.imageSrc}  download={filterdImage.imageSrc}>
                            <button className="btn btn-dark">Download</button>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default FilterChange


