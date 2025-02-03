import React from "react";
import Accordion from "../common/Accordion";

export default function Faq() {
  return (
    <div className="faqs-wrap-1 type-1">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-5">
            <div className="heading-section wow fadeInUp">
              <h6 className="">FAQs</h6>
              <div className="main-title">
                Frequently Asked{" "}
                <span className="animation-text">questions</span>
              </div>
            </div>
            <p className="text">
              Get instant answers about our AI cartoon generation tool and how it can help transform your products
            </p>
            {/* <a href="#" className="tf-button type-1 mb-20">
              <span>Learn More</span>
              <i className="icon-arrow-right2"></i>
            </a> */}
          </div>
          <div className="col-lg-7">
            <div className="flat-accordion">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
