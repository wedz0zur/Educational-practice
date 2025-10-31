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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleAddProductClick = () => {
    setModalOpen(true);
    closeMobileMenu();
  };

  return (
    <>
      <header>
        <img className="logo icon" src={logo} alt="logo" />
        
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={mobileMenuOpen ? 'active' : ''}>
          <a href="index.html" onClick={closeMobileMenu}>Home</a>
          <a href="#" onClick={closeMobileMenu}>Shop</a>
          <a href="#" onClick={closeMobileMenu}>About</a>
          <a href="#" onClick={closeMobileMenu}>Contact</a>
          <button className="add-btn" onClick={handleAddProductClick}>
            Добавить продукт
          </button>
        </nav>
        
        <div className="header-icons">
          <img src={profile} alt="Profile" className="icon" />
          <img src={search} alt="Search" className="icon" />
          <img src={heart} alt="Wishlist" className="icon" />
          <img src={basket} alt="Basket" className="icon" />
        </div>
      </header>
      
      {modalOpen && <AddProductModal closeModal={() => setModalOpen(false)} />}
    </>
  );
}

export default Header;