import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header3";
import Features2 from "@/components/use-cases/Features2";
import FlatTitle from "@/components/use-cases/useCasesDetails/FlatTitle";
import Steps from "@/components/use-cases/Steps";
import { useCases } from "@/data/features";
export const metadata = {
  title: "Use Cases Details",
  description: "Explore the detailed use cases of genifyl's AI-powered writing solutions. Discover how AI can transform your copywriting and content creation.",
  keywords: "genifyl, AI Writer, copywriting, AI tools, use cases, content creation, detailed use cases",
  openGraph: {
    title: "Use Cases Details || genifyl",
    description: "Detailed insights into how genifyl's AI tools can revolutionize your content creation and copywriting workflows.",
    url: "https://yourwebsite.com/use-cases/details",
    images: [
      {
        url: "https://yourwebsite.com/assets/images/use-cases-details-og-image.png",
        width: 1200,
        height: 630,
        alt: "Use Cases Details - genifyl AI Writer",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases Details || genifyl",
    description: "Detailed insights into how genifyl's AI tools can revolutionize your content creation and copywriting workflows.",
    images: ["https://yourwebsite.com/assets/images/use-cases-details-twitter-image.png"],
  },
};
import React from "react";
import { useCasesGalleryDetails } from "@/data/workItems";
import Gallery from "@/components/gallery/Gallery";

export default function page({ params }) {
  // const useCaseItem =
  //   useCases.filter((elm) => elm.id == params.id)[0] || useCases[0];

  // Get the specific use case item
  const useCaseItem = useCases.filter((elm) => elm.id == params.id)[0] || useCases[0];
  
  // Get the matching gallery details
  const galleryDetails = useCasesGalleryDetails.find(item => item.id == params.id);

  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle />
          <Features2 useCaseItem={galleryDetails?.realImageDetails} />
          <Gallery photoItemsMain={galleryDetails} />
          {/* <Steps /> */}
          <Footer1 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
