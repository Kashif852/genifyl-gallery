"use client";
import Image from "next/image";
import { partners } from "@/data/partners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function Partners() {
  const swiperOptions = {
    loop: true,
    spaceBetween: 123,
    speed: 10000,
    slidesPerView: 1,
    modules: [Autoplay],
    autoplay: {
      delay: "0",
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className="wg-partners-1 type-1">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="partners-inner-1">
              <p>
                We’ve more than
                <span className="tf-color-blue">1563+</span> Global Clients
              </p>
              <div className="wrap">
                <Swiper
                  {...swiperOptions}
                  className="swiper-container e-resize"
                  data-swiper=""
                >
                  {partners.map((elm, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <Image
                        src={elm.src}
                        width={200}
                        height={60}
                        style={{ width: "200px", objectFit: "contain" }}
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
