import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Faq from "@/components/homes/home-4/Faq";
import Banner from "@/components/homes/home-4/Banner";
import Clients from "@/components/homes/home-4/Clients";
import Cta from "@/components/homes/home-4/Cta";
import Features from "@/components/homes/home-4/Features";
import Partners from "@/components/homes/home-4/Partners";
import Pricing from "@/components/homes/home-4/Pricing";
import Services from "@/components/homes/home-4/Services";
import WhyChoose from "@/components/homes/home-4/WhyChoose";
import React from "react";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "Home 4 || genifyl - AI Writer & Copywriting Nextjs Template",
  description: "genifyl - AI Writer & Copywriting Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-yellow">
        <div id="wrapper">
          <div id="page" className="home4">
            <Header4 />
            <Banner />
            <Partners />
            <WhyChoose />
            <Features />
            <Services />
            <Clients />
            <Pricing />
            <Faq />
            <Cta />
            <Footer4 />
          </div>
        </div>
        
        <ScrollTop />
      </div>
    </>
  );
}
