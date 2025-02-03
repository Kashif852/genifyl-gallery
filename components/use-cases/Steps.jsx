import React from "react";
import Image from "next/image";
export default function Steps() {
  return (
    <div className="wg-steps pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>Working Process</h6>
              <div className="main-title">
                Create Engaging Social Media <br />
                Content <span className="animation-text">in 4 Steps</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="step-item item1">
              <div className="image wow fadeInUp">
                <Image
                  src="/assets/images/steps/step-01.jpg"
                  width={440}
                  height={316}
                  alt="image"
                />
              </div>
              <div className="content">
                <div className="number">1</div>
                <div className="title">
                  <a href="#">
                    Enter your post’s title <br />
                    and keyword
                  </a>
                </div>
                <p>
                  Must explain want all this mistaken see <br />
                  denouncing pleasure &amp; praising
                </p>
              </div>
            </div>
            <div className="line text-center">
              <svg
                width={516}
                height={178}
                viewBox="0 0 516 178"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1C3.36783 47.9774 3.36783 100.248 142.731 97.9323C227.285 96.5273 326.746 95.6165 427.209 95.6165C507.58 95.6165 518.652 149.872 514.142 177"
                  stroke="#6844ED"
                  strokeOpacity="0.5"
                  strokeWidth={2}
                  strokeDasharray="6 6"
                />
              </svg>
            </div>
            <div className="step-item item2 row-reverse">
              <div className="image wow fadeInUp">
                <Image
                  src="/assets/images/steps/step-02.jpg"
                  alt="image"
                  width={440}
                  height={316}
                />
              </div>
              <div className="content">
                <div className="number">2</div>
                <div className="title">
                  <a href="#">
                    Review your outline <br />
                    &amp; main talking points
                  </a>
                </div>
                <p>
                  Must explain want all this mistaken see <br />
                  denouncing pleasure &amp; praising
                </p>
              </div>
            </div>
            <div className="line text-center">
              <svg
                width={516}
                height={178}
                viewBox="0 0 516 178"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M515 1C512.632 47.9774 512.632 100.248 373.269 97.9323C288.715 96.5273 189.254 95.6165 88.7908 95.6165C8.41995 95.6165 -2.65246 149.872 1.85769 177"
                  stroke="#6844ED"
                  strokeOpacity="0.5"
                  strokeWidth={2}
                  strokeDasharray="6 6"
                />
              </svg>
            </div>
            <div className="step-item item3">
              <div className="image wow fadeInUp">
                <Image
                  src="/assets/images/steps/step-03.jpg"
                  alt="image"
                  width={440}
                  height={316}
                />
              </div>
              <div className="content">
                <div className="number">3</div>
                <div className="title">
                  <a href="#">Generate your first draft</a>
                </div>
                <p>
                  Must explain want all this mistaken see <br />
                  denouncing pleasure &amp; praising
                </p>
              </div>
            </div>
            <div className="line text-center">
              <svg
                width={516}
                height={178}
                viewBox="0 0 516 178"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1C3.36783 47.9774 3.36783 100.248 142.731 97.9323C227.285 96.5273 326.746 95.6165 427.209 95.6165C507.58 95.6165 518.652 149.872 514.142 177"
                  stroke="#6844ED"
                  strokeOpacity="0.5"
                  strokeWidth={2}
                  strokeDasharray="6 6"
                />
              </svg>
            </div>
            <div className="step-item item4 row-reverse">
              <div className="image wow fadeInUp">
                <Image
                  width={440}
                  height={316}
                  src="/assets/images/steps/step-04.jpg"
                  alt="image"
                />
              </div>
              <div className="content">
                <div className="number">4</div>
                <div className="title">
                  <a href="#">
                    Edit, polish, &amp; Share <br />
                    your post
                  </a>
                </div>
                <p>
                  Must explain want all this mistaken see <br />
                  denouncing pleasure &amp; praising
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
