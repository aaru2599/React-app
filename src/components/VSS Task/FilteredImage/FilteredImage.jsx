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

    const [image, setImage] = useState("https://img.freepik.com/free-photo/closeup-shot-purple-flower_181624-25863.jpg?w=740&t=st=1695628328~exp=1695628928~hmac=fb67b26afbafd59e4443f96a05152ac15a2ecf6124346393be0d64d65b40b036")
    const [filterdImage, setFilteredImage] = useState({
        imageSrc: "https://img.freepik.com/free-photo/closeup-shot-purple-flower_181624-25863.jpg?w=740&t=st=1695628328~exp=1695628928~hmac=fb67b26afbafd59e4443f96a05152ac15a2ecf6124346393be0d64d65b40b036",
        imageStyle: ""
    })
    
    const [filters, serFilters] = useState([

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
    const [selectedImage, setSelectedImage] = useState(null);

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
        set
    }
    // console.log(props.filterPer);
    return (
        <div className="container-fluid row  p-4">
             <h1>Image Uploader</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}
            <div className="container-fluid  d-flex justify-content-between">
                <div className="row row-3 image-div ">
                    {/* <img className="row " src={image} style={{ filter: "blur(4px)" }} />
                    <img className="row " src={image} style={{ filter: "grayscale(100%)" }} />
                    <img className="row " src={image} style={{ filter: "brightness(150%)" }} />
                    <img className="row " src={image} style={{ filter: "contrast(200%)" }} />
                    <img className="row " src={image} style={{ filter: "sepia(100%)" }} />
                    <img className="row " src={image} style={{ filter: "hue-rotate(90deg)" }} />
                    <img className="row " src={image} style={{ filter: "invert(100%)" }} />
                    <img className="row " src={image} style={{ filter: "saturate(200%)" }} />
                    <img className="row " src={image} style={{ filter: "opacity(50%)" }} /> */}
                    {
                        filters.map((filter, index) =>
                            <img onClick={handleImageFilter} key={index}
                                src={image}
                                style={{ filter: filter }} />
                        )
                    }
                </div>
                <div className="row ">
                    <img src={filterdImage.imageSrc}
                        style={{ filter: filterdImage.imageStyle }}
                        width={500} />
                    <div>
                        <a href={filterdImage.imageSrc} download={filterdImage.imageSrc}>
                            <button className="btn btn-dark">Download</button>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default FilterChange


