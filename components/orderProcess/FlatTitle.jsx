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
            <div className="heading">How To Order</div>
            <p className="subtitle text-center mb-4" style={{color: "white"}}>
              Transform your memories into timeless art pieces with our simple ordering process
            </p>
            <div className="contact-highlights text-center mt-4" style={{color: "#09b6a2", fontSize: "1.5rem"}}>
              <span className="highlight-item">100% Money Back Guarantee</span>
              <span className="separator mx-3">,</span>
              <span className="highlight-item">Premium Framing</span>
              <span className="separator mx-3">,</span>
              <span className="highlight-item">24-Hour Response</span>
            </div>
            <div className="quick-contact text-center mt-4">
              <p style={{color: "white", marginBottom: "1rem"}}>
                Contact us via:
              </p>
              <div className="contact-options" style={{color: "#09b6a2", fontSize: "1.2rem"}}>
                WhatsApp , Email , Contact Form
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}