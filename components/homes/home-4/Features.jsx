import { boxFeatureItems } from "@/data/features";
import React from "react";
import Image from "next/image";
export default function Features() {
  return (
    <div className="wg-box-features pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="grid-box-features">
              <div className="box-feature-item item1">
                <div className="image">
                  <Image
                    src="/assets/images/item-background/box-feature-1.png"
                    alt="image"
                    width={344}
                    height={350}
                  />
                </div>
                <div className="content">
                  <div className="title">
                    Artificial Intelligence Creative Tools you Need in
                    <span className="tf-color-yellow">One Platform</span>
                  </div>
                  <p>
                    We denounce with righteous indignation and dislike men who
                    are beguiled and demoralize by the charms of pleasure of the
                    moment blinded desire that they cannot foresee and trouble
                  </p>
                  <ul className="list-item">
                    <li>
                      <i className="icon-tick" />
                      Save time Rapid AI-driven generation.
                    </li>
                    <li>
                      <i className="icon-tick" />
                      No Outdates Continuous code documentation refresh.
                    </li>
                  </ul>
                  <a href="#" className="tf-button style-yellow">
                    <span>Learn More</span>
                    <i className="icon-arrow-right2" />
                  </a>
                </div>
              </div>
              {boxFeatureItems.map((item, index) => (
                <div
                  className={`box-feature-item ${item.itemClass}`}
                  key={index}
                >
                  <div className="item-1" />
                  <div className="item-2" />
                  <div className="item-3" />
                  <div className="title">
                    {item.title}
                    <span className="tf-color-yellow">
                      {item.highlightedText}
                    </span>
                  </div>
                  <p>{item.description}</p>
                  <div className="image">
                    <Image
                      src={item.imgSrc}
                      width={433}
                      height={178}
                      alt="image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
