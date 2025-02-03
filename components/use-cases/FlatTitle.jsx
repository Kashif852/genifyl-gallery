"use client"
import React from "react";
import Link from "next/link";
export default function FlatTitle() {
  return (
    <div className="flat-title-page wg-banner-3">
      <div className="item1 block-blur-1" />
      <div className="item2 block-blur-2" />
      <div className="item3 block-blur-3" />
      <div className="item4 block-blur-4" />
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading">
              Use <span>Cases</span>
            </div>
            <ul className="breadcrumbs">
              <li className="icon-arrow-right relative">
                <Link href={`/`}>Home</Link>
              </li>
              <li className="active">
                <a href="/use-cases">Use Cases</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
