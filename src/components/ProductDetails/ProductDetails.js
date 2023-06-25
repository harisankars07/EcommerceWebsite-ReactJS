import React, { useEffect, useState } from "react";
import { getProductId } from "../ApiService/api";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({})

  useEffect(() => {
    const fetchProductdetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data);
    };
    fetchProductdetails();
  }, [id]);

  const handleBuyNow =()=>{
    window.confirm("The Product Is Currently Out Of Stock !")
  }

  return (
    <div className="product-details-container">
      <img src={productDetails.image} alt="Image" className="product-image" />

      <div className="product-info">
        <h2 className="product-title">{productDetails.title}</h2>

        <p className="product-description">{productDetails.description}</p>

        <p className="product-price">${productDetails.price}</p>

        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>

        <Link to="/">
          <button className="go-back-button">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
