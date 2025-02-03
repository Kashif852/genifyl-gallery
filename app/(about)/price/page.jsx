import Cta from "@/components/common/Cta";
import FlatTitle3 from "@/components/about/FlatTitle3";

import Mouse from "@/components/common/Mouse";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header3";
import Pricing1 from "@/components/homes/home-3/Pricing";
import Pricing2 from "@/components/homes/home-1/Pricing";
import React from "react";
import Partners from "@/components/about/Partners";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "Pricing",
  description: "genifyl - AI Writer & Copywriting Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle3 />
          <div className="pt-130">
            <Pricing1 />
          </div>
          <Pricing2 />
          <Partners />
          <Cta />
          <Footer1 />
        </div>
      </div>
      {/* <Mouse /> */}
      <ScrollTop />
    </>
  );
}
