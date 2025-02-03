"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { imageUrls1, imageUrls2 } from "@/data/heroslides";
const strings = [
  "Cartoonify Your Products",
  "Create Custom Art",
  "Design With AI",
  "Build Your Brand"
];
export default function Banner() {
  const [activeSctingIndex, setActiveSctingIndex] = useState(0);
  useEffect(() => {
    const reapetTyping = setInterval(() => {
      setTimeout(() => {
        setActiveSctingIndex((pre) => {
          if (pre == strings.length - 1) {
            return 0;
          } else {
            return pre + 1;
          }
        });
      }, 600);
    }, 2200);

    // Cleanup function to destroy the Typed instance
    return () => {
      clearInterval(reapetTyping);
    };
  }, []);
  const swiperOptions1 = {
    direction: "vertical",
    spaceBetween: 20,
    speed: 10000,
    loop: true,
    slidesPerView: "auto",
    modules: [Autoplay],
    autoplay: {
      delay: "0",
      disableOnInteraction: false,
      reverseDirection: true,
    },
  };
  const swiperOptions2 = {
    direction: "vertical",
    spaceBetween: 20,
    speed: 10000,
    loop: true,
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    modules: [Autoplay],
    autoplay: {
      delay: "0",
      disableOnInteraction: false,
    },
  };
  return (
    <div className="wg-banner-3">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-6">
            <div className="content">
              <div className="title">
              Personalize Your Perfect Design
                <span className="animationtext slide animation-text" >
                  <span className="cd-words-wrapper">
                    {strings.map((elm, i) => (
                      <span
                        key={i}
                        className={`item-text ${
                          activeSctingIndex == i ? "is-visible" : "is-hidden"
                        } `}
                      >
                        {elm}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
              <p>
              Create unique designs by selecting your preferred styles, colors, and elements. Ideal for custom products and merchandise
              </p>
              {/* <div className="box-generate relative">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="comment-form"
                >
                  <svg
                    width={17}
                    height={16}
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.25 0C15.625 0 17 3.03125 15.0938 4.71875L8.46875 10.6875L7.59375 13.375C7.46875 13.7188 7.21875 13.9688 6.90625 14.0625L1.03125 16L0 14.9375L1.9375 9.09375C2.03125 8.75 2.28125 8.5 2.625 8.40625L5.28125 7.5L11.2812 0.90625C11.8125 0.3125 12.5312 0 13.25 0ZM6.625 13.0625L7.5625 10.3125L5.6875 8.4375L2.9375 9.34375C2.90625 9.375 1.375 13.9062 1.375 13.9062L3.53125 11.75C3.5 11.6875 3.46875 11.5938 3.46875 11.5C3.46875 10.9688 3.9375 10.5 4.46875 10.5C5.03125 10.5 5.46875 10.9688 5.46875 11.5C5.46875 12.0625 5.03125 12.5 4.46875 12.5C4.40625 12.5 4.3125 12.5 4.25 12.4688L2.09375 14.625C2.09375 14.625 6.625 13.0938 6.625 13.0625ZM14.4062 3.96875C14.75 3.65625 14.9688 3.25 14.9688 2.78125C15 1.8125 14.1562 1 13.25 1C12.7812 1.03125 12.3125 1.21875 12.0312 1.5625L6.4375 7.75L8.25 9.5625L14.4062 3.96875Z"
                      fill="#696969"
                    />
                  </svg>
                  <fieldset className="text">
                    <input
                      type="text"
                      placeholder="Write to text"
                      className=""
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <div className="">
                    <button className="" type="submit">
                      Generate
                    </button>
                  </div>
                </form>
              </div>
              <div className="note">
                <i className="icon-check" />
                No credits cards required
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="auto-slide">
              <Swiper {...swiperOptions1} className="swiper-container">
                {imageUrls1.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <Image width={270} height={270} src={elm} alt="image" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper {...swiperOptions2} className="swiper-container">
                {imageUrls2.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <Image width={270} height={270} src={elm} alt="image" />
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
