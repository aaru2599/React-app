import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log("Params : ", params);

  useEffect(() => {
    console.log("Product Details Mounted");
  }, []);

  return (
    <div>
      <h1>My Product Details: {params.productId}</h1>
      <div>{params.productTitle}</div>
      <div>
        {params.productDesc}
      </div>
      <img src={params.productImage} alt="Product Image" />
    </div>
  );
};

export default ProductDetails;