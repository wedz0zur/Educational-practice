import React from "react";
import furnit1 from "../../images/furnit1.svg";
import furnit2 from "../../images/furnit2.svg";
import furnit3 from "../../images/furnit3.svg";
import furnit4 from "../../images/furnit4.svg";
import furnit5 from "../../images/furnit5.svg";
import furnit6 from "../../images/furnit6.svg";
import furnit7 from "../../images/furnit7.svg";
import furnit8 from "../../images/furnit8.svg";
import furnit9 from "../../images/furnit9.svg";
import "./FuniroFurniture.css";

export default function FuniroFurniture() {
  return (
    <div className="funiro-container">
      <p className="funiro-text">Share your setup with</p>
      <h2 className="funiro-title">#FuniroFurniture</h2>
      <div className="funiro-grid">
        <div className="left-column">
          <div>
            <img src={furnit1} alt="Furniture design" />
            <img src={furnit2} alt="Furniture design" />
          </div>
          <div>
            <img src={furnit3} alt="Furniture design" />
            <img src={furnit4} alt="Furniture design" />
          </div>
        </div>
        <div className="center-image">
          <img src={furnit5} alt="Furniture design" />
        </div>
        <div className="right-column">
          <div>
            <img src={furnit6} alt="Furniture design" />
            <img src={furnit7} alt="Furniture design" />
          </div>
          <div>
            <img src={furnit8} alt="Furniture design" />
            <img src={furnit9} alt="Furniture design" />
          </div>
        </div>
      </div>
    </div>
  );
}
