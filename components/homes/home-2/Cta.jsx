import React from "react";
import Image from "next/image";
export default function Cta() {
  return (
    <div className="cta style-1">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrapper-1">
              <div className="item1" />
              <Image
                className="item2"
                src="/assets/images/item-background/cta-1.png"
                alt="image"
                width={158}
                height={194}
              />
              <div className="item3" />
              <Image
                className="item4"
                src="/assets/images/item-background/cta-2.png"
                alt="image"
                width={180}
                height={220}
              />
              <div className="cta-title">
                <h2>AI Pair Programmer</h2>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem <br />
                totam rem aperiam eaque quae abillo inventore
              </p>
              <div className="flex gap20 justify-center flex-wrap">
                <a href="#" className="tf-button type-3 h45">
                  Request Free Demo <i className="icon-arrow-right2" />
                </a>
                <a href="#" className="tf-button type-3 h45">
                  Get A Quote <i className="icon-arrow-right2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
