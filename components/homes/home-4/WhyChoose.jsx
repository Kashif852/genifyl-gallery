import { fileItems } from "@/data/features";
import React from "react";

export default function WhyChoose() {
  return (
    <div className="wg-files">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center">
              <h6 className="tf-color-yellow">Why Choose Us</h6>
              <div className="main-title">
                AI-powered service that generates <br />
                code documentation, tests, and optimizations <br />
                from your{" "}
                <span className="animation-text tf-color-yellow">
                  source code files
                </span>
              </div>
            </div>
          </div>
          {fileItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className={`file-item ${item.itemClass}`}>
                <div className="icon">
                  <i className={item.iconClass} />
                </div>
                <h4>
                  <a href="#">{item.title}</a>
                </h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
