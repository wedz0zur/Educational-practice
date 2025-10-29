import React, { useState } from "react";
import { addProduct } from "../../store/product";
import "./AddProductModal.css";

export default function AddProductModal({ closeModal }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !image || !price || !description) return;

    addProduct({ title, image, price, description });
    closeModal();
    window.location.reload(); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Добавить продукт</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Название"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ссылка на изображение"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="number"
            placeholder="Цена"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <textarea
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit">Добавить</button>
          <button type="button" onClick={closeModal} className="close-btn">
            Закрыть
          </button>
        </form>
      </div>
    </div>
  );
}
