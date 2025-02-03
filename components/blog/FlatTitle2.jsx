import React from "react";
import Link from "next/link";
export default function FlatTitle2({ singleBlog }) {
  return (
    <div className="flat-title-page blog-detail">
      <div className="item1 block-blur-1"></div>
      <div className="item2 block-blur-2"></div>
      <div className="item3 block-blur-3"></div>
      <div className="item4 block-blur-4"></div>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading">{singleBlog.title}</div>
            <ul className="breadcrumbs">
              <li className="icon-arrow-right relative">
                <Link href={`/`}>Home</Link>
              </li>
              <li className="active icon-arrow-right relative">
                <a href="#">Blog Details</a>
              </li>
              <li className="active">
                <a href="#">{singleBlog.title}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
