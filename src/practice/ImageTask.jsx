import { useState } from "react"

const ImageTask = () => {
    const [image, setImage] = useState({
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGbzrhpTi4Q0o5o0JSRVDSZ6zifJth2yxXYg26zgW&s",
        imageAlt: "image-alt",
        isBlackAndWhite: true,
        button:true

    })
    const btnClick = () => {
        setImage({
            ...image,
            isBlackAndWhite: ! image.isBlackAndWhite,
            button:!image.button

        })
        // console.log("btn clicked");
        // setImage((prevImage) => ({
        //     ...prevImage, 
        //     isBlackAndWhite: !prevImage.isBlackAndWhite
        // }

        // ))
        // console.log(prevImage.isBlackAndWhite);

    }
    const imgStyle = {
        filter: !image.isBlackAndWhite ? "grayscale(100%)" : "none",
        

    }
    const btnStyle={
        backgroundColor:image.button?"green":"red",
        color:image.button?"black":"white",
        border:"none",
    }
    return (
        <div>
            <button style={btnStyle} onClick={btnClick}>{image.button?"Button":"ButtonClicked"}</button>
            <hr />
            <img style={imgStyle} src={image.imageSrc} alt={image.imageAlt} />
        </div>
    )
}
export default ImageTask