"use client"
import React from "react";
import Link from "next/link";

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
            <div className="heading">Our Artistic Journey</div>
            <p className="subtitle text-center mb-4" style={{color: "white"}}>
              A team of 40+ dedicated artists creating masterpieces for clients worldwide
            </p>
            {/* <ul className="breadcrumbs">
              <li className="icon-arrow-right relative">
                <Link href={`/`}>Home</Link>
              </li>
              <li className="active">
                <a href="#">About Us</a>
              </li>
            </ul> */}
            <div className="achievement-highlights text-center mt-4" style={{color: "#09b6a2", fontSize: "1.5rem"}}>
              <span className="highlight-item">10,000+ Artworks Delivered</span>
              <span className="separator mx-3">,</span>
              <span className="highlight-item">Expert Artists</span>
              <span className="separator mx-3">,</span>
              <span className="highlight-item">Global Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}