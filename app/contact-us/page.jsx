
import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import ContactInfo from "@/components/contact/ContactInfo";
import FlatTitle from "@/components/contact/FlatTitle";
import Map from "@/components/contact/Map";
import Message from "@/components/contact/Message";
import Footer1 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header2";
import OrderProcess from "@/components/orderProcess/OrderProcess";
import RoadMap from "@/components/orderProcess/RoadMap";

export const metadata = {
  title: "Contact Us || Cartoonify by genifyl",
  description: "Get in touch with the Cartoonify team by genifyl. We are here to answer your queries about our AI-powered cartoon creation tools.",
  keywords: "Contact Cartoonify, genifyl, AI Cartoon Maker, AI tools, Cartoonify project, contact us",
  openGraph: {
    title: "Contact Us || Cartoonify by genifyl",
    description: "Reach out to the Cartoonify team by genifyl for support, inquiries, or feedback about our AI cartoon creation tools.",
    url: "https://yourwebsite.com/contact",
    images: [
      {
        url: "https://yourwebsite.com/assets/images/cartoonify-contact-og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Cartoonify - genifyl",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us || Cartoonify by genifyl",
    description: "Reach out to the Cartoonify team by genifyl for support, inquiries, or feedback about our AI cartoon creation tools.",
    images: ["https://yourwebsite.com/assets/images/cartoonify-contact-twitter-image.png"],
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
          <FlatTitle />
          <ContactInfo />
          <Message />
          <Map />
          <Footer1 />
          </div>
        </div>{" "}
        
        <ScrollTop />
      </div>
    </>
  );
}
