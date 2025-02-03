import { products } from "@/data/shop";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function RelatedProducts() {
  return (
    <div className="related-products">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="title">Related Products</div>
          </div>

          {products.slice(0, 4).map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div
                className="card-item wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="card-media">
                  <Image src={item.src} width={300} height={320} alt="image" />
                  <div className="more-infor">
                    <a href="#" className="infor-item cart">
                      <i className="icon-cart" />
                    </a>
                    <a href="#" className="infor-item view">
                      <i className="icon-view" />
                    </a>
                    <a href="#" className="infor-item data">
                      <i className="icon-data" />
                    </a>
                  </div>
                </div>
                <div className="card-content">
                  <h5>
                    <Link href={`/single-product/${item.id}`}>
                      {item.title}
                    </Link>
                  </h5>
                  <div className="price">&amp;{item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
