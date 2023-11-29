// ProductForm.js
import React, { useState } from 'react';

function ProductForm({ onAddProduct, onSuccess }) {
  const [product, setProduct] = useState({ name: '', price: '', quantity: '' });
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = () => {
    onAddProduct(product);
    setProduct({ name: '', price: '', quantity: '' });
    setSuccess(true);
    onSuccess();
  };

  return (
    <div>
      {success ? (
        <div>
          <p>Product added successfully!</p>
        </div>
      ) : (
        <div>
          <h2>Add Product</h2>
          <form>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={product.name} onChange={handleInputChange} />
            </div>
            <div>
              <label>Price:</label>
              <input type="text" name="price" value={product.price} onChange={handleInputChange} />
            </div>
            <div>
              <label>Quantity:</label>
              <input type="text" name="quantity" value={product.quantity} onChange={handleInputChange} />
            </div>
            <button type="button" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProductForm;
