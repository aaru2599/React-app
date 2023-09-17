import { useState } from "react"

export const State03 = () => {
    const [name, setName] = useState({
        FirstName: "Arvind",
        LastName: "Mandre"
    })
    const [image, setImage] = useState({
        ImgAlt: "img-alt",
        ImgSrc: "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNofGVufDB8fDB8fHww&w=1000&q=80",
            
        isBlackAndWhite:false,
        button1:false,
        button2:false,
    })
    function handleBtnClick() {
        setImage({
            ...image,
            button1:!image.button1,
    
        })
    }
    const ToggleImage=()=>{
        setImage({
           ...image,
            isBlackAndWhite:!image.isBlackAndWhite,
            button2:!image.button2,
            
        })
    }
    const imgStyle={
      width:"150px",
      filter:image.isBlackAndWhite?"grayscale(100%)":"none"
    }

    return (
        <div>
            <h1>Hello.! {name.FirstName} Welcome {name.LastName}</h1>
            <button className="btn btn-primary" onClick={handleBtnClick}>
               {image.button1?"RenderedImage":"RenderImage"}
            </button>
            <button onClick={ToggleImage} className="btn btn-secondary">{image.button2?"ButtonClicked":"Button"}</button>
           <div> <img src={image.ImgSrc} style={imgStyle} alt={image.ImgAlt} /></div>
        </div>
    )
}