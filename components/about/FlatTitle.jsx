"use client"
import React from "react";

export default function FlatTitle() {
  return (
    <div className="flat-title-page shop wg-banner-2" style={{marginBottom: "5rem"}}>
      <div className="item1 block-blur-1"></div>
      <div className="item2 block-blur-2"></div>
      <div className="item3 block-blur-3"></div>
      <div className="item4 block-blur-4"></div>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading">Creative Innovation Hub</div>
            <p className="subtitle text-center mb-4" style={{color: "white"}}>
              Pioneering new frontiers in digital art and creative expression
            </p>
            <div className="achievement-highlights text-center mt-4" style={{color: "#09b6a2", fontSize: "1.5rem"}}>
              <span className="highlight-item">10,000+ Unique Creations</span>
              <span className="separator mx-3">,</span>
              <span className="highlight-item">Advanced Studio</span>
              <span className="separator mx-3">,</span>
              <span className="highlight-item">Digital Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}