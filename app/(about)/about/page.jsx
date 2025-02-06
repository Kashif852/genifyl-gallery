import FlatTitle from "@/components/about/FlatTitle";
import VideoSection from "@/components/about/VideoSection";
import Footer1 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header2";
import React from "react";
import ScrollTop from "@/components/common/ScrollTop";
import MissionVision from "@/components/about/MissionVision";

export const metadata = {
  title: "About Us || genifyl",
  description: "Learn about Cartoonify by genifyl, an innovative AI-powered tool designed to transform images into stunning cartoons effortlessly.",
  keywords: "About Cartoonify, genifyl, AI tools, cartoon creation, image transformation, AI-powered cartoons",
  openGraph: {
    title: "About Us || Cartoonify by genifyl",
    description: "Discover Cartoonify by genifyl, a groundbreaking AI tool that revolutionizes image-to-cartoon transformation with cutting-edge technology.",
    url: "https://yourwebsite.com/about",
    images: [
      {
        url: "https://yourwebsite.com/assets/images/cartoonify-about-og-image.png",
        width: 1200,
        height: 630,
        alt: "About Cartoonify - genifyl",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us || Cartoonify by genifyl",
    description: "Explore Cartoonify by genifyl, an innovative AI tool for image-to-cartoon transformations.",
    images: ["https://yourwebsite.com/assets/images/cartoonify-about-twitter-image.png"],
  },
};

export default function page() {
  return (

     <div className="page-green">
            <div id="wrapper">
              <div id="page" className="home2">
              <Header1 />
              <FlatTitle />
              <MissionVision/>
              {/* <VideoSection /> */}
              <Footer1 />
              </div>
            </div>{" "}
            
            <ScrollTop />
          </div>
  );
}
