"use client";

import { worksItems } from "@/data/workItems";
import { useState } from "react";
import { EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ImageCarousel from './ImageCarousel/ImageCarousel'
const imageUrlsThumb = [
  "/assets/images/home-page/roadmap/1.png",
  "/assets/images/home-page/roadmap/2.png",
  "/assets/images/home-page/roadmap/3.png",
  "/assets/images/home-page/roadmap/4.png",
  // Add more image URLs if needed
];
const imageUrls = [
  "/assets/images/home-page/roadmap/1.png",
  "/assets/images/home-page/roadmap/2.png",
  "/assets/images/home-page/roadmap/3.png",
  "/assets/images/home-page/roadmap/4.png",
];
const swiperThumbOptions = {
  slidesPerView: 3,
  spaceBetween: 11,
  loop: true,
  modules: [Thumbs],
  slideToClickedSlide: true,
};
const swiperOptions2 = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  modules: [EffectFade, Thumbs],
  loopedslides: 4,
};
export default function Works() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="wg-works pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-2 text-center">
              <h6>How It Works</h6>
              <div className="main-title">
              Transform Your Photos  <br />
                <span className="animation-text tf-color-blue" >
                  in 4 steps
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <ImageCarousel />
            {/* <div className="widget-gallery-slider">
              <div className="gallery" style={{height: "90vh", background: "pink"}}>
                <Swiper
                  watchSlidesProgress
                  onSwiper={setThumbsSwiper}
                  {...swiperThumbOptions}
                  className="swiper-item gallery-thumbs"
                >
                  {imageUrlsThumb.map((elm, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <Image width={270} height={270} src={elm} alt="image" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div style={{ height: "100vh"}}>
                <Swiper
                  thumbs={{ swiper: thumbsSwiper }}
                  {...swiperOptions2}
                  className="swiper-item gallery-slider relative"
                >
                  {imageUrls.map((elm, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <Image width={270} height={500} src={elm} alt="image" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-md-6">
            <div className="content">
              {worksItems.map((item, index) => (
                <div
                  className={`works-item wow fadeInUp ${
                    index === worksItems.length - 1 ? "" : "mb-20"
                  }`}
                  key={index}
                >
                  <div className="number">{item.number}</div>
                  <h3>
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
