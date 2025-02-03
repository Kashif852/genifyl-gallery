import { listItems } from "@/data/features";
import React from "react";
import Image from "next/image";
export default function Design() {
  return (
    <div className="wg-create-design style-4 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image">
              <Image
                className="item-1"
                src="/assets/images/home-page/gallery/gallery2/tab2/1.png"
                alt="image"
                width={270}
                height={270}
              />
              <Image
                className="item-2"
                src="/assets/images/home-page/gallery/gallery2/tab2/3.png"
                alt="image"
                width={200}
                height={165}
              />
              <Image
                className="item-3"
                src="/assets/images/home-page/banner/slider1/7.png"
                alt="image"
                width={188}
                height={153}
              />
              <div className="box-2">
              <Image
                className="item-3"
                src="/assets/images/home-page/banner/slider1/5.png"
                alt="image"
                width={188}
                height={153}
              />
                {/* <div className="wrap">
                  <div className="text">
                    <a href="#">Online AI Image Generator</a>
                  </div>
                  <div className="flex gap20">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.7432 14.3319L20.7437 4.33247C20.5517 4.12048 20.2838 4.00049 19.9998 4.00049H14.0001C13.6061 4.00049 13.2481 4.23248 13.0861 4.59246C12.9262 4.95444 12.9921 5.37641 13.2561 5.6684L21.6537 14.9999L13.2561 24.3294C12.9921 24.6234 12.9242 25.0453 13.0861 25.4053C13.2481 25.7673 13.6061 25.9993 14.0001 25.9993H19.9998C20.2838 25.9993 20.5517 25.8773 20.7437 25.6693L29.7432 15.6699C30.0852 15.2899 30.0852 14.7099 29.7432 14.3319Z"
                        fill="url(#paint0_linear_17_33661)"
                      />
                      <path
                        d="M16.7442 14.3319L7.74471 4.33247C7.55272 4.12048 7.28473 4.00049 7.00075 4.00049H1.00107C0.607092 4.00049 0.249111 4.23248 0.0871198 4.59246C-0.0728715 4.95444 -0.00687508 5.37641 0.257111 5.6684L8.65466 14.9999L0.257111 24.3294C-0.00687508 24.6234 -0.0748714 25.0453 0.0871198 25.4053C0.249111 25.7673 0.607092 25.9993 1.00107 25.9993H7.00075C7.28473 25.9993 7.55272 25.8773 7.74471 25.6693L16.7442 15.6699C17.0862 15.2899 17.0862 14.7099 16.7442 14.3319Z"
                        fill="url(#paint1_linear_17_33661)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_17_33661"
                          x1="21.4994"
                          y1="4.00049"
                          x2="21.4994"
                          y2="25.9993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_17_33661"
                          x1="8.50035"
                          y1="4.00049"
                          x2="8.50035"
                          y2="25.9993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.7432 14.3319L20.7437 4.33247C20.5517 4.12048 20.2838 4.00049 19.9998 4.00049H14.0001C13.6061 4.00049 13.2481 4.23248 13.0861 4.59246C12.9262 4.95444 12.9921 5.37641 13.2561 5.6684L21.6537 14.9999L13.2561 24.3294C12.9921 24.6234 12.9242 25.0453 13.0861 25.4053C13.2481 25.7673 13.6061 25.9993 14.0001 25.9993H19.9998C20.2838 25.9993 20.5517 25.8773 20.7437 25.6693L29.7432 15.6699C30.0852 15.2899 30.0852 14.7099 29.7432 14.3319Z"
                        fill="url(#paint0_linear_17_33661)"
                      />
                      <path
                        d="M16.7442 14.3319L7.74471 4.33247C7.55272 4.12048 7.28473 4.00049 7.00075 4.00049H1.00107C0.607092 4.00049 0.249111 4.23248 0.0871198 4.59246C-0.0728715 4.95444 -0.00687508 5.37641 0.257111 5.6684L8.65466 14.9999L0.257111 24.3294C-0.00687508 24.6234 -0.0748714 25.0453 0.0871198 25.4053C0.249111 25.7673 0.607092 25.9993 1.00107 25.9993H7.00075C7.28473 25.9993 7.55272 25.8773 7.74471 25.6693L16.7442 15.6699C17.0862 15.2899 17.0862 14.7099 16.7442 14.3319Z"
                        fill="url(#paint1_linear_17_33661)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_17_33661"
                          x1="21.4994"
                          y1="4.00049"
                          x2="21.4994"
                          y2="25.9993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_17_33661"
                          x1="8.50035"
                          y1="4.00049"
                          x2="8.50035"
                          y2="25.9993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.7432 14.3319L20.7437 4.33247C20.5517 4.12048 20.2838 4.00049 19.9998 4.00049H14.0001C13.6061 4.00049 13.2481 4.23248 13.0861 4.59246C12.9262 4.95444 12.9921 5.37641 13.2561 5.6684L21.6537 14.9999L13.2561 24.3294C12.9921 24.6234 12.9242 25.0453 13.0861 25.4053C13.2481 25.7673 13.6061 25.9993 14.0001 25.9993H19.9998C20.2838 25.9993 20.5517 25.8773 20.7437 25.6693L29.7432 15.6699C30.0852 15.2899 30.0852 14.7099 29.7432 14.3319Z"
                        fill="url(#paint0_linear_17_33661)"
                      />
                      <path
                        d="M16.7442 14.3319L7.74471 4.33247C7.55272 4.12048 7.28473 4.00049 7.00075 4.00049H1.00107C0.607092 4.00049 0.249111 4.23248 0.0871198 4.59246C-0.0728715 4.95444 -0.00687508 5.37641 0.257111 5.6684L8.65466 14.9999L0.257111 24.3294C-0.00687508 24.6234 -0.0748714 25.0453 0.0871198 25.4053C0.249111 25.7673 0.607092 25.9993 1.00107 25.9993H7.00075C7.28473 25.9993 7.55272 25.8773 7.74471 25.6693L16.7442 15.6699C17.0862 15.2899 17.0862 14.7099 16.7442 14.3319Z"
                        fill="url(#paint1_linear_17_33661)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_17_33661"
                          x1="21.4994"
                          y1="4.00049"
                          x2="21.4994"
                          y2="25.9993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_17_33661"
                          x1="8.50035"
                          y1="4.00049"
                          x2="8.50035"
                          y2="25.9993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.7432 14.3319L20.7437 4.33247C20.5517 4.12048 20.2838 4.00049 19.9998 4.00049H14.0001C13.6061 4.00049 13.2481 4.23248 13.0861 4.59246C12.9262 4.95444 12.9921 5.37641 13.2561 5.6684L21.6537 14.9999L13.2561 24.3294C12.9921 24.6234 12.9242 25.0453 13.0861 25.4053C13.2481 25.7673 13.6061 25.9993 14.0001 25.9993H19.9998C20.2838 25.9993 20.5517 25.8773 20.7437 25.6693L29.7432 15.6699C30.0852 15.2899 30.0852 14.7099 29.7432 14.3319Z"
                        fill="url(#paint0_linear_17_33661)"
                      />
                      <path
                        d="M16.7442 14.3319L7.74471 4.33247C7.55272 4.12048 7.28473 4.00049 7.00075 4.00049H1.00107C0.607092 4.00049 0.249111 4.23248 0.0871198 4.59246C-0.0728715 4.95444 -0.00687508 5.37641 0.257111 5.6684L8.65466 14.9999L0.257111 24.3294C-0.00687508 24.6234 -0.0748714 25.0453 0.0871198 25.4053C0.249111 25.7673 0.607092 25.9993 1.00107 25.9993H7.00075C7.28473 25.9993 7.55272 25.8773 7.74471 25.6693L16.7442 15.6699C17.0862 15.2899 17.0862 14.7099 16.7442 14.3319Z"
                        fill="url(#paint1_linear_17_33661)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_17_33661"
                          x1="21.4994"
                          y1="4.00049"
                          x2="21.4994"
                          y2="25.9993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_17_33661"
                          x1="8.50035"
                          y1="4.00049"
                          x2="8.50035"
                          y2="25.9993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop offset={1} stopColor="white" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div> */}
              </div>
              <div className="box-1">
                <div className="wrap">
                  <p>
                    <a href="/dashboard/genifyl">Open AI Editor</a>
                  </p>
                  <p className="active">
                    <a href="/dashboard/genifyl">Customize Image</a>
                  </p>
                  <p>
                    <a href="/dashboard/gallery">Download Results</a>
                  </p>
                  <Image
                    src="/assets/images/item-background/hand.png"
                    width={60}
                    height={96}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp style-2">
                <h6>Online Generation</h6>
                <div className="main-title">
                  Create Anything With <br />
                  AI image{" "}
                  <span className="animation-text tf-color-blue">
                    Generator
                  </span>
                </div>
              </div>
              <p className="">
              Transform your products into custom cartoon art in seconds. Perfect for e-commerce, marketing, and merchandise
              </p>
              <ul className="list-item">
                {listItems.map((elm, i) => (
                  <li key={i}>
                    <i className="icon-tick" />
                    {elm.text}
                  </li>
                ))}
              </ul>
              {/* <a href="#" className="tf-button style-blue type-1">
                <span>Generate AI Image</span>
                <i className="icon-arrow-right2" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
