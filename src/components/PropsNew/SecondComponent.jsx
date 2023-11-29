// DisplayProduct.js
import React from 'react';
import { useProductContext } from './ProductContext';

function DisplayProduct() {
  const { productDetails } = useProductContext();

  return (
    <div>
      <h2>Display Product</h2>
      <h3>Product Details:</h3>
      <ul>
        {productDetails.map((product, index) => (
          <li key={index}>
            <strong>Name:</strong> {product.name}, <strong>Price:</strong> {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayProduct;
