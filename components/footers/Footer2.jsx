"use client";

import { menuItems, menuItems2, menuItems3 } from "@/data/footer";
import { Phone, Mail, MapPin, Palette } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
export default function Footer2() {
  return (
    <footer id="footer" className="style-1">
      <div className="item-1" />
      <div className="item-2" />
      <div className="themesflat-container">
        <div className="row">
          <div className="col-sm-12 col-lg-2">
            <div className="logo-footer" id="logo-footer">
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
          <div className="col-sm-3 col-lg-8 list-1">
            <div className="w-full md:w-7/12 sm:w-3/12 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  {/* <Palette className="w-8 h-8 text-purple-600" />  */}
                  <h2 className="text-1xl font-semibold text-gray-800" style={{color: "white"}}>Handcrafted Art</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg font-medium text-gray-700" style={{color: "white"}}>
                    Experience the Magic of Handcrafted Art! 🎨✨
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed" style={{textAlign: "justify", color: "white"}}>
                    Step into a world where creativity meets precision! Our team of 40+ skilled 
                    painters brings imagination to life with every stroke. From intricate sketches 
                    to breathtaking paintings, each piece is a one-of-a-kind masterpiece crafted 
                    with passion.
                  </p>
                  
                  <p className="text-lg font-medium text-gray-700" style={{color: "white"}}>
                    Explore our gallery and witness the beauty of art in its purest form! 🖼️🎭
                  </p>
                </div>
              </div>

          </div>
          <div className="col-sm-3 col-lg-2 list-4" style={{ fontSize: "1.4rem"}}>
            <div className="footer-title ml--3">Contact Us</div>
            <div className="bg-navy-900 text-white p-6 rounded-lg max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <span style={{fontSize: "1.4rem", marginRight: "1rem"}}><Phone className="w-5 h-5" /></span>
                <div>
                  <div className="text-gray-200 mb-1">Phone | WhatsApp</div>
                  <div className="text-sm">
                     +1 727-833-3236
                  </div>
                </div>
              </div><br></br>

              <div className="flex items-center gap-3 mb-4">
                <span style={{fontSize: "1.4rem", marginRight: "1rem"}}><Mail className="w-5 h-5" /></span>
                <div>
                  <div className="text-gray-200 mb-1">Email</div>
                  <div className="text-sm">
                    contact@genifyl.com
                  </div>
                </div>
              </div><br></br>

              <div className="flex items-center gap-3">
                <span style={{fontSize: "1.4rem", marginRight: "1rem"}}><MapPin className="w-5 h-5" /></span>
                
                <div>
                  <div className="text-gray-200 mb-1">Address</div>
                  <div className="text-sm">
                    33309 1st Way S, Suite A206, Washington 98003, United States
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="footer-bottom">
              <p className="text mb-0">
                Copyright @{new Date().getFullYear()},{" "}
                <a className="tf-color-green" href="#">
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
