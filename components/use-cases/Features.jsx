import { useCases } from "@/data/features";
import Link from "next/link";
import React from "react";

export default function Features() {
  return (
    <div className="wg-create-design style-6 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6>What We Provide</h6>
                <div className="main-title">
                  Discover More Helpful <br />
                  Social Media Artificial <br />
                  <span className="animation-text">Intelligence Features</span>
                </div>
              </div>
              <p className="">
                We denounce with righteous indignation and dislike men who are{" "}
                <br />
                beguiled and demoralized by the charms of pleasure
              </p>
              <a href="#" className="tf-button type-1">
                <span>Generate AI Post</span>
                <i className="icon-arrow-right2" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {useCases.map((item, index) => (
                <div className="col-xl-4 col-6" key={index}>
                  <div className="wg-helpful text-center mb-30 wow fadeInUp">
                    <div className="image">
                      <span className={item.icon} />
                    </div>
                    <h6>
                      <Link href={`/use-cases-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h6>
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
