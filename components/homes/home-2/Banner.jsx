import { imageSources } from "@/data/avaters";
import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="wg-banner-2">
      <div className="bg-item">
        <div className="item-1" />
        <div className="item-2" />
      </div>
      <div className="themesflat-container w1420">
        <div className="row">
          <div className="col-xl-5 col-12">
            <div className="content">
              <div className="title">
                Expert Artistry
                <span className="animationtext letters rotate-3 animation-text">
                  <span className="cd-words-wrapper">
                    <span
                      className="item-text tf-color-green is-visible"
                      style={{ opacity: 1 }}
                    >
                      {"Mastered"
                        .split(" ")
                        .join("_")
                        .split("")
                        .map((elm, i) => (
                          <span
                            key={i}
                            className={`rorateLetterAnim ${
                              elm == "_" ? "blankSpan" : ""
                            }`}
                            style={{ animationDelay: i * 0.07 + "s" }}
                          >
                            {elm}
                          </span>
                        ))}
                    </span>
                  </span>
                </span>
              </div>
              <p>
  Transform your cherished memories into timeless artworks! Our expert painters specialize in<br />
  portraits, landscapes, and custom pieces, each crafted with meticulous attention to detail
</p>
              <div className="grid-button flex gap20 items-center mb-50">
                <a href="/gallery" className="tf-button style-2">
                  <span>View Portfolio</span>
                  <i className="icon-arrow-right2" />
                </a>
              </div>
              <div className="avatar-wrapper flex-wrap">
              <p className="w-full">
          Team of <span>40+ Professional Artists</span> | <span>10,000+</span> Orders Completed
        </p>
                {/* <div className="wg-list-avatar w-full">
                  {imageSources.slice(0, 6).map((elm, i) => (
                    <a key={i} href="#">
                      <Image width={100} height={100} src={elm} alt="image" />
                    </a>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-12">
            <div className="image relative w-full h-full">
              <div className="item-3" />
              <div className="item-4" />
              <Image
                src="/assets/images/banner/1.png"
                alt="image"
                width={741}
                height={462}
                className="item-1"
              />
              <Image
                src="/assets/images/real/1.png"
                alt="image"
                width={558}
                height={522}
                className="item-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}