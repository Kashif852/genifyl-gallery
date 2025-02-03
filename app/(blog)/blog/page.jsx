import Blog from "@/components/blog/Blog";
import FlatTitle from "@/components/blog/FlatTitle";
import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import React from "react";
export const metadata = {
  title: "Blog",
  description: "genifyl - AI Writer & Copywriting Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle />
          <Blog />

          <Cta />

          <Footer1 />
        </div>
      </div>
      {/* <Mouse /> */}
      <ScrollTop />
    </>
  );
}
