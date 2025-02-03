import Accordion from "@/components/common/Accordion";
import React from "react";
import Image from "next/image";
export default function Faq() {
  return (
    <div className="faqs-wrap-3">
      <svg
        className="linear-line"
        width={1882}
        height={1445}
        viewBox="0 0 1882 1445"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_17_35025)">
          <path
            d="M1574.5 153C1727.67 227.167 1898.2 464.6 1355 821C811.8 1177.4 221.833 1241.83 -1 1290"
            stroke="url(#paint0_linear_17_35025)"
            strokeWidth={50}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_17_35025"
            x="-136.282"
            y="0.499146"
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
              result="effect1_foregroundBlur_17_35025"
            />
          </filter>
          <linearGradient
            id="paint0_linear_17_35025"
            x1="866.857"
            y1={153}
            x2="866.857"
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
        width={1737}
        height={1161}
        viewBox="0 0 1737 1161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_17_35026)">
          <path
            d="M1574.5 10C1727.67 84.1667 1898.2 321.6 1355 678C811.8 1034.4 219.833 1102.83 -3 1151"
            stroke="url(#paint0_linear_17_35026)"
            strokeWidth={10}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_17_35026"
            x="-9.05664"
            y="0.499878"
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
              result="effect1_foregroundBlur_17_35026"
            />
          </filter>
          <linearGradient
            id="paint0_linear_17_35026"
            x1="866.857"
            y1={10}
            x2="866.857"
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
            <div className="heading-section wow fadeInUp style-1 text-center">
              <h6 className="tf-color-yellow">Asked Questions</h6>
              <div className="main-title">
                Frequently Asked{" "}
                <span className="animation-text tf-color-yellow">
                  questions
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="flat-accordion">
              <Accordion />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image wow fadeInUp">
              <Image
                src="/assets/images/bg-section/image-16.png"
                width={470}
                height={365}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
