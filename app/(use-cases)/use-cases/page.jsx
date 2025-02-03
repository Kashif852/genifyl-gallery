import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header3";
import Faq from "@/components/use-cases/Faq";
import Features from "@/components/use-cases/Features";
import FlatTitle from "@/components/use-cases/FlatTitle";
import Pricing from "@/components/use-cases/Pricing";
import Tools from "@/components/use-cases/Tools";
import React from "react";
export const metadata = {
  title: "Use Cases",
  description: "Explore genifyl's AI-powered writing solutions. Enhance productivity with advanced AI tools tailored for copywriting and content creation.",
  keywords: "genifyl, AI Writer, copywriting, AI tools, content creation, use cases",
  openGraph: {
    title: "Use Cases",
    description: "Discover genifyl's powerful use cases for AI-driven copywriting and content creation. Empower your projects with cutting-edge AI solutions.",
    url: "https://yourwebsite.com/use-cases",
    images: [
      {
        url: "https://yourwebsite.com/assets/images/use-cases-og-image.png",
        width: 1200,
        height: 630,
        alt: "Use Cases - genifyl AI Writer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases || genifyl",
    description: "Discover genifyl's powerful use cases for AI-driven copywriting and content creation.",
    images: ["https://yourwebsite.com/assets/images/use-cases-twitter-image.png"],
  },
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle />
          <Tools />
          {/* <Features /> */}
          {/* <Pricing /> */}
          {/* <Faq /> */}

          {/* <Cta /> */}

          <Footer1 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
