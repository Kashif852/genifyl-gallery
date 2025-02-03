import React from "react";

export default function Cta() {
  return (
    <div className="cta">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrapper">
              <div className="ellipse item1" />
              <div className="ellipse item2" />
              <div className="ellipse item3" />
              <div className="ellipse item4" />
              <div className="cta-title">
                <h6>Start Creating Today</h6>
                <h2>
                Transform Your Products Into <br />
                Cartoon <span className="animation-text">Art!</span>
                </h2>
              </div>
              <div className="cta-content">
                <p>
                Get started in seconds with our AI-powered tool.<br />
                No design skills needed - just upload and transform.
                </p>
                <div className="flex gap20">
                  <a href="#" className="tf-button style-1">
                  Try For Free <i className="icon-arrow-right2" />
                  </a>
                  <a href="#" className="tf-button style-1 active">
                  See Pricing <i className="icon-arrow-right2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
