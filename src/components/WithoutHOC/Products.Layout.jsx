import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ProductsLayout = () => {
    const [productList, setProductList] = useState([])
    const [isLoadingProduct, setIsLoadingProduct] = useState(true)
    useEffect(() => {
        (async () => {
            try {

                const productData=await axios.get("https://fakestoreapi.com/products")
                setProductList(productData.data)
                setIsLoadingProduct(false)
                console.log(productData);
            } catch (err) {
                console.log(err);
                setIsLoadingProduct(false)
            }
        })();
    }, [])
    return (
        <div>
          {
            isLoadingProduct?<h3>Product Loading...</h3>:productList.length>0?(
                <ul>
                {
                    productList.map((product)=>
                    <li key={product}>{product.title}</li>
                    )
                }
            </ul>
            ):<h3>No product Available</h3>
          }
        </div>
    )
}
export default ProductsLayout