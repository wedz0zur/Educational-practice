import React, { useState, useEffect } from "react";
import { addProduct } from "../../store/product";
import "./AddProductModal.css";

export default function AddProductModal({ closeModal }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !image || !price || !description) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    addProduct({ title, image, price, description });
    closeModal();
    setTimeout(() => window.location.reload(), 100); 
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeModal]);

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h2>Добавить продукт</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Название продукта"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            autoFocus
          />
          <input
            type="url"
            placeholder="Ссылка на изображение"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Цена"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
            step="0.01"
          />
          <textarea
            placeholder="Описание продукта"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button type="submit">Добавить продукт</button>
          <button type="button" onClick={closeModal} className="close-btn">
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
}