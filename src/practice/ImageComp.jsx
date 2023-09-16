import { useState } from "react"

const ImageComp = () => {
   const [image,setImage]=useState({
    imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGbzrhpTi4Q0o5o0JSRVDSZ6zifJth2yxXYg26zgW&s",
    imageAlt:"Image-alt",
    isBlackAndWhite:false,
    
        
   })
    
   const btnClick=(image)=>{

       setImage({...image,isBlackAndWhite:!image.isBlackAndWhite})
      

   }
   const imgStyle={
    filter:image.isBlackAndWhite? "grayscale(100%)":"none"
   }

    return(
<div>
    <button onClick={btnClick}>ToggleImage</button>
    <img style={imgStyle} width={250} height={200} src={image.imageSrc} alt={image.imageAlt} />
  </div>
        
    )
}
export default ImageComp