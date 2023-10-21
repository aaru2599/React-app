import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingWrapper from './LoadingWrapper'

export const ProductLayoutWithHOC = () => {
    const [productList, setProductList] = useState([])
    const [isLoadingProduct, setIsLoadingProduct] = useState(true)
    useEffect(() => {
        (async () => {
            try {

                const productData = await axios.get("https://fakestoreapi.com/products")
                setProductList(productData.data)
                setIsLoadingProduct(false)
                console.log("productData", productData.data);
            } catch (err) {
                console.log(err);
                setIsLoadingProduct(false)
            }
        })();
    }, [])
    return (
        <LoadingWrapper
            isLoading={isLoadingProduct}
            message={"no products Available"}
            data={productList}
        >
            <h2>Products Details</h2>
            <ul>
                {
                    productList.map((product) =>
                        <li key={product}>{product.title}</li>
                    )
                }
            </ul>

        </LoadingWrapper>
    )
}
export default ProductLayoutWithHOC