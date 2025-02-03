import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import ContactInfo from "@/components/contact/ContactInfo";
import FlatTitle from "@/components/login/FlatTitle";
import Map from "@/components/contact/Map";
import Message from "@/components/contact/Message";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header3";
export const metadata = {
  title: "Login",
  description: "Login",
};
import React from "react";
import LoginArea from "@/components/login/LoginArea";

export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          {/* <FlatTitle /> */}
          <LoginArea/>
          {/* <ContactInfo /> */}
          {/* <Message /> */}
          {/* <Map /> */}

          {/* <Cta /> */}

          <Footer1 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
