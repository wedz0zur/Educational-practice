// FuniroFurniture.tsx
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
import './FuniroFurniture.css';

export default function FuniroFurniture() {
    return (
        <div className="funiro-container">
            <p className="funiro-text">Share your setup with</p>
            <h2 className="funiro-title">#FuniroFurniture</h2>
            <div className="funiro-grid">
                <div className="left-column">
                    <div><img src={furnit1} alt="" />
                        <img src={furnit2} alt="" /></div>
                    <div style={{ marginTop: "20px" }}><img src={furnit3} alt="" />
                        <img src={furnit4} alt="" /></div>

                </div>
                <div className="center-image">
                    <img src={furnit5} alt="" />
                </div>
                <div className="right-column">
                <div><img src={furnit6} alt="" />
                        <img src={furnit7} alt="" /></div>
                    <div style={{ marginTop: "20px" }}><img src={furnit8} alt="" />
                        <img src={furnit9} alt="" /></div>
                </div>
            </div>
        </div>
    );
}