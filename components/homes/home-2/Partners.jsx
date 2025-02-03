"use client";
import Image from "next/image";
import { partners2 } from "@/data/partners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function Partners() {
  const swiperOptions = {
    loop: true,
    spaceBetween: 123,
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
    <div className="wg-partners-1">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="partners-inner-1">
              <p>
                We’ve more than <span className="tf-color-green">1563+</span>{" "}
                Global Clients
              </p>
              <div className="wrap">
                <Swiper
                  {...swiperOptions}
                  className="swiper-container grid-languages e-resize"
                >
                  {partners2.map((elm, i) => (
                    <SwiperSlide key={i} className="swiper-slide my-auto">
                      <Image
                        className={elm.className}
                        src={elm.src}
                        width={134}
                        height={40}
                        alt="image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
