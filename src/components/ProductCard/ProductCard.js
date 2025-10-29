import React from "react";
import "./ProductCard.css";

export default function ProductCard({ title, image, price, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price} ₽</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
}
