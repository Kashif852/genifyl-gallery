import ScrollTop from "@/components/common/ScrollTop";
import FlatTitle from "@/components/gallery/FlatTitle";
import GalleryWithTabs from "@/components/gallery2/GalleryWithTabs";

import Footer1 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header2";
export const metadata = {
  title: "Gallery ||  genifyl",
  description: "Explore the Cartoonify gallery by genifyl to see stunning AI-generated cartoons. Discover the possibilities of AI-powered cartoon creation.",
  keywords: "Gallery, Cartoonify, genifyl, AI cartoons, AI-generated images, cartoon gallery",
  openGraph: {
    title: "Gallery || Cartoonify by genifyl",
    description: "Dive into the Cartoonify gallery by genifyl and explore AI-generated cartoon images that bring creativity to life.",
    url: "https://yourwebsite.com/gallery",
    images: [
      {
        url: "https://yourwebsite.com/assets/images/cartoonify-gallery-og-image.png",
        width: 1200,
        height: 630,
        alt: "Cartoonify Gallery - genifyl",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery || Cartoonify by genifyl",
    description: "Explore stunning AI-generated cartoon images in the Cartoonify gallery by genifyl.",
    images: ["https://yourwebsite.com/assets/images/cartoonify-gallery-twitter-image.png"],
  },
};
import React from "react";

export default function page() {
  return (
    <>
      <div className="page-green">
        <div id="wrapper">
          <div id="page" className="home2">
          <Header1 />
          <FlatTitle/>
          <GalleryWithTabs/>
          <Footer1 />
          </div>
        </div>{" "}
        
        <ScrollTop />
      </div>
    </>
  );
}
