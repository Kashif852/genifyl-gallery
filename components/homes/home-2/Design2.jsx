import { counters } from "@/data/facts";
import React from "react";
import Image from "next/image";
import Counter from "@/components/common/Counter";
export default function Design2() {
  return (
    <div className="wg-create-design style-3 pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                <h6 className="tf-color-green">Favorite Editor</h6>
                <div className="main-title">
                  Focus on Solving Bigger{" "}
                  <span className="animation-text tf-color-green">
                    Problems
                  </span>
                </div>
              </div>
              <p className="">
                No one rejects, dislikes, or avoids pleasure itself, because it
                is <br /> pleasure, but because those who do not know how to
                pursue <br /> rationally encounter consequences extremely
                painful.{" "}
              </p>
              <div className="grid-counter">
                {counters.map((elm, i) => (
                  <div key={i} className="counter">
                    <div className="number-counter">
                      <Counter
                        parentClass={"number"}
                        max={elm.number}
                        min={0}
                      />
                      %
                    </div>
                    <div className="text">{elm.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image wow fadeInUp">
              <Image
                className="img-01"
                src="/assets/images/bg-section/image-06.png"
                alt="image"
                width={558}
                height={522}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
