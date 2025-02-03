import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Mouse from "@/components/common/Mouse";
import Cta from "@/components/common/Cta";
import ShopSingleTitle from "@/components/shop/ShopSingleTitle";
import ProductSingle from "@/components/shop/ProductSingle";
import Description from "@/components/shop/Description";
import RelatedProducts from "@/components/shop/RelatedProducts";
import { products } from "@/data/shop";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "Single Product || genifyl - AI Writer & Copywriting Nextjs Template",
  description: "genifyl - AI Writer & Copywriting Nextjs Template",
};
export default function Home({ params }) {
  const productItem =
    products.filter((elm) => elm.id == params.id)[0] || products[0];
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <ShopSingleTitle />
          <ProductSingle productItem={productItem} />
          <Description />
          <RelatedProducts />

          <Cta />
          <Footer1 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
