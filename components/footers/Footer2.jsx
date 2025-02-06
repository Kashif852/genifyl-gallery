"use client";

import { menuItems, menuItems2, menuItems3 } from "@/data/footer";
import { Phone, Mail, MapPin, Sparkles, Instagram } from 'lucide-react';
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
                className="flex items-center justify-center h-full"
              >
                <Link
                  href={`/`}
                  rel="home"
                  className="main-logo text-4xl font-bold hover:opacity-90 transition-opacity"
                  style={{
                    color: "#09b6a2",
                    textDecoration: "none",
                    fontSize: "5rem"
                  }}
                >
                  genifyl
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-sm-3 col-lg-8 list-1">
            <div className="w-full p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-teal-400" />
                <h2 className="text-2xl font-semibold text-white">Creative Innovation Studio</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg font-medium text-gray-200">
                  Pushing Boundaries in Digital Art ✨
                </p>
                
                <p className="text-gray-300 leading-relaxed" style={{textAlign: "justify"}}>
                  Welcome to our creative hub where innovation meets artistry. Using cutting-edge 
                  technology and creative expertise, we transform ideas into stunning visual experiences. 
                  Each piece in our collection represents the perfect blend of technical precision and 
                  artistic vision.
                </p>
                
                <p className="text-lg font-medium text-gray-200">
                  Discover the future of creative expression 🎨
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-lg-2 list-4">
            <div className="footer-title text-xl mb-4 text-white">Connect With Us</div>
            <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6 hover:bg-slate-700/30 p-3 rounded-lg transition-all">
                <Phone className="w-5 h-5 text-teal-400" />
                <div style={{marginLeft: "1rem"}}>
                  <div className="text-gray-300 text-sm">Contact</div>
                  <div className="text-white">
                    +1 727-833-3236
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 hover:bg-slate-700/30 p-3 rounded-lg transition-all">
                <Mail className="w-5 h-5 text-teal-400" />
                <div style={{marginLeft: "1rem"}}>
                  <div className="text-gray-300 text-sm">Email</div>
                  <div className="text-white">
                    contact@genifyl.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 hover:bg-slate-700/30 p-3 rounded-lg transition-all">
                <MapPin className="w-5 h-5 text-teal-400" />
                <div style={{marginLeft: "1rem"}}>
                  <div className="text-gray-300 text-sm">Location</div>
                  <div className="text-white text-sm">
                    33309 1st Way S, Suite A206
                    <br />Washington 98003, USA
                  </div>
                </div>
              </div>

              <a 
                href="https://instagram.com/genifyl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 hover:bg-slate-700/30 p-3 rounded-lg transition-all group"
              >
                <Instagram className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                <div style={{marginLeft: "1rem"}}>
                  <div className="text-gray-300 text-sm">Follow Us</div>
                  <div className="text-white">
                    @genifyl
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-12">
            <div className="footer-bottom mt-8 py-4 border-t border-gray-800">
              <p className="text-gray-400 mb-0">
                © {new Date().getFullYear()}{" "}
                <a className="text-teal-400 hover:text-teal-300 transition-colors" href="#">
                  genifyl
                </a>{" "}
                All Rights Reserved
              </p>
              <ul className="flex gap-6 text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}