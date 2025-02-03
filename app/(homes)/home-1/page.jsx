import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/homes/home-1/Banner";
import Cta from "@/components/homes/home-1/Cta";
import Features from "@/components/homes/home-1/Features";
import Features2 from "@/components/homes/home-1/Features2";
import Faq from "@/components/homes/home-1/Faq";
import Service from "@/components/homes/home-1/Service";
import Partners from "@/components/homes/home-1/Partners";
import Pricing from "@/components/homes/home-1/Pricing";
import Result from "@/components/homes/home-1/Result";
import Roadmap from "@/components/homes/home-1/Roadmap";
import Tool from "@/components/homes/home-1/Tool";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "Home 1 || genify - AI Writer & Copywriting Nextjs Template",
  description: "genify - AI Writer & Copywriting Nextjs Template",
};
export default function Home() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <Banner />
          <Result />
          <Partners />
          <Features />
          <Tool />
          <Features2 />
          <Service />
          <Roadmap />
          <Pricing />
          <Faq />
          <Cta />
          <Footer1 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
