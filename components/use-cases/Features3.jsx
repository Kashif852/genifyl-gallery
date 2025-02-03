import { featureItems } from "@/data/features";
import React from "react";

export default function Features3() {
  return (
    <div className="wg-features">
      <div className="themesflat-container">
        <div className="row">
          {featureItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="feature-item wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <h3>
                  <a href="#">{item.title}</a>
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
