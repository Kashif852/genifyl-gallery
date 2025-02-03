import { blogs } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Blogs() {
  return (
    <div className="wg-news pt-130 pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-2 text-center">
              <h6>News &amp; Blog</h6>
              <div className="main-title">
                Learn More Than Just an AI <br />
                Image{" "}
                <span className="animation-text tf-color-blue">Generator</span>
              </div>
            </div>
          </div>
          {blogs.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className={`news-item `}>
                <div className={`image ${item.type}`}>
                  {item.images.map((img, imgIndex) => (
                    <Image
                      width={350}
                      height={260}
                      src={img}
                      alt="image"
                      key={imgIndex}
                    />
                  ))}
                </div>
                <div className="content">
                  <div className="meta">
                    <div className="date">{item.date}</div>
                    <div className="comment">{item.comments}</div>
                  </div>
                  <h4>{item.title}</h4>
                </div>
                <div className="bottom">
                  <Link
                    className="tf-button-default"
                    href={`/blog-detail/${item.id}`}
                  >
                    Read More <i className="icon-arrow-right2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
