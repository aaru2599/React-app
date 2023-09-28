// URL.createObjectURL(event.target.files[0])
import { useEffect, useRef, useState } from "react"
import "./ImageFilter.css"
import * as htmlToImage from "html-to-image";




const FilterChange02 = () => {
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
    // const [files,setFile]=useState()

    const handleImageChange = (e) => {
        // setFile(URL.createObjectURL(e.target.files[0]));
        const file = URL.createObjectURL(e.target.files[0]);
        console.log("file", file);
        setSelectedImage(file)
        setImage(file)

    }



    function handleImageFilter(e) {
        setFilteredImage({
            imageSrc: e.target.src,
            imageStyle: e.target.style.filter
        })

    }
    const domEl = useRef(null)
    const imageDownload = async () => {
        if (domEl.current) {

            const dataUrl = await htmlToImage.toPng(domEl.current);

            // download image
            const link = document.createElement('a');
            link.download = 'html-to-img.png';
            link.href = dataUrl;
            link.click();

        }
    }
    // console.log(props.filterPer);
    return (
        <div className="container-fluid row  p-4">
            <h1>Image Uploader</h1>
            {/* <input type="file" onChange={photoChanged} /> */}
            <input className="form-input" type="file" accept="image/*" onChange={handleImageChange}  data-bs-toggle="modal" data-bs-target="#exampleModal"/>

            ``
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog 	modal-fullscreen-xl-down">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container-fluid  d-flex justify-content-between">
                                <div className=" image-div ">
                                    {
                                        filters.map((filter, index) =>
                                            <img onClick={handleImageFilter} className="filterImage" key={index}
                                                src={image}
                                                style={{ filter: filter }} />
                                        )
                                    }
                                </div>
                                {selectedImage && (
                                    <div>
                                        <h2>Selected Image:</h2>
                                        <img src={selectedImage}
                                            style={{ filter: filterdImage.imageStyle }}
                                            ref={domEl} />
                                        <div className="d-flex justify-content-center mt-4 align-items-center">

                                        </div>

                                    </div>
                                )}

                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button className="btn btn-primary w-50 " >Download</button> */}
                            <button type="button" class="btn btn-primary" onClick={imageDownload}>Download</button>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FilterChange02


