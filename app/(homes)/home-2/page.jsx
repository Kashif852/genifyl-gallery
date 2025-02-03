import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Banner from "@/components/homes/home-2/Banner";
import Cta from "@/components/homes/home-2/Cta";
import Design from "@/components/homes/home-2/Design";
import Design2 from "@/components/homes/home-2/Design2";
import Features from "@/components/homes/home-2/Features";
import EditorLanguages from "@/components/homes/home-2/EditorLanguages";
import Faq from "@/components/homes/home-2/Faq";
import Partners from "@/components/homes/home-2/Partners";
import Pricing from "@/components/homes/home-2/Pricing";
import Testimonials from "@/components/homes/home-2/Testimonials";
import React from "react";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "Home 2 || genifyl - AI Writer & Copywriting Nextjs Template",
  description: "genifyl - AI Writer & Copywriting Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-green">
        <div id="wrapper">
          <div id="page" className="home2">
            <Header2 />
            <Banner />
            <Features />
            <Design />
            <EditorLanguages />
            <Design2 />
            <Pricing />
            <Partners />
            <Testimonials />
            <Faq />
            {/* <Cta /> */}
            <Footer2 />
          </div>
        </div>{" "}
        
        <ScrollTop />
      </div>
    </>
  );
}
