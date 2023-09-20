import { useState } from "react"
import "./1.Mouse.css"

const MouseEvent01 = () => {
    const [images] = useState([
        "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/e/g/-original-imagh7g8k7ttcdkc.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/w/k/h/-original-imagh2gwxu57j4fn.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/a/z/g/iphone-13-mlpg3hn-a-apple-original-imag6vpyxhzdccrc.jpeg?q=70",
    ])
    const [preview,setPreview]=useState("https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/e/g/-original-imagh7g8k7ttcdkc.jpeg?q=70")
    const handleMouseOver=(e)=>{
        setPreview(e.target.src)
    }
    return (
        <div className="container-fluid">

            <section className="row mt-3">
                <nav className="col-2 ">
                    {
                        images.map(image =>
                            <div className="mb-2 p-1 border  border-3 border-primary" style={{ width: "60px" }} key={image}>
                                <img src={image} onMouseOver={handleMouseOver} width={50} height={50} />
                            </div>
                        )
                    }
                </nav>
                <main className="col-10">
                    <img src={preview}   width="250" height="300" />
                </main>
            </section>
        </div>
    )
}
export default MouseEvent01