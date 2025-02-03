import { imageSources } from "@/data/avaters";
import React from "react";
import Image from "next/image";
export default function Cta() {
  return (
    <div className="cta type-1">
      {imageSources.slice(0, 4).map((elm, i) => (
        <Image
          width={100}
          height={100}
          key={i}
          className={`img${elm.i + 1}`}
          src={elm}
          alt="image"
        />
      ))}

      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrapper">
              <div className="ellipse item4" />
              <div className="ellipse item3" />
              <div className="ellipse item2" />
              <div className="ellipse item1" />
              <div className="cta-title">
                <h6 className="tf-color-yellow">Get More Update</h6>
                <h2>Ready to Get Our genifyl 7day Free Trial</h2>
              </div>
              <a href="#" className="tf-button style-yellow">
                <span>Start Your Trial Now</span>
                <i className="icon-arrow-right2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
