// ProductContext.js
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState([]);

  const addProduct = (product) => {
    setProductDetails([...productDetails, product]);
  };

  return (
    <ProductContext.Provider value={{ productDetails, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
