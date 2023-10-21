import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const APICallingWithAsync = () => {
    const [catogories, setCategories] = useState([null])
    const [products, setProducts] = useState([null])
    useEffect(() => {
        const loadApi = async () => {
            try {
                const categoriesData = await axios.get("https://fakestoreapi.com/products/categories")
                console.log(categoriesData);
                setCategories(categoriesData.data)

                const productData = await axios.get("https://fakestoreapi.com/products")
                console.log(productData);
                setProducts(productData.data)
            } catch (err) {

            }
        }
        loadApi()
    }, [])
    console.log(catogories, products);
    return (
        <div>
            <h1>Category load</h1>
            <div className="d-flex justify-content-between">
                <ul>
                    {
                        catogories.map((category) =>
                            <li key={category}>{category}</li>
                        )
                    }
                </ul>
                <ul>
                    {
                        products.map((product, ) =>
                            <li key={product.id}>
                                {product.id}
                                
                            </li>

                        )
                    }
                </ul>
            </div>

        </div>
    )
}
export default APICallingWithAsync