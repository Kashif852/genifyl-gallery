"use client";
import { testimonials } from "@/data/testimonals";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  const swiperOptions = {
    loop: false,
    slidesPerView: 1,
    observer: true,
    modules: [EffectFade, Pagination],
    effect: "fade",
    observeParents: true,
    pagination: {
      el: ".sp1",
      clickable: true,
    },
  };
  return (
    <div className="wg-testimonials bg-line relative pb-130">
      <div className="item-1" />
      <div className="item-2" />
      <div className="themesflat-container z-5">
        <div className="row">
          <div className="col-12">
            <Swiper
              {...swiperOptions}
              className="swiper-container slider-type1"
            >
              {testimonials.map((testimonial, i) => (
                <SwiperSlide className="swiper-slide" key={i}>
                  <div className="testimonial-item">
                    <div className="image">
                      <div className="icon">
                        <svg
                          width={34}
                          height={27}
                          viewBox="0 0 34 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.6562 11.8798C31.9414 11.8798 33.875 13.8134 33.875 16.0986V22.6611C33.875 25.0048 31.9414 26.8798 29.6562 26.8798H22.1562C19.8125 26.8798 17.9375 25.0048 17.9375 22.6611V11.4111C17.9375 5.4931 22.7422 0.629822 28.7188 0.629822H29.1875C30.7109 0.629822 32 1.91888 32 3.44232V6.25482C32 7.83685 30.7109 9.06732 29.1875 9.06732H28.7188C27.3711 9.06732 26.375 10.122 26.375 11.4111V11.8798H29.6562ZM31.0625 22.6611V16.0986C31.0625 15.3369 30.418 14.6923 29.6562 14.6923H23.5625V11.4111C23.5625 8.59857 25.8477 6.25482 28.7188 6.25482H29.1875V3.44232H28.7188C24.3242 3.44232 20.75 7.01654 20.75 11.4111V22.6611C20.75 23.4814 21.3359 24.0673 22.1562 24.0673H29.6562C30.418 24.0673 31.0625 23.4814 31.0625 22.6611ZM11.8438 11.8798C14.1289 11.8798 16.0625 13.8134 16.0625 16.0986V22.6611C16.0625 25.0048 14.1289 26.8798 11.8438 26.8798H4.34375C2 26.8798 0.125 25.0048 0.125 22.6611V11.4111C0.125 5.4931 4.92969 0.629822 10.9062 0.629822H11.375C12.8984 0.629822 14.1875 1.91888 14.1875 3.44232V6.25482C14.1875 7.83685 12.8984 9.06732 11.375 9.06732H10.9062C9.55859 9.06732 8.5625 10.122 8.5625 11.4111V11.8798H11.8438ZM13.25 22.6611V16.0986C13.25 15.3369 12.6055 14.6923 11.8438 14.6923H5.75V11.4111C5.75 8.59857 8.03516 6.25482 10.9062 6.25482H11.375V3.44232H10.9062C6.51172 3.44232 2.9375 7.01654 2.9375 11.4111V22.6611C2.9375 23.4814 3.52344 24.0673 4.34375 24.0673H11.8438C12.6055 24.0673 13.25 23.4814 13.25 22.6611Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <Image
                        src={testimonial.imgSrc}
                        width={275}
                        height={275}
                        alt={testimonial.alt}
                      />
                    </div>
                    <div className="content">
                      <p>{testimonial.content}</p>
                      <div className="infor">
                        <a href="#" className="tf-color-green">
                          {testimonial.name} /
                        </a>{" "}
                        {testimonial.position}
                      </div>
                      <div className="rating">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, index) => (
                            <i className="icon-star" key={index} />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-pagination sp1 w-100" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
