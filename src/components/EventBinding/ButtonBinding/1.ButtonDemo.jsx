import React, { useState } from "react"
const BynDemo01 = () => {
    const [isfilter, setFilter] = useState("")
    const handleDoubleCllick = () => {
        if (isfilter === "grayscale(100%)") {
            setFilter("")
        }
        else {
            setFilter("grayscale(100%)");
        }

    }
    console.log(isfilter);
    return (
        <div className="container-fluid">
            <h2>DoubleClick</h2>
            <img onDoubleClick={handleDoubleCllick} style={{ filter: isfilter }} src="https://pixy.org/src/477/thumbs350/4774988.jpg"
                width={100}
                height={50}

            />

        </div>
    )
}
export default BynDemo01