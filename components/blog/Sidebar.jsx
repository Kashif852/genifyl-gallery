"use client";
import { categories, recentBlogs, tags } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="wg-search mb-30">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="search-form relative"
        >
          <fieldset className="search">
            <input
              type="search"
              placeholder="Search keywords"
              className="style-1"
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
      <div className="widget widget-categories">
        <h4 className="title-widget">Category</h4>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <div className="cate-item">
                <a href="#">{category}</a>
              </div>
              <i className="icon-arrow-right" />
            </li>
          ))}
        </ul>
      </div>
      <div className="widget widget-recent-news">
        <h4 className="title-widget">Recent News</h4>
        {recentBlogs.map((newsItem, index) => (
          <div className="recent-news-item" key={index}>
            <div className="card-media">
              <Image
                src={newsItem.imgSrc}
                width={180}
                height={180}
                alt={newsItem.title}
              />
            </div>
            <div className="card-content">
              <h6>
                <Link href={`/blog-detail/${newsItem.id}`}>
                  {newsItem.title}
                </Link>
              </h6>
              <div className="date">{newsItem.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="widget-trailer">
        <Image
          src="/assets/images/blog/sidebar-01.jpg"
          width={410}
          height={455}
          alt="image"
        />
        <div className="content">
          <div className="title">
            <div className="text">Sign Up For 7days</div>
            <span className="text-1">Free Trial AI </span>
            <span className="text-2">Account</span>
          </div>
          <p>To take trivial example which ever undertakes laborious chooses</p>
          <a href="#" className="tf-button">
            <span>Sign In</span>
            <i className="icon-arrow-right2" />
          </a>
        </div>
      </div>
      <div className="widget widget-tag">
        <h4 className="title-widget">Popular Tags</h4>
        <ul className="flex flex-wrap gap10">
          {tags.map((category, index) => (
            <li key={index}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
