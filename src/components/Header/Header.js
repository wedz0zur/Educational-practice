import React, { useState } from "react";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import search from "../../images/search.svg";
import heart from "../../images/heart.svg";
import basket from "../../images/basket.svg";
import AddProductModal from "../AddProductModal/AddProductModal";
import "./Header.css";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header>
        <img className="logo icon" src={logo} alt="logo" />
        <nav>
          <a href="index.html">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button onClick={() => setModalOpen(true)}>Добавить продукт</button>
        </nav>
        <div className="header-icons">
          <img src={profile} alt="" className="icon" />
          <img src={search} alt="" className="icon" />
          <img src={heart} alt="" className="icon" />
          <img src={basket} alt="" className="icon" />
        </div>
      </header>
      {modalOpen && <AddProductModal closeModal={() => setModalOpen(false)} />}
    </>
  );
}

export default Header;
