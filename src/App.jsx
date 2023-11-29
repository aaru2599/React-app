// App.js
import React, { useState } from 'react';
import ProductForm from './ProductForrm/ProductForm';
import ProductList from './ProductForrm/ProductList';


function App() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <ProductForm onAddProduct={addProduct} onSuccess={handleFormSuccess} />
      ) : (
        <button onClick={() => setShowForm(true)}>Add Product</button>
      )}
      <ProductList products={products} />
    </div>
  );
}

export default App;
