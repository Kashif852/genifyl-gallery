"use client";
import { useState } from "react";
import { EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { socialMediaIcons } from "@/data/socials";
const imageUrlsThumb = [
  "/assets/images/box-item/image-21.jpg",
  "/assets/images/box-item/image-22.jpg",
  "/assets/images/box-item/image-23.jpg",
  "/assets/images/box-item/image-24.jpg",
  // Add more image URLs if needed
];
const imageUrls = [
  "/assets/images/box-item/image-21.jpg",
  "/assets/images/box-item/image-22.jpg",
  "/assets/images/box-item/image-23.jpg",
  "/assets/images/box-item/image-24.jpg",
];
const swiperThumbOptions = {
  slidesPerView: 3,
  spaceBetween: 11,
  loop: true,
  modules: [Thumbs],
  slideToClickedSlide: true,
};
const swiperOptions2 = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  modules: [EffectFade, Thumbs],
  loopedslides: 4,
};
export default function ProductSingle({ productItem }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(1);
  return (
    <div className="single-product pt-130">
      <div className="themesflat-container">
        <div className="row justify-between">
          <div className="col-md-6">
            <div className="widget-gallery-slider gallery-style-1">
              <div className="gallery">
                <Swiper
                  watchSlidesProgress
                  onSwiper={setThumbsSwiper}
                  {...swiperThumbOptions}
                  className="swiper-item gallery-thumbs"
                >
                  {imageUrlsThumb.map((elm, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <Image src={elm} width={630} height={515} alt="image" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  {...swiperOptions2}
                  thumbs={{ swiper: thumbsSwiper }}
                  className="swiper-item gallery-slider relative"
                >
                  {imageUrls.map((elm, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <Image src={elm} alt="image" width={630} height={515} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wg-single-detail">
              <div className="sub-title">
                3d Abstract
                <div className="rating">
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                </div>
              </div>
              <div className="title">{productItem.title}</div>
              <div className="price">&amp;{productItem.price}</div>
              <p>
                Doloremque laudantium, totam rem aperiam eaque quae abillo
                inventore veritatis quasi architecto beatae voluptatem voluptas
                sit aspernatur aut odit autfugit, sed consequuntur
              </p>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam nisi ut aliquid exea
              </p>
              <div className="button-group flex gap20">
                <div className="quantity">
                  <span
                    onClick={() =>
                      setItemQuantity((pre) => (pre > 1 ? pre - 1 : 1))
                    }
                    className="btn-quantity minus-btn"
                  >
                    <i className="icon-arrow-left" />
                  </span>
                  <input
                    type="number"
                    name="number"
                    min={1}
                    onChange={(e) => setItemQuantity(e.target.value / 1)}
                    value={itemQuantity}
                  />
                  <span
                    onClick={() => setItemQuantity((pre) => pre + 1)}
                    className="btn-quantity plus-btn"
                  >
                    <i className="icon-arrow-right" />
                  </span>
                </div>
                <a href="#" className="tf-button type-1 h45">
                  <span>Add to Cart</span>
                  <i className="icon-arrow-right2" />
                </a>
              </div>
              <div className="more-infor">
                <div className="item">
                  <h6>Categories :</h6>
                  <div className="text">
                    <span className="tf-color">AI,</span> Product, Shop,
                    Shopping
                  </div>
                </div>
                <div className="item">
                  <h6>Tags :</h6>
                  <div className="text">
                    <span className="tf-color">AI,</span> Media Post, Image
                    &amp; Video
                  </div>
                </div>
                <div className="item">
                  <h6>Share :</h6>
                  <div>
                    <ul className="wg-social style-2">
                      {socialMediaIcons.map((icon, index) => (
                        <li key={index}>
                          <a href={icon.href} className={icon.className} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
