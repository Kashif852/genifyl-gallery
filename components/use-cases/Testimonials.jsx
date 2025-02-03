"use client";
import { testimonials4 } from "@/data/testimonals";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  const swiperOptions = {
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
      700: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <div className="wg-testimonials-2">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <div className="main-title">
                Customer Reviews What Our <br />
                Clients Say <span className="animation-text">About Us</span>
              </div>
            </div>
            <Swiper className="swiper-container show-shadow" {...swiperOptions}>
              <div className="swiper-wrapper">
                {testimonials4.map((testimonial, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="testimonial-item1">
                      <div className="say">
                        <div className="flex justify-between mb-30">
                          <div className="image">
                            <Image
                              src={testimonial.imageSrc}
                              alt={testimonial.name}
                              width={120}
                              height={120}
                            />
                          </div>
                          <div className="icon">
                            <svg
                              width={34}
                              height={27}
                              viewBox="0 0 34 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M29.6562 11.875C31.9414 11.875 33.875 13.8086 33.875 16.0938V22.6562C33.875 25 31.9414 26.875 29.6562 26.875H22.1562C19.8125 26.875 17.9375 25 17.9375 22.6562V11.4062C17.9375 5.48828 22.7422 0.625 28.7188 0.625H29.1875C30.7109 0.625 32 1.91406 32 3.4375V6.25C32 7.83203 30.7109 9.0625 29.1875 9.0625H28.7188C27.3711 9.0625 26.375 10.1172 26.375 11.4062V11.875H29.6562ZM31.0625 22.6562V16.0938C31.0625 15.332 30.418 14.6875 29.6562 14.6875H23.5625V11.4062C23.5625 8.59375 25.8477 6.25 28.7188 6.25H29.1875V3.4375H28.7188C24.3242 3.4375 20.75 7.01172 20.75 11.4062V22.6562C20.75 23.4766 21.3359 24.0625 22.1562 24.0625H29.6562C30.418 24.0625 31.0625 23.4766 31.0625 22.6562ZM11.8438 11.875C14.1289 11.875 16.0625 13.8086 16.0625 16.0938V22.6562C16.0625 25 14.1289 26.875 11.8438 26.875H4.34375C2 26.875 0.125 25 0.125 22.6562V11.4062C0.125 5.48828 4.92969 0.625 10.9062 0.625H11.375C12.8984 0.625 14.1875 1.91406 14.1875 3.4375V6.25C14.1875 7.83203 12.8984 9.0625 11.375 9.0625H10.9062C9.55859 9.0625 8.5625 10.1172 8.5625 11.4062V11.875H11.8438ZM13.25 22.6562V16.0938C13.25 15.332 12.6055 14.6875 11.8438 14.6875H5.75V11.4062C5.75 8.59375 8.03516 6.25 10.9062 6.25H11.375V3.4375H10.9062C6.51172 3.4375 2.9375 7.01172 2.9375 11.4062V22.6562C2.9375 23.4766 3.52344 24.0625 4.34375 24.0625H11.8438C12.6055 24.0625 13.25 23.4766 13.25 22.6562Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <p>{testimonial.text}</p>
                        <div className="flex items-center justify-between flex-wrap gap10">
                          <div className="infor">
                            <a href="#" className="name">
                              {testimonial.name}
                            </a>
                            <div className="meta">{testimonial.role}</div>
                          </div>
                          <div className="rating">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, i) => (
                                <i className="icon-star" key={i} />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
