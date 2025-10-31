import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../store/product";
import "./AllProducts.css";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const productsData = await getProducts();
      setProducts(productsData || []);
    } catch (err) {
      setError("Failed to load products");
      console.error("Error loading products:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="all-products">
        <h1>Our Products</h1>
        <div className="loading-state">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="all-products">
        <h1>Our Products</h1>
        <div className="empty-state">
          <div className="empty-state-icon">⚠️</div>
          <h2 className="empty-state-title">Loading Error</h2>
          <p className="empty-state-description">
            We encountered an issue while loading the products. Please try
            again.
          </p>
          <div className="empty-state-actions">
            <button className="retry-button" onClick={loadProducts}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="all-products">
      <h1>Our Products</h1>

      {products.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📦</div>
          <h2 className="empty-state-title">No Products Available</h2>
          <p className="empty-state-description">
            We're currently updating our product catalog. Please check back soon
            for new arrivals.
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
}