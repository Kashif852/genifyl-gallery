import React from "react";
import Accordion from "../common/Accordion";
import { faqs2 } from "@/data/faq";

export default function Faq1() {
  return (
    <div className="faqs-wrap-1 type-1 wrap-faqs-1">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-5">
            <div className="heading-section wow fadeInUp">
              <h6 className="">FAQs</h6>
              <div className="main-title">
                Frequently Asked{" "}
                <span className="animation-text">questions</span>
              </div>
            </div>
            <p className="text">
              We denounce with righteous indignation and dislike men who are
              beguiled and demoralized
            </p>
          </div>
          <div className="col-md-7">
            <div className="flat-accordion">
              <Accordion faqData={faqs2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
