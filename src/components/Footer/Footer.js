import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="div-footer-top">
        <div>
          <p className="funiro">Funiro.</p>
          <p className="text-gray">
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div>
          <p className="text-gray">Links</p>
          <a className="a">Home</a>
          <a className="a">Shop</a>
          <a className="a">About</a>
          <a className="a">Contact</a>
        </div>
        <div>
          <p className="text-gray">Help</p>
          <a className="a">Payment Options</a>
          <a className="a">Returns</a>
          <a className="a">Privacy Policies</a>
        </div>
        <div>
          <p className="text-gray newsletter">Newsletter</p>
          <div className="newsletter-input-container">
            <input type="email" placeholder="Enter Your Email Address"></input>
            <button className="newsletter-button">→</button>
          </div>
        </div>
      </div>
      <p className="last-text">2023 furino. All rights reverved</p>
    </footer>
  );
}
