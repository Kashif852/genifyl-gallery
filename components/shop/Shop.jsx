"use client";
import { categories, products } from "@/data/shop";
import Link from "next/link";
import Pagination from "../common/Pagination";
import Slider from "rc-slider";
const shortOptions = [{ label: "Name" }, { label: "Price" }];

import Image from "next/image";
import { useEffect, useState } from "react";
export default function Shop() {
  const [price, setPrice] = useState([10, 30]);
  const [activeshortOption, setActiveshortOption] = useState("");
  const [filtered, setFiltered] = useState(products);
  const [pageItems, setPageItems] = useState(filtered);
  const handlePageItems = () => {
    setPageItems(filtered);
  };
  useEffect(() => {
    let tempFiltered = [...products].filter(
      (elm) => elm.price >= price[0] && elm.price <= price[1]
    );
    let finalFilter = [];
    if (activeshortOption == "Price") {
      finalFilter = [...tempFiltered.sort((a, b) => a.price - b.price)];
    } else if (activeshortOption == "Name") {
      finalFilter = [...tempFiltered.sort((a, b) => a.title - b.title)];
    } else {
      finalFilter = tempFiltered;
    }
    setFiltered(finalFilter);
  }, [price, activeshortOption]);

  // price range handler

  // price range handler
  const handleOnChange = (value) => {
    setPrice(value);
  };
  return (
    <div className="shop-page pt-130 pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="side-bar style-2">
              <div className="widget widget-search">
                <h4 className="title-widget">Search</h4>
                <div className="wg-search">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="search-form relative"
                  >
                    <fieldset className="search">
                      <input
                        type="search"
                        placeholder="Keywords"
                        className=""
                        name="search"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required
                      />
                    </fieldset>
                    <i className="icon-search" />
                  </form>
                </div>
              </div>
              <div className="widget widget-categories">
                <h4 className="title-widget">Category</h4>
                <ul>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <div className="cate-item">
                        <a href={category.link}>{category.text}</a>
                      </div>
                      <i className="icon-arrow-right" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="widget widget-price">
                <h4 className="title-widget">Filter by Price</h4>
                <div className="mb-20">
                  <Slider
                    range
                    // formatLabel={() => ``}
                    max={30}
                    min={10}
                    defaultValue={price}
                    onChange={(value) => handleOnChange(value)}
                    id="slider"
                  />{" "}
                  <div className="d-flex mt-2 justify-content-between fs-4">
                    <span>{price[0]}</span>
                    <span>{price[1]}</span>
                  </div>
                </div>
                <a
                  onClick={handlePageItems}
                  className="tf-button h40 shop-apply-btn"
                >
                  <span>Apply</span>
                  <i className="icon-arrow-right2" />
                </a>
              </div>
              <div className="widget-trailer">
                <Image
                  src="/assets/images/blog/sidebar-04.jpg"
                  width={300}
                  height={360}
                  alt="image"
                />
                <div className="content">
                  <div className="title">
                    <div className="text">Sign Up For 7days</div>
                    <span className="text-1">Free Trial AI </span>
                    <span className="text-2">Account</span>
                  </div>
                  <p>To take trivial example which undertakes laborious</p>
                  <a href="#" className="tf-button h40">
                    <span>Get A Quote</span>
                    <i className="icon-arrow-right2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="shop-page-inner">
              <div className="flex items-center justify-between mb-40 z-23">
                <div className="text">Showing 1–9 of 17 results</div>
                <div className="dropdown" id="sort-by">
                  <span className="btn-selector">
                    <span>
                      {activeshortOption ? activeshortOption : "Sort by"}
                    </span>
                  </span>
                  <ul style={{ display: "none" }}>
                    {shortOptions.map((elm, i) => (
                      <li
                        onClick={() =>
                          setActiveshortOption((pre) =>
                            pre == elm.label ? "" : elm.label
                          )
                        }
                        key={i}
                      >
                        <span>{elm.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="shop-page-grid">
              <div className="row">
                {pageItems.map((item, index) => (
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div
                      className="card-item wow fadeInUp"
                      data-wow-delay={item.delay}
                    >
                      <div className="card-media">
                        <Image
                          src={item.src}
                          width={300}
                          height={320}
                          alt="image"
                        />
                        <div className="more-infor">
                          <a className="infor-item cart">
                            <i className="icon-cart" />
                          </a>
                          <a className="infor-item view">
                            <i className="icon-view" />
                          </a>
                          <a className="infor-item data">
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
                <div className="col-12">
                  <div className="widget-pagination">
                    <ul className="justify-center">
                      <Pagination />
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
