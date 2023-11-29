// InputProduct.js
import React, { useState } from 'react';
import { useProductContext } from './ProductContext';

function InputProduct() {
  const { addProduct } = useProductContext();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = () => {
    if (productName && productPrice) {
      addProduct({ name: productName, price: productPrice });
      setProductName('');
      setProductPrice('');
    }
  };

  return (
    <div>
      <h2>Input Product</h2>
      <div>
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </div>
      <div>
        <label>Product Price:</label>
        <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputProduct;
