"use client";
import { pricingPlans } from "@/data/pricing";
import React, { useState } from "react";

export default function Pricing() {
  // State to hold checkbox value
  const [isChecked, setIsChecked] = useState(false);

  // Handler to update state when checkbox changes
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="wg-pricing-3">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center">
              <div className="main-title">
                Amazing Pricing Package For Generate <br />
                Copywriting &amp;{" "}
                <span className="animation-text tf-color-yellow">
                  Media Post
                </span>
              </div>
              <div className="flex mt-40 gap20 justify-center items-center">
                <h6>Monthly</h6>
                <input
                  className="check"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <h6>Yearly</h6>
              </div>
            </div>
          </div>
          {pricingPlans.map((elm, i) => (
            <div key={i} className="col-md-4">
              <div className="pricing-item style-3">
                <h3>{elm.title}</h3>
                <p>Start with {elm.limit}+ word limit</p>
                <div className="number-price">
                  <b>{isChecked ? elm.priceYearly : elm.price}</b>
                  <span>/</span>per {isChecked ? "year" : "month"}
                </div>
                <ul>
                  {elm.features.map((elm, i) => (
                    <li key={i}>
                      <i className="icon-check" />
                      {elm.text}
                    </li>
                  ))}
                </ul>
                <a href="#" className="tf-button">
                  <span>Get Started</span>
                  <i className="icon-arrow-right2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
