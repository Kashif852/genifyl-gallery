import Cta from "@/components/common/Cta";
import Faq1 from "@/components/about/Faq1";
import Faq2 from "@/components/about/Faq2";
import Faq3 from "@/components/about/Faq3";
import Features2 from "@/components/about/Features2";

import FlatTitle2 from "@/components/about/FlatTitle2";

import Mouse from "@/components/common/Mouse";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "Faqs",
  description: "genifyl - AI Writer & Copywriting Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="faqs-page">
          <Header1 />
          <FlatTitle2 />
          <Faq1 />
          <Faq2 />
          <Faq3 />
          <Features2 />
          <Cta />

          <Footer1 />
        </div>
      </div>
      {/* <Mouse /> */}
      <ScrollTop />
    </>
  );
}
