import { listItems3 } from "@/data/features";
import React from "react";
import Image from "next/image";
export default function Design() {
  return (
    <div className="wg-create-design style-2 pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                <h6 className="tf-color-green">Documentation</h6>
                <div className="main-title">
                  Building Automated AI Code Documentation{" "}
                  <span className="animation-text tf-color-green">
                    Generation
                  </span>
                </div>
              </div>
              <p className="">
                Nam libero tempore cum soluta nobis esteligendi optio cumque
                nihil impedit quo minus id quod maxime placeat
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
          <div className="col-lg-7">
            <div className="image wow fadeInUp">
              <Image
                className="img-01"
                src="/assets/images/bg-section/image-10.png"
                alt="image"
                width={644}
                height={476}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
