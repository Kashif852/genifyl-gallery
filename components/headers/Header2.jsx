"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Sparkles } from 'lucide-react';
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
              {/* <div id="site-logo">
                <div id="site-logo-inner">
                <div
            id="site-logo-inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              cursor: "pointer"
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
                color: "#09b6a2", 
                
              }}
            >
              genifyl
            </Link>
          </div>
                </div>
              </div> */}
              <div id="site-logo" className="relative group cursor-pointer">
  <div 
    className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
  />
  
  <div id="site-logo-inner" className="relative cursor-pointer">
    <div className="flex items-center justify-center h-full p-2">
      <Link
        href="/"
        rel="home"
        className="relative flex items-center gap-2 group/link cursor-pointer"
      >
        <span className="relative inline-block cursor-pointer">
          <span className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          <span 
            className="relative bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent hover:from-teal-300 hover:to-teal-400 transition-all duration-300 cursor-pointer"
            style={{
              fontSize: "2.7rem",
              fontWeight: "bold",
              color: "rgb(9, 182, 162)",
              cursor: "pointer"
            }}
          >
            genifyl
          </span>
        </span>
        <Sparkles className="w-6 h-6 text-teal-400 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 animate-pulse cursor-pointer" />
      </Link>
    </div>
  </div>
  
  <div className="absolute -right-2 -top-2 w-2 h-2 bg-teal-400/50 rounded-full animate-ping" />
  <div className="absolute -left-1 -bottom-1 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse" />
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
                width: "100%",
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
      <style jsx global>{`
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  #site-logo:hover {
    animation: float 3s ease-in-out infinite;
  }

  .animate-ping {
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse {
    50% {
      opacity: .5;
    }
  }
`}</style>
    </header>
  );
}
