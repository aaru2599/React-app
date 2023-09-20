import { useState } from "react"
import "./1.Mouse.css"

const MouseEvent02 = () => {
    const [images] = useState([
        "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/e/g/-original-imagh7g8k7ttcdkc.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/w/k/h/-original-imagh2gwxu57j4fn.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/a/z/g/iphone-13-mlpg3hn-a-apple-original-imag6vpyxhzdccrc.jpeg?q=70",
    ])
    function handleMouseOver(e) {
        e.currentTarget.stop()

    }
    function handleMouseDown(e) {
        e.currentTarget.start();

    }
    return (
        <div className="container-fluid me ">
            <div className="mt-4">
                <marquee scrollamount="10" onMouseOver={handleMouseOver}  onMouseOut={handleMouseDown}>
                    {
                        images.map(image =>
                            <img src={image} key={image} className="me-2" width="100" height="100" />
                        )
                    }
                </marquee>
            </div>
        </div>
    )
}
export default MouseEvent02
