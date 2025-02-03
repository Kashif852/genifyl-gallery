"use client";

import { partnersImages } from "@/data/partners";
import { testimonials2 } from "@/data/testimonals";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Clients() {
  const swiperOptions = {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    modules: [Pagination],
    pagination: {
      el: ".sp2",
      clickable: true,
    },
  };
  return (
    <div className="wg-clients">
      <svg
        width={1920}
        height={1785}
        viewBox="0 0 1920 1785"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_17_34655)">
          <path
            d="M342.214 323C189.048 397.167 18.5143 634.6 561.714 991C1104.91 1347.4 1694.88 1411.83 1917.71 1460"
            stroke="url(#paint0_linear_17_34655)"
            strokeWidth={50}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_17_34655"
            x="-134.505"
            y="0.499146"
            width="2357.5"
            height="1783.94"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={150}
              result="effect1_foregroundBlur_17_34655"
            />
          </filter>
          <linearGradient
            id="paint0_linear_17_34655"
            x1="1049.86"
            y1={323}
            x2="1049.86"
            y2={1581}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#05FF00" />
            <stop offset="0.520833" stopColor="white" stopOpacity="0.479167" />
            <stop offset={1} stopColor="#8FFF00" />
          </linearGradient>
        </defs>
      </svg>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-5">
            <div className="client-item">
              <div className="images">
                <div className="ellipse" />
                <Image
                  className="item-1"
                  src="/assets/images/logo/logo-yellow.png"
                  alt="image"
                  width={166}
                  height={40}
                />
                <div className="rt-360">
                  {partnersImages.map((image, index) => (
                    <Image
                      key={index}
                      className={image.className}
                      src={image.src}
                      width={80}
                      height={80}
                      alt={image.alt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="client-item">
              <div className="content mt-10">
                <h6>Clients Testimonials</h6>
                <h2>
                  What Our Clients Say <br />
                  About <span className="animation-text">Our Services</span>
                </h2>
              </div>
            </div>
            <Swiper
              {...swiperOptions}
              className="swiper-container client-slider"
            >
              {testimonials2.map((review, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="client-item">
                    <div className="content">
                      <p>
                        {review.text.split(" ").slice(0, 8).join(" ")}
                        <br />
                        {review.text.split(" ").slice(8, 18).join(" ")}
                        <br />
                        {review.text.split(" ").slice(18, 28).join(" ")}
                        <br />
                        {review.text.split(" ").slice(28).join(" ")}
                      </p>
                      <div className="infor">
                        <Image
                          src={review.imgSrc}
                          width={100}
                          height={100}
                          alt="image"
                        />
                        <div className="flex-grow">
                          <a href="#" className="name">
                            {review.name}
                          </a>
                          <div className="meta">{review.role}</div>
                        </div>
                        <div className="rating">
                          {Array.from({ length: review.rating }, (_, i) => (
                            <i key={i} className="icon-star" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-pagination sp2" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
