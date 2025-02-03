import { tools2 } from "@/data/tools";
import React from "react";

export default function Tools() {
  return (
    <div className="list-tool-1">
      <div className="themesflat-container">
        <div className="row justify-center">
          {tools2.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div
                className={`wg-tool style-1 wow fadeInUp`}
                data-wow-delay={item.delay}
              >
                <div className={`icon ${item.icon}`} />
                <h4>
                  <a href="#">{item.title}</a>
                </h4>
                <p>{item.description}</p>
                <a href="#" className="tf-button-default">
                  Read More <i className="icon-arrow-right2" />
                </a>
                <div className="order">{item.order}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
