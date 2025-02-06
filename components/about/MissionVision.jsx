import React from "react";

const listItems3 = [
  {
    icon: "far fa-check-circle",
    text: "Foster innovation through advanced creative tools and contemporary techniques"
  },
  {
    icon: "far fa-check-circle",
    text: "Build an inclusive space where diverse creative approaches come together"
  },
  {
    icon: "far fa-check-circle",
    text: "Blend timeless artistic principles with cutting-edge creative expressions"
  },
  {
    icon: "far fa-check-circle",
    text: "Guide creators in developing sustainable creative practices and portfolios"
  },
  {
    icon: "far fa-check-circle",
    text: "Connect global creative communities through collaborative projects"
  }
];

export default function Design() {
  return (
    <div className="wg-create-design style-2 pb-130 pt-130" style={{height: "100vh"}}>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                <h6 className="tf-color-green">Our Vision</h6>
                <div className="main-title">
                  Advancing Creative Boundaries and{" "}
                  <span className="animation-text tf-color-green">
                    Artistic Innovation
                  </span>
                </div>
              </div>
              <p className="">
                We embrace the evolving landscape of creative expression in the digital age. 
                Our vision combines innovative approaches with artistic excellence to unlock new 
                creative possibilities. By providing cutting-edge tools and fostering a collaborative 
                environment, we empower creators to push boundaries and develop unique artistic voices 
                that resonate in today's world.
              </p>
              <ul className="list-item">
                {listItems3.map((item, index) => (
                  <li key={index}>
                    <i className={item.icon} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}