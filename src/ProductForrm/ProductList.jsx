// ProductList.js
import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            Name: {product.name}, Price: {product.price}, Quantity: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
