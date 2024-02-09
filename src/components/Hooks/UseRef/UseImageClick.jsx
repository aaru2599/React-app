import React, { useState } from 'react'
import { useRef } from 'react'

const UseImageClick = () => {
    const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg")
    const [isClicked, setIsClicked] = useState(false);
    const refElem = useRef("");
    const btnClick = () => {
        // console.log("btn clicked");
        if (isClicked) {
            refElem.current.style.filter = ""
            setIsClicked(false)
        }
        else {
            refElem.current.style.filter = "grayscale(100%)"
            setIsClicked(true)
        }
    }
    return (
        <div>
            <img src={image} ref={refElem} width={500} onDoubleClick={btnClick} height={400} alt="" />

        </div>
    )
}

export default UseImageClick