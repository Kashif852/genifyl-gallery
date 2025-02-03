import Head from "next/head";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cta from "@/components/homes/home-1/Cta";

import Mouse from "@/components/common/Mouse";
import Link from "next/link";
import Image from "next/image";
import ScrollTop from "@/components/common/ScrollTop";
// export const metadata = {
//   title: "Page Not Found || genifyl",
//   description: "genifyl - AI Tool",
// };
export default function Home() {
  return (
    <>
     <Head>
        <title>404 Page Not Found || genifyl</title>
        <meta name="description" content="Oops! The page you're looking for cannot be found. Return to the homepage or explore genifyl's powerful AI tools." />
        <meta name="keywords" content="404 error, Page Not Found, genifyl, AI tools" />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="genifyl" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="404 Page Not Found || genifyl" />
        <meta property="og:description" content="Oops! The page you're looking for cannot be found. Return to the homepage or explore genifyl's powerful AI tools." />
        <meta property="og:url" content="https://yourwebsite.com/404" />
        <meta property="og:image" content="https://yourwebsite.com/assets/images/bg-section/404.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="404 Page Not Found || genifyl" />
        <meta property="twitter:description" content="Oops! The page you're looking for cannot be found. Return to the homepage or explore genifyl's powerful AI tools." />
        <meta property="twitter:image" content="https://yourwebsite.com/assets/images/bg-section/404.png" />

        {/* Favicon */}
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
      </Head>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <>
            {/* flat-title-page */}
            <div className="flat-title-page">
              <div className="item1 block-blur-1" />
              <div className="item2 block-blur-2" />
              <div className="item3 block-blur-3" />
              <div className="item4 block-blur-4" />
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading">404</div>
                    <ul className="breadcrumbs">
                      <li className="icon-arrow-right relative">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="active">
                        <a href="#">404 Error</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /flat-title-page */}
            {/* 404-page */}
            <div className="page-404-wrap pb-130 pt-130">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-5">
                    <div className="content">
                      <div className="heading-section wow fadeInUp">
                        <div className="main-title">
                          Sorry! <br />
                          This Page Can’t <br />
                          Be <span className="animation-text">Found</span>
                        </div>
                      </div>
                      <p>
                        Ut enim ad minima veniam, quis nostrum corporis suscipit
                        laboriosam nisi ut aliquid exea
                      </p>
                      <Link href="/" className="tf-button">
                        <span>Go To Home</span>
                        <i className="icon-arrow-right2" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <Image
                      width={651}
                      height={424}
                      src="/assets/images/bg-section/404.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /404-page */}
          </>

          <Cta />
          <Footer1 />
        </div>
      </div>
      {/* <Mouse /> */}
      <ScrollTop />
    </>
  );
}
