import { pricingPlans } from "@/data/pricing";
import React from "react";

export default function Pricing() {
  return (
    <div className="wg-pricing  type-1">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <h6>Pricing Package</h6>
              <div className="main-title">
                Amazing Pricing Package For Generate <br />
                Social <span className="animation-text">Media Post</span>
              </div>
            </div>
          </div>
          {pricingPlans.map((plan, index) => (
            <div className="col-md-4" key={index}>
              <div className="pricing-item">
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <div className="number-price">
                  {plan.price}
                  <span>/{plan.period}</span>
                </div>
                <a href={plan.link} className="tf-button type-2">
                  <span>Get Started</span>
                  <i className="icon-arrow-right2" />
                </a>
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className={feature.icon} />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
