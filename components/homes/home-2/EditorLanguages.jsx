"use client";
import { languageItems, languageItems2 } from "@/data/editorLanguages";
import React from "react";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
export default function EditorLanguages() {
  const swiperOptions1 = {
    loop: true,
    spaceBetween: 30,
    speed: 10000,
    slidesPerView: "auto",
    modules: [Autoplay],
    autoplay: {
      delay: "0",
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  };
  const swiperOptions2 = {
    loop: true,
    spaceBetween: 30,
    speed: 10000,
    slidesPerView: "auto",
    modules: [Autoplay],
    autoplay: {
      delay: "0",
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  };
  return (
    <div className="editors-languages" style={{background: "transparent"}}>
      <div className="themesflat-container full" style={{paddingBottom: "35px"}}>
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center" >
              <div className="main-title" style={{color: "white"}}>
              Create Stunning {" "}
                <span className="animation-text tf-color-green">
                Scenes
                </span>
                {" "} from Your Photos
              </div>
            </div>
          </div>
          <div className="col-12 mb-30">
            <div className="grid-languages">
              <Swiper {...swiperOptions1} className="swiper-container e-resize">
                {languageItems.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="language-item">
                      <Image src={elm.src} width={370} height={120} alt="image" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-12">
            <div className="grid-languages">
              <Swiper className="swiper-container e-resize" {...swiperOptions2}>
                {languageItems2.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="language-item">
                      <Image src={elm.src} width={370} height={120} alt="image" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bottom">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image wow fadeInUp">
                <Image
                  className="img-01"
                  src="/assets/images/bg-section/image-11.png"
                  alt="image"
                  width={552}
                  height={480}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="heading-section wow fadeInUp style-1">
                  <h6 className="tf-color-green">Generation</h6>
                  <div className="main-title">
                    Heigh Power AI-Coding <br /> Tools{" "}
                    <span className="animation-text tf-color-green">
                      Generation
                    </span>
                  </div>
                </div>
                <p className="">
                  We denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness
                </p>
                <a href="#" className="tf-button style-2">
                  <span>Request Free Demo</span>
                  <i className="icon-arrow-right2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
