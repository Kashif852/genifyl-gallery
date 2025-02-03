"use client";
import { imageSources } from "@/data/avaters";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const strings = [
  "Product Description",
  "Product Description",
  "Product Description",
];
export default function Banner() {
  const [activeSctingIndex, setActiveSctingIndex] = useState(0);
  const typeitRef = useRef(null);

  useEffect(() => {
    typeitRef.current.style.width = typeitRef.current.scrollWidth + "px";

    const reapetTyping = setInterval(() => {
      typeitRef.current.style.width = "0px";
      setTimeout(() => {
        setActiveSctingIndex((pre) => {
          if (pre == strings.length - 1) {
            return 0;
          } else {
            return pre + 1;
          }
        });
        if (typeitRef.current) {
          typeitRef.current.style.width = typeitRef.current.scrollWidth + "px";
        }
      }, 600);
    }, 2200);

    // Cleanup function to destroy the Typed instance
    return () => {
      clearInterval(reapetTyping);
    };
  }, []);
  return (
    <div className="wg-banner-4">
      <Image
        className="grid"
        src="/assets/images/item-background/line-3.png"
        alt="image"
        width={700}
        height={700}
      />
      {imageSources.slice(0, 5).map((elm, i) => (
        <Image
          width={100}
          height={100}
          key={i}
          className={`image item${i + 1}`}
          src={elm}
          alt="image"
        />
      ))}

      <svg
        className="linear-line"
        width={1874}
        height={1445}
        viewBox="0 0 1874 1445"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_17_34174)">
          <path
            d="M1567 153C1720.17 227.167 1890.7 464.6 1347.5 821C804.3 1177.4 214.333 1241.83 -8.5 1290"
            stroke="url(#paint0_linear_17_34174)"
            strokeWidth={50}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_17_34174"
            x="-143.782"
            y="0.499023"
            width="2017.5"
            height="1443.94"
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
              stdDeviation={65}
              result="effect1_foregroundBlur_17_34174"
            />
          </filter>
          <linearGradient
            id="paint0_linear_17_34174"
            x1="859.357"
            y1={153}
            x2="859.357"
            y2={1411}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#05FF00" />
            <stop offset="0.520833" stopColor="white" stopOpacity="0.479167" />
            <stop offset={1} stopColor="#8FFF00" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="line"
        width={1729}
        height={1161}
        viewBox="0 0 1729 1161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_17_34175)">
          <path
            d="M1567 10C1720.17 84.1667 1890.7 321.6 1347.5 678C804.3 1034.4 212.333 1102.83 -10.5 1151"
            stroke="url(#paint0_linear_17_34175)"
            strokeWidth={10}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_17_34175"
            x="-16.5566"
            y="0.5"
            width="1745.27"
            height="1160.39"
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
              stdDeviation="2.5"
              result="effect1_foregroundBlur_17_34175"
            />
          </filter>
          <linearGradient
            id="paint0_linear_17_34175"
            x1="859.357"
            y1={10}
            x2="859.357"
            y2={1268}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#05FF00" />
            <stop offset="0.520833" stopColor="white" stopOpacity="0.479167" />
            <stop offset={1} stopColor="#DBFF00" />
          </linearGradient>
        </defs>
      </svg>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="content text-center">
              <h6>Welcome to genifyl AI Copywriting</h6>
              <h1>
                Generate Faster Way To Copywrite <br />
                Your{" "}
                <span className="animationtext clip">
                  <span
                    ref={typeitRef}
                    className="cd-words-wrapper typeanimation"
                  >
                    {strings.map((elm, i) => (
                      <span
                        key={i}
                        className={`item-text pr-3 ${
                          activeSctingIndex == i ? "is-visible" : "is-hidden"
                        } `}
                      >
                        {elm}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <p>
                We denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the charms <br />
                of pleasure of the moment, so blinded by desire, that they
                cannot foresee the pain
              </p>
              <div className="grid-button flex gap20 items-center justify-center">
                <a href="#" className="tf-button style-yellow">
                  <span>Request Free Demo</span>
                  <i className="icon-arrow-right2" />
                </a>
                <a href="#" className="tf-button style-yellow">
                  <span>Try For Free</span>
                  <i className="icon-arrow-right2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="themesflat-container full">
        <div className="row">
          <div className="col-12 text-center">
            <Image
              src="/assets/images/dashboard/image-01.jpg"
              width={1440}
              height={1024}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
