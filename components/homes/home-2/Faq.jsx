import Accordion from "@/components/common/Accordion";
import React from "react";

export default function Faq() {
  return (
    <div className="faqs-wrap-1">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-5">
            <div className="heading-section wow fadeInUp style-1">
              <h6 className="tf-color-green">FAQs</h6>
              <div className="main-title">
                Frequently Asked{" "}
                <span className="animation-text tf-color-green">questions</span>
              </div>
            </div>
            <p className="text">
              We denounce with righteous indignation and dislike <br />
              men who are beguiled and demoralized by the charms <br />
              pleasure of the moment blinded by desire
            </p>
            <a href="#" className="tf-button style-2 mb-15">
              <span>Learn More</span>
              <i className="icon-arrow-right2" />
            </a>
          </div>
          <div className="col-md-7">
            <div className="flat-accordion">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
