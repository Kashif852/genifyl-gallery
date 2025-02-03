"use client";
import { pricingPlans2 } from "@/data/pricing";
import { useState } from "react";
import Image from "next/image";
export default function Pricing() {
  const [pricingIsYearly, setPricingIsYearly] = useState([false, false]);
  const updatePeriod = (index, val) => {
    const tempPeriod = [...pricingIsYearly];
    tempPeriod[index] = val;

    setPricingIsYearly(tempPeriod);
  };
  return (
    <div className="wg-pricing-2 pb-130">
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-2 text-center">
              <h6>Pricing Package</h6>
              <div className="main-title">
                Choose The Best AI Image <br />
                Generate{" "}
                <span className="animation-text tf-color-blue">Package</span>
              </div>
            </div>
          </div>
          {pricingPlans2.map((plan, index) => (
            <div className="col-lg-5 col-md-6" key={index}>
              <div className="pricing-item style-2">
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <div className="avatar-wrapper flex-wrap">
                  <p className="w-full">
                    <strong className="tf-color-blue">{plan.peopleUse}</strong>{" "}
                    People Use <span>package</span>
                  </p>
                  <div className="wg-list-avatar w-full">
                    {plan.avatars.map((avatar, avatarIndex) => (
                      <a href="#" key={avatarIndex}>
                        <Image
                          width={100}
                          height={100}
                          src={avatar}
                          alt="image"
                        />{" "}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="price-tabs">
                  <div
                    className={`button-price price-month ${
                      !pricingIsYearly[index] ? "active" : ""
                    }`}
                    onClick={() => updatePeriod(index, false)}
                  >
                    Monthly
                  </div>
                  <div
                    className={`button-price price-month ${
                      pricingIsYearly[index] ? "active" : ""
                    }`}
                    onClick={() => updatePeriod(index, true)}
                  >
                    Yearly
                  </div>
                </div>
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="icon-check" />
                      {feature.number && (
                        <span className="number">{feature.number}</span>
                      )}{" "}
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between flex-wrap gap25">
                  <div className="number-price">
                    {pricingIsYearly[index]
                      ? plan.priceYearly
                      : plan.priceMonthly}
                  </div>
                  <a href="#" className="tf-button">
                    <span>Get Started</span>
                    <i className="icon-arrow-right2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
