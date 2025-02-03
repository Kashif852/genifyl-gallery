import { servicesItems } from "@/data/services";
import React from "react";

export default function Services() {
  return (
    <div className="wg-services">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center">
              <h6 className="tf-color-yellow">Popular Services</h6>
              <div className="main-title">
                The Best Artificial Intelligence <br />
                Solutions{" "}
                <span className="animation-text tf-color-yellow">Platform</span>
              </div>
            </div>
          </div>
          {servicesItems.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="services-item wow fadeInUp">
                <div className="icon">
                  <i className={item.iconClass} />
                </div>
                <div className="content flex-grow">
                  <h4>{item.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
                <a className="" href={item.link}>
                  <i className="icon-arrow-up2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
