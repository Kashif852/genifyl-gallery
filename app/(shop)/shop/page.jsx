import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Mouse from "@/components/common/Mouse";
import Cta from "@/components/common/Cta";
import ShopTitle from "@/components/shop/ShopTitle";
import Shop from "@/components/shop/Shop";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "Shop || genify - AI Writer & Copywriting Nextjs Template",
  description: "genify - AI Writer & Copywriting Nextjs Template",
};
export default function Home() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <ShopTitle />
          <Shop />

          <Cta />
          <Footer1 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
