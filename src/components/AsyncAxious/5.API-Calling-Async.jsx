import axios from "axios"
import {ClockLoader} from "react-spinners"
import { useEffect, useState } from "react"

const APICalling = () => {
    const [products, setProducts] = useState([])
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true)
                const productData = await axios.get("https://jsonplaceholder.typicode.com/posts/")
                console.log(productData);
                setProducts(productData.data)
                setLoading(false)
            } catch (err) {
                console.log(err);
            }
        }
        loadProducts()

    }, [])
    return (
        <div>
            <h2>Hello</h2>
          {
            loading?<ClockLoader className="ml-auto mr-auto" color="#36d7b7" />:(
                <ul>
                {
                 products.map((item)=>
                 <li key={item.id}>{item.id}</li>
                 )
                }
             </ul>
            )
          }

        </div>
    )

}
export default APICalling