import BlogDetail from "@/components/blog/BlogDetail";
import FlatTitle2 from "@/components/blog/FlatTitle2";
import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { allBlogs } from "@/data/blogs";

import React from "react";
export const metadata = {
  title: "Blog Details",
  description: "genifyl - AI Writer & Copywriting Nextjs Template",
};
export default function page({ params }) {
  const singleBlog =
    allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle2 singleBlog={singleBlog} />
          <BlogDetail />

          <Cta />

          <Footer1 />
        </div>
      </div>
      {/* <Mouse /> */}
      <ScrollTop />
    </>
  );
}
