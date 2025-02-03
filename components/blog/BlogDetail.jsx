import React from "react";
import Image from "next/image";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import Sidebar from "./Sidebar";
import { socialMediaIcons } from "@/data/socials";
import Link from "next/link";

export default function BlogDetail() {
  return (
    <div className="tf-blog-detail">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-4 col-12">
            <Sidebar />
          </div>
          <div className="col-md-8 col-12">
            <div className="main-image">
              <Image
                src="/assets/images/blog/blog-detail-01.jpg"
                width={850}
                height={510}
                alt="image"
              />
            </div>
            <div className="wrap-inner">
              <div className="meta">
                <div className="author">
                  <i className="icon-user" /> <a href="#">Johnny M. Kolb</a>
                </div>
                <div className="date">July 25, 2023</div>
                <div className="comment">Comments(08)</div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur
              </p>
              <div className="wg-quote">
                <svg
                  width={53}
                  height={40}
                  viewBox="0 0 53 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2005 39.3592C10.5991 39.3609 9.01315 39.047 7.53318 38.4355C6.0532 37.8239 4.70824 36.9267 3.57519 35.7951C2.44213 34.6635 1.54319 33.3197 0.929737 31.8406C0.316286 30.3614 0.000354444 28.7758 2.98068e-07 27.1744C-0.000353848 25.5731 0.314876 23.9874 0.927673 22.5079C1.54047 21.0284 2.43882 19.6843 3.57137 18.5522C4.70393 17.4201 6.04849 16.5223 7.52819 15.9101C9.0079 15.2979 10.5938 14.9833 12.1951 14.9843C12.4406 14.989 12.6745 15.0899 12.8464 15.2652C13.0183 15.4405 13.1146 15.6763 13.1146 15.9218C13.1146 16.1674 13.0182 16.4031 12.8463 16.5784C12.6743 16.7537 12.4404 16.8545 12.1949 16.8592C10.8087 16.8658 9.43791 17.1505 8.16372 17.6965C6.88953 18.2425 5.73787 19.0387 4.77695 20.0378C3.81603 21.037 3.06539 22.2188 2.56948 23.5133C2.07358 24.8078 1.84251 26.1887 1.88994 27.5741C2.02774 30.1557 3.11524 32.5951 4.94325 34.4231C6.77125 36.2511 9.21064 37.3386 11.7922 37.4764C13.1778 37.5247 14.559 37.2942 15.8539 36.7986C17.1488 36.303 18.3309 35.5524 19.3303 34.5913C20.3296 33.6303 21.1258 32.4783 21.6715 31.2038C22.2173 29.9292 22.5015 28.5581 22.5074 27.1716C22.4926 20.0744 20.1915 13.1708 15.945 7.48419L11.4452 1.48428C11.3022 1.28505 11.243 1.03772 11.2802 0.795332C11.3174 0.552941 11.4481 0.334775 11.6443 0.187607C11.8404 0.0404393 12.0864 -0.0240166 12.3296 0.00805746C12.5727 0.0401315 12.7936 0.166182 12.9448 0.359187L17.4446 6.35903C22.8396 13.4238 28.257 28.905 20.6473 35.9525C18.3836 38.146 15.3526 39.3684 12.2005 39.3592Z"
                    fill="#6844ED"
                  />
                  <path
                    d="M40.3255 39.3589C38.7241 39.3606 37.1382 39.0467 35.6582 38.4351C34.1782 37.8236 32.8332 36.9264 31.7002 35.7948C30.5671 34.6632 29.6682 33.3194 29.0547 31.8402C28.4413 30.361 28.1254 28.7754 28.125 27.1741C28.1246 25.5728 28.4399 23.987 29.0527 22.5076C29.6655 21.0281 30.5638 19.6839 31.6964 18.5518C32.8289 17.4197 34.1735 16.5219 35.6532 15.9097C37.1329 15.2975 38.7188 14.9829 40.3201 14.984C40.5656 14.9887 40.7995 15.0896 40.9714 15.2649C41.1433 15.4402 41.2396 15.6759 41.2396 15.9215C41.2396 16.167 41.1432 16.4028 40.9713 16.578C40.7993 16.7533 40.5654 16.8541 40.3199 16.8588C38.9337 16.8655 37.5629 17.1502 36.2887 17.6962C35.0145 18.2422 33.8629 19.0384 32.902 20.0375C31.941 21.0367 31.1904 22.2185 30.6945 23.513C30.1986 24.8075 29.9675 26.1884 30.0149 27.5738C30.1527 30.1553 31.2402 32.5947 33.0683 34.4227C34.8963 36.2507 37.3356 37.3383 39.9172 37.4761C41.3028 37.5242 42.6839 37.2937 43.9788 36.798C45.2736 36.3024 46.4557 35.5518 47.4551 34.5908C48.4544 33.6298 49.2505 32.4778 49.7963 31.2033C50.3421 29.9288 50.6264 28.5577 50.6324 27.1713C50.6176 20.0741 48.3165 13.1705 44.07 7.48385L39.5702 1.48394C39.4273 1.2847 39.3682 1.03743 39.4055 0.795123C39.4427 0.552813 39.5734 0.334733 39.7695 0.187609C39.9656 0.0404852 40.2115 -0.0239788 40.4546 0.00802891C40.6977 0.0400366 40.9185 0.165969 41.0698 0.358846L45.5696 6.35869C50.9646 13.4235 56.382 28.9046 48.7723 35.9522C46.5086 38.1457 43.4776 39.3681 40.3255 39.3589Z"
                    fill="#6844ED"
                  />
                </svg>
                <div className="wrapper-info">
                  <h3>
                    Handling Mounting And Unmounting Of Given Navigation Routes
                    In React Native
                  </h3>
                  <div className="author">
                    <a href="#">Johnny M. Martin</a>
                  </div>
                </div>
              </div>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequature
              </p>
              <div className="bottom">
                <div className="widget-tag style-1">
                  <ul className="flex flex-wrap gap10 mt-0">
                    <li>
                      <a href="#">AI Image</a>
                    </li>
                    <li>
                      <a href="#">AI Video</a>
                    </li>
                    <li>
                      <a href="#">Media Post</a>
                    </li>
                  </ul>
                </div>
                <ul className="wg-social style-1">
                  {socialMediaIcons.map((icon, index) => (
                    <li key={index}>
                      <a href={icon.href} className={icon.className} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="wg-review">
                <div className="image">
                  <Image
                    src="/assets/images/avatar/avatar-01.png"
                    width={320}
                    height={320}
                    alt="image"
                  />
                </div>
                <div className="content">
                  <h4>Richard M. Fudge</h4>
                  <p>
                    We denounce with righteous indignation to dislike beguiled
                    demoralized by the charms of pleasure the moment
                  </p>
                  <ul className="wg-social style-2">
                    {socialMediaIcons.map((icon, index) => (
                      <li key={index}>
                        <a href={icon.href} className={icon.className} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="related-post">
                <div className="prev">
                  <div className="recent-news-item">
                    <div className="card-media">
                      <Image
                        src="/assets/images/blog/related-01.jpg"
                        width={180}
                        height={180}
                        alt="image"
                      />
                    </div>
                    <div className="card-content">
                      <h6>
                        <Link href="/blog-detail/4">
                          Popular Search Finance Manager Customer
                        </Link>
                      </h6>
                      <div className="date">15 May 2023</div>
                    </div>
                  </div>
                </div>
                <div className="next">
                  <div className="recent-news-item">
                    <div className="card-media">
                      <Image
                        src="/assets/images/blog/related-02.jpg"
                        width={180}
                        height={180}
                        alt="image"
                      />
                    </div>
                    <div className="card-content">
                      <h6>
                        <Link href="/blog-detail/5">
                          Leonardo Da Vinci Can Teach Us About Web
                        </Link>
                      </h6>
                      <div className="date">15 May 2023</div>
                    </div>
                  </div>
                </div>
              </div>
              <Comments />
            </div>
            <div className="widget-reply">
              <h3 className="heading">Leave a Reply</h3>
              <p>
                We denounce with righteous indignation and dislike men who
                beguiled
              </p>
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
