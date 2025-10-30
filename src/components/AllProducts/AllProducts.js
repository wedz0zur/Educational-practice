import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../store/product";
import "./AllProducts.css";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <div className="all-products">
      {products.length === 0 && <p>Продукты отсутствуют</p>}
      <h1>Our Products</h1>
      <div className="products">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
      </div>
      
    </div>
  );
}
