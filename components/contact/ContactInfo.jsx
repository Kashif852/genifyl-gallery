import { contactLinks } from "@/data/contactLinks";
import React from "react";

export default function ContactInfo() {
  return (
    <div className="contact-info pt-130">
      <div className="themesflat-container">
        <div className="row">
          {contactLinks.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div
                className="wg-helpful style-1 wow fadeInUp"
                data-wow-delay={item.delay}
                style={{background: "linear-gradient( 163deg,rgba(255, 255, 255, 0.15) 0%,rgba(9, 182, 162, 0.1) 100%)"}}
              >
                <div className="image"  style={{background: "linear-gradient( 163deg,rgba(255, 255, 255, 0.15) 0%,rgba(9, 182, 162, 0.1) 100%)", border: "none"}}>
                  <div className="icon" >
                    <span className={item.iconClass} />
                  </div>
                </div>
                <h6 >
                  <a href={item.link} style={{color: "white"}}>{item.title}</a>
                </h6>
                <p style={{color: "white"}}>
                  {item.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
