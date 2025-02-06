"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
export default function Header2() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header_main"
      className={`header header-green header-fixed style-absolute  ${
        scrollHeight > 70 ? "is-fixed" : ""
      } ${scrollHeight > 100 ? "is-small" : ""}`}
    >
      <div className="themesflat-container w1420">
        <div className="row">
          <div className="col-12">
            <div className="header-inner">
              <div id="site-logo">
                <div id="site-logo-inner">
                <div
            id="site-logo-inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Link
              href={`/`}
              rel="home"
              className="main-logo"
              style={{
                display: "inline-block",
                textDecoration: "none",
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#09b6a2", // A color that matches the blue in your logo
              }}
            >
              genifyl
            </Link>
          </div>
                </div>
              </div>
              {/* logo */}
              <nav id="main-nav" className="main-nav">
                <ul id="menu-primary-menu" className="menu-primary-menu">
                  <Nav />
                </ul>
              </nav>
              <div className="header-right">
              <Link href="/contact" className="tf-button style-2 "  >
              <span>Place Order</span>
              <i className="icon-arrow-right2" />
            </Link>
        </div>
              <div
                onClick={() => setIsMobileMenuActive(true)}
                className="mobile-button hidden"
              >
                <span />
              </div>
              {/* /.mobile-button */}
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-nav-wrap ${isMobileMenuActive ? "active" : ""}`}>
        <div
          className="overlay-mobile-nav"
          onClick={() => setIsMobileMenuActive(false)}
        />
        <div className="inner-mobile-nav">
        <Link
              href={`/`}
              rel="home"
              className="main-logo"
              style={{
                display: "inline-block",
                textDecoration: "none",
                fontSize: "3rem",
                fontWeight: "bold",
                color: "rgb(9, 182, 162)", // A color that matches the blue in your logo
                textAlign: "center",
                width: "100%"
              }}
            >
              genifyl
            </Link>
          <div
            onClick={() => setIsMobileMenuActive(false)}
            className="mobile-nav-close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="white"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 122.878 122.88"
              enableBackground="new 0 0 122.878 122.88"
              xmlSpace="preserve"
            >
              <g>
                <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
              </g>
            </svg>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
