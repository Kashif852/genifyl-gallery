import React from "react";
import Image from "next/image";

export default function Features({
  imageSrc = "/assets/images/home-page/c2/feature/2.png",
  imageAlt = "image",
  heading = "Transform Your Products",
  subheading = "Turn Photos into Custom Cartoon Art",
  paragraphs = [],
}) {
  return (
    <div className="wg-create-design style-5 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-6">
            <div className="image text-center wow fadeInUp">
              <Image src={imageSrc} width={555} height={485} alt={imageAlt} />
            </div>
          </div>
          <div className="col-md-6" style={{justifyContent: "center", alignItems: "center", display: "flex"}}>
            <div className="content" >
              <div className="heading-section wow fadeInUp">
                {/* <h6>{heading}</h6> */}
                <div className="main-title">{subheading}</div>
              </div>
              {paragraphs.map((paragraph, index) => (
                <p key={index} style={{ textAlign: "justify" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
