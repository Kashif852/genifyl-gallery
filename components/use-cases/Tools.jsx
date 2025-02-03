import { tools3 } from "@/data/tools";
import React from "react";
import Link from "next/link";
export default function Tools() {
  return (
    <div className="list-tool">
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>Bring Your Ideas to Life</h6>
              <div className="main-title">
              Why Choose Our AI-Powered Design Tool
                <br />
                Create Stunning <span className="animation-text">Custom Art & Products</span>
              </div>
            </div>
          </div>
          {tools3.map((tool, index) => (
            <div className="col-md-5" key={index}>
              <div className="wg-tool wow fadeInUp">
                <div className={`icon ${tool.icon}`} />
                <h3>
                <Link href={`/use-cases-details/${tool.id}`}>
                    {tool.title}
                  </Link>
                </h3>
                <p>{tool.description}</p>
                <div className="order">{tool.order}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
