import Footer3 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
import Banner from "@/components/homes/home-3/Banner";
import Generation from "@/components/homes/home-3/Generation";
import Faq from "@/components/use-cases/Faq";
import PhotoGallery from "@/components/homes/home-3/PhotoGallery";
import Blogs from "@/components/homes/home-3/Blogs";
import Partners from "@/components/homes/home-3/Partners";
import Pricing from "@/components/homes/home-1/Pricing";
import Works from "@/components/homes/home-3/Works";
import Generation2 from "@/components/homes/home-3/Generation2";
import React from "react";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Features from "@/components/about/Features";
import FeaturesIamgeRight from "@/components/about/FeaturesIamgeRight";
import Roadmap from "@/components/homes/home-1/Roadmap";
import Cta from "@/components/common/Cta";
import TabNavigation from "@/components/homes/home-3/TabNavigation/TabNavigation";
import EditorLanguages from "@/components/homes/home-2/EditorLanguages";
export const metadata = {
  title: "Home 3 || genify - AI Writer & Copywriting Nextjs Template",
  description: "genify - AI Writer & Copywriting Nextjs Template",
};
export default function page() {
  const paragraphs1 = [
    "Unleash your creativity with our cutting-edge AI-powered cartoon generator, transforming your photos into stunning cartoon masterpieces in just seconds. Whether it's a cherished memory, a personal gift, or a standout promotional piece, our tool offers unmatched quality and ease of use—no design experience needed! Let your imagination take the lead as you create visuals that resonate with your style and purpose.",
  ];
  

  const paragraphs2 = [
    "Experience the joy of transforming your favorite photos into breathtaking, personalized wall art with our AI-powered generator. Whether it’s a cherished memory, a creative decor idea, or a heartfelt gift, we make it simple to bring your vision to life. No design skills? No problem—our tool is designed for everyone!",
 ];

 const paragraphs3 = [
  "Step into a world of endless creativity with our AI scene generator! Transform your photos into breathtaking, custom-designed scenes that evoke emotion and tell a story. Whether you're crafting a magical fairytale, creating cinematic visuals, or designing personalized artwork, our cutting-edge tool makes it effortless. Let your ideas flow, and watch as your vision comes to life.",
];
  
  return (
    <div className="page-blue">
      <div id="wrapper">
        <Header3 />
        <Banner />
        <TabNavigation/>
        <Features
          imageSrc="/assets/images/home-page/gif/2.gif"
          imageAlt="Usecase-1"
          heading="Usecase-1"
          subheading="Turn Photos into Custom Cartoon Art"
          paragraphs={paragraphs1}
        />
        {/* <FeaturesIamgeRight
          imageSrc="/assets/images/home-page/feature/1.png"
          imageAlt="Usecase-2"
          heading="Usecase-2"
          subheading="Transform Your Space with Custom Wall Art"
          paragraphs={paragraphs2}
        /> */}
        <FeaturesIamgeRight
          imageSrc="/assets/images/home-page/feature/2.png"
          imageAlt="Usecase-3"
          heading="Usecase-3"
          subheading="Create Stunning Scenes from Your Photos"
          paragraphs={paragraphs3}
        />
         <EditorLanguages />
         {/* <Works /> */}
        {/* <Roadmap /> */}
        <PhotoGallery />
        <Generation />
        <Generation2 />
        {/* <Pricing /> */}
        <div style={{marginTop: "12rem"}}>
        <Faq />
        </div>
        {/* <Blogs /> */}
        {/* <Partners /> */}
        {/* <Cta /> */}
        <Footer3 />
      </div>
      {/* <Mouse /> */}
      <ScrollTop />
    </div>
  );
}
