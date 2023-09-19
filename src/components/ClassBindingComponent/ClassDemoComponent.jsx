import { useState } from "react"

const ClassDemoComponent = () => {
    const [cities] = useState(["BPL", "Channai", "HYD", "BLR", "IDR", "PUNE"]);
    const [btnClass, setBtnClass] = useState("bi bi-sort-alpha-down")
    const handleSortClick = (e) => {
        if (e.target.className == "bi bi-sort-alpha-down") {
            setBtnClass("bi bi-sort-alpha-up")
            cities.sort();
        }

        else {
            setBtnClass( "bi bi-sort-alpha-down")
            cities.sort().reverse()
            
        }
    }
    return (
        <div className="container-fluid mt-3">
            <h1 >Cities Name <button className="btn btn-success" onClick={handleSortClick}><span className={btnClass}></span></button></h1>
            <ol>
                {
                    cities.map(city =>
                        <li key={city}>{city}</li>
                    )
                }
            </ol>

        </div>
    )
}
export default ClassDemoComponent