import { useEffect, useState } from "react"

const SetInterval03 = () => {
    const [images, setImages] = useState([
        "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/e/g/-original-imagh7g8k7ttcdkc.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/w/k/h/-original-imagh2gwxu57j4fn.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/a/z/g/iphone-13-mlpg3hn-a-apple-original-imag6vpyxhzdccrc.jpeg?q=70",
    ])
    const [image,setImage]=useState("")
    var count = 0;
    const LoadImages = () => {
        count++     
        if(count==images.length){
            count=0;
        }else{
            
            setImage(images[count])
        }
    }
    useEffect(()=>{
        setInterval(LoadImages,2000)
    },[])
    return (
        <div className="container-fluid">
            <h3>Realme Image</h3>
            <img width="300" src={image} height="400" />
        </div>
    )
}
export default SetInterval03