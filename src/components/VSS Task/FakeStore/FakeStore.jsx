import axios from "axios"
import { useEffect, useState } from "react"
import Electronics from "./Electronics"

const FakeStore = () => {
    const [category, setCategory] = useState([])
    const fetchCategory = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/categories`)
        console.log(data)
        console.log(data.length);
        // console.log(product.length);
        setCategory(data)
        // console.log(product.length);
        // console.log("helo");

        // console.log();
    }
    fetchCategory()

    
    return (


        <div>

            <div className="d-flex justify-content-between">
                {category.map((items, index) =>
                    <div key={index}>
                        <Electronics  items={items}/>
                    </div>
                )
                }
               
            </div>
            <Electronics/>



        </div>
    )
}
export default FakeStore