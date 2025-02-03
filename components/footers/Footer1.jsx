"use client";
import { imageSources } from "@/data/avaters";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { socialMediaIcons } from "@/data/socials";

import { menuItems, menuItems2, menuItems3 } from "@/data/footer";
export default function Footer1() {
  return (
    <footer id="footer">
      <Image
        className="item1 block-star"
        src="/assets/images/item-background/start.png"
        width={100}
        height={100}
        alt="image"
      />
      <div className="item2 block-blur-1" />
      <div className="item3 block-blur-2" />
      <div className="item4 block-blur-3" />
      <div className="item5 block-blur-4" />
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="logo-footer" id="logo-footer">
                <Link href={`/`}>
                  <Image
                    id="logo_footer"
                    src="/assets/images/logo/logo.png"
                    alt="image"
                    width={166}
                    height={40}
                    data-retina="/assets/images/logo/logo@2x.png"
                  />
                </Link>
              </div>
              <div className="avatar-wrapper">
                <p>
                  25600+ People Use <span>package</span>
                </p>
                <div className="wg-list-avatar">
                  {imageSources.map((elm, i) => (
                    <a key={i} href="#">
                      <Image width={100} height={100} src={elm} alt="image" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="footer-title">About</div>
            <p className="text">
            Transform your product photos into engaging cartoon art with our AI-powered platform. Perfect for e-commerce, marketing, and branded merchandise. Stand out in the digital marketplace with unique, eye-catching visuals.
            </p>
            <ul className="wg-social">
              {socialMediaIcons.map((icon, index) => (
                <li key={index}>
                  <a href={icon.href} className={icon.className} />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <div className="footer-title ml--3">Contact Us</div>
            <p className="text">
            33309 1st Way S, Suite A206,
            Washington 98003, United States <br></br>
            contact@genifyl.com<br></br>
            +1 727-833-3236
            </p>
          </div>
          <div className="col-12">
            <div className="footer-bottom">
              <p className="text mb-0">
                Copyright @{new Date().getFullYear()},{" "}
                <a className="tf-color" href="#">
                  genifyl
                </a>{" "}
                All Rights Reserved
              </p>
              <ul className="">
                <li>
                  <a href="#">Terms Of Use </a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
