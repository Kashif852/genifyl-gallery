"use client";
import Image from "next/image";
import Pagination from "../common/Pagination";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Blog() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="tf-blog">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-4 col-12">
              <Sidebar />
            </div>
            <div className="col-md-8 col-12">
              <div className="wrap-inner">
                <div className="blog-article">
                  <div className="card-media">
                    <Image
                      src="/assets/images/blog/blog-01.jpg"
                      width={850}
                      height={510}
                      alt="image"
                    />
                  </div>
                  <div className="wrapper-info">
                    <div className="meta">
                      <div className="date">July 25, 2023</div>
                      <div className="comment">Comments(08)</div>
                    </div>
                    <h3>
                      <Link href={`/blog-detail/8`}>
                        Design System Smashing Design Patterns Are Better
                        <br />
                        Way To Collaborate On Your Design System
                      </Link>
                    </h3>
                    <div className="bottom">
                      <div className="author">
                        <i className="icon-user" />
                        <a href="#">Johnny M. Kolb</a>
                      </div>
                      <Link
                        href={`/blog-detail/8`}
                        className="tf-button-default"
                      >
                        Read More <i className="icon-arrow-right2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog-article relative">
                  <div className="card-media">
                    <div className="video-wrap style-2">
                      <Image
                        src="/assets/images/blog/blog-02.jpg"
                        width={850}
                        height={510}
                        alt="image"
                      />
                      <a
                        onClick={() => setOpen(true)}
                        className="popup-youtube"
                      >
                        <div className="icon">
                          <i className="icon-play" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="wrapper-info">
                    <div className="meta">
                      <div className="date">July 25, 2023</div>
                      <div className="comment">Comments(08)</div>
                    </div>
                    <h3>
                      <Link href={`/blog-detail/9`}>
                        How To Create A Rapid Research Program To Support
                        <br />
                        Insights At Scale
                      </Link>
                    </h3>
                    <div className="bottom">
                      <div className="author">
                        <i className="icon-user" />
                        <a href="#">Johnny M. Kolb</a>
                      </div>
                      <Link
                        href={`/blog-detail/9`}
                        className="tf-button-default"
                      >
                        Read More <i className="icon-arrow-right2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="wg-quote">
                  <svg
                    width={64}
                    height={46}
                    viewBox="0 0 64 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1943 0.411621C6.36815 0.411621 0.00195312 6.77782 0.00195312 14.604C0.00195312 22.1538 5.92675 28.3461 13.3711 28.7739C13.5 30.1655 13.4033 33.9536 9.77335 39.2231C9.49895 39.6206 9.54875 40.1567 9.88956 40.4975C11.375 41.9829 12.293 42.9184 12.9355 43.5727C13.7764 44.4282 14.1602 44.8188 14.7217 45.3286C14.9121 45.5014 15.1523 45.5883 15.3936 45.5883C15.6279 45.5883 15.8613 45.5063 16.0498 45.3432C22.375 39.8393 29.4014 28.4672 28.3848 14.5317C27.7891 6.35012 21.8213 0.411621 14.1943 0.411621ZM15.4033 43.2221C15.1309 42.9536 14.8203 42.6372 14.3623 42.1713C13.8057 41.604 13.042 40.8266 11.8838 39.6645C16.2891 32.8764 15.457 28.0415 15.0928 27.3481C14.9199 27.019 14.5654 26.7973 14.1943 26.7973C7.47165 26.7973 2.00195 21.3276 2.00195 14.604C2.00195 7.88132 7.47165 2.41162 14.1943 2.41162C20.7432 2.41162 25.8721 7.56982 26.3906 14.6762C27.5332 30.3501 18.2178 40.5268 15.4033 43.2221Z"
                      fill="#6844ED"
                    />
                    <path
                      d="M63.9004 14.5317C63.3027 6.35112 57.334 0.411621 49.709 0.411621C41.8828 0.411621 35.5156 6.77782 35.5156 14.604C35.5156 22.1538 41.4414 28.3461 48.8867 28.7739C49.0156 30.1645 48.9179 33.9506 45.2871 39.2231C45.0127 39.6206 45.0625 40.1567 45.4033 40.4975C46.8828 41.977 47.7988 42.9106 48.4414 43.5639C49.2861 44.4252 49.6719 44.8178 50.2363 45.3295C50.4267 45.5014 50.6679 45.5883 50.9082 45.5883C51.1426 45.5883 51.376 45.5063 51.5644 45.3422C57.8896 39.8383 64.916 28.4663 63.9004 14.5317ZM50.9179 43.2221C50.6435 42.9516 50.3301 42.6333 49.8681 42.1626C49.3115 41.5961 48.5508 40.8208 47.3974 39.6645C51.8027 32.8754 50.9717 28.0415 50.6084 27.3481C50.4355 27.02 50.0801 26.7973 49.709 26.7973C42.9853 26.7973 37.5156 21.3276 37.5156 14.604C37.5156 7.88132 42.9853 2.41162 49.709 2.41162C56.2568 2.41162 61.3867 7.56982 61.9062 14.6772C63.0478 30.3491 53.7324 40.5268 50.9179 43.2221Z"
                      fill="#6844ED"
                    />
                  </svg>
                  <div className="wrapper-info">
                    <div className="meta">
                      <div className="date">July 25, 2023</div>
                      <div className="comment">Comments(08)</div>
                    </div>
                    <h3>
                      Meet Codux React Visual Editor That Improves Support
                      Insights At Scale Developer Experience
                    </h3>
                    <div className="bottom">
                      <div className="author">
                        <i className="icon-user" />
                        <a href="#">Johnny M. Kolb</a>
                      </div>
                      <Link
                        href={`/blog-detail/10`}
                        className="tf-button-default"
                      >
                        Read More <i className="icon-arrow-right2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog-article-1">
                  <Image
                    src="/assets/images/blog/blog-03.jpg"
                    width={850}
                    height={510}
                    alt="image"
                  />
                  <div className="wrapper-info">
                    <div className="meta">
                      <div className="date">July 25, 2023</div>
                      <div className="comment">Comments(08)</div>
                    </div>
                    <h3>
                      <Link href={`/blog-detail/11`}>
                        How To Create A Rapid Research Program To Support
                        Insights At Scale Improves Developer Experience
                      </Link>
                    </h3>
                    <div className="bottom">
                      <div className="author">
                        <i className="icon-user" />
                        <a href="#">Johnny M. Kolb</a>
                      </div>
                      <Link
                        href={`/blog-detail/11`}
                        className="tf-button-default"
                      >
                        Read More <i className="icon-arrow-right2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="wg-quote">
                  <svg
                    width={64}
                    height={46}
                    viewBox="0 0 64 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1943 0.411621C6.36815 0.411621 0.00195312 6.77782 0.00195312 14.604C0.00195312 22.1538 5.92675 28.3461 13.3711 28.7739C13.5 30.1655 13.4033 33.9536 9.77335 39.2231C9.49895 39.6206 9.54875 40.1567 9.88956 40.4975C11.375 41.9829 12.293 42.9184 12.9355 43.5727C13.7764 44.4282 14.1602 44.8188 14.7217 45.3286C14.9121 45.5014 15.1523 45.5883 15.3936 45.5883C15.6279 45.5883 15.8613 45.5063 16.0498 45.3432C22.375 39.8393 29.4014 28.4672 28.3848 14.5317C27.7891 6.35012 21.8213 0.411621 14.1943 0.411621ZM15.4033 43.2221C15.1309 42.9536 14.8203 42.6372 14.3623 42.1713C13.8057 41.604 13.042 40.8266 11.8838 39.6645C16.2891 32.8764 15.457 28.0415 15.0928 27.3481C14.9199 27.019 14.5654 26.7973 14.1943 26.7973C7.47165 26.7973 2.00195 21.3276 2.00195 14.604C2.00195 7.88132 7.47165 2.41162 14.1943 2.41162C20.7432 2.41162 25.8721 7.56982 26.3906 14.6762C27.5332 30.3501 18.2178 40.5268 15.4033 43.2221Z"
                      fill="#6844ED"
                    />
                    <path
                      d="M63.9004 14.5317C63.3027 6.35112 57.334 0.411621 49.709 0.411621C41.8828 0.411621 35.5156 6.77782 35.5156 14.604C35.5156 22.1538 41.4414 28.3461 48.8867 28.7739C49.0156 30.1645 48.9179 33.9506 45.2871 39.2231C45.0127 39.6206 45.0625 40.1567 45.4033 40.4975C46.8828 41.977 47.7988 42.9106 48.4414 43.5639C49.2861 44.4252 49.6719 44.8178 50.2363 45.3295C50.4267 45.5014 50.6679 45.5883 50.9082 45.5883C51.1426 45.5883 51.376 45.5063 51.5644 45.3422C57.8896 39.8383 64.916 28.4663 63.9004 14.5317ZM50.9179 43.2221C50.6435 42.9516 50.3301 42.6333 49.8681 42.1626C49.3115 41.5961 48.5508 40.8208 47.3974 39.6645C51.8027 32.8754 50.9717 28.0415 50.6084 27.3481C50.4355 27.02 50.0801 26.7973 49.709 26.7973C42.9853 26.7973 37.5156 21.3276 37.5156 14.604C37.5156 7.88132 42.9853 2.41162 49.709 2.41162C56.2568 2.41162 61.3867 7.56982 61.9062 14.6772C63.0478 30.3491 53.7324 40.5268 50.9179 43.2221Z"
                      fill="#6844ED"
                    />
                  </svg>
                  <div className="wrapper-info">
                    <div className="meta">
                      <div className="date">July 25, 2023</div>
                      <div className="comment">Comments(08)</div>
                    </div>
                    <h3>
                      How To Build Server-Side Rendered (SSR) Svelte Apps
                      <br />
                      With Svelte Kit Visual Editor That Improves
                    </h3>
                    <div className="bottom">
                      <div className="author">
                        <i className="icon-user" />
                        <a href="#">Johnny M. Kolb</a>
                      </div>
                      <Link
                        href={`/blog-detail/12`}
                        className="tf-button-default"
                      >
                        Read More <i className="icon-arrow-right2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="widget-pagination">
                  <ul className="">
                    <Pagination />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Y8XpQpW5OVY"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
