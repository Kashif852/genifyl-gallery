"use client";
import React from "react";
import Image from "next/image";
import { partners } from "@/data/partners";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Counter from "../common/Counter";

export default function Partners() {
  const swiperOptions = {
    loop: true,
    spaceBetween: 147,
    speed: 10000,
    slidesPerView: 5,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 5,
      },
    },
    modules: [Autoplay],
    autoplay: {
      delay: "0",
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  };
  return (
    <div className="wg-result style-1 relative pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <div className="sub-title">
              Unleash Creativity with genifyl
              </div>
              <div className="main-title">
              The Ultimate AI-Powered Cartoon Generator&nbsp;
                <br />
                for Professionals and Teams{" "}
                <span className="animation-text">Premium Results</span>
              </div>
            </div>
            <div className="counter text-center">
              <div className="number-counter">
                <Counter parentClass={"number"} max={1260} min={1} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="partners-inner">
              <Swiper
              style={{ height: '60'}}
                {...swiperOptions}
                className="swiper-container e-resize swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                data-swiper=""
              >
                {partners.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide my-auto">
                    <Image src={elm.src} width={200} height={60} alt="image" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
