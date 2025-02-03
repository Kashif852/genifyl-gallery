import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import ContactInfo from "@/components/contact/ContactInfo";
import FlatTitle from "@/components/signup/FlatTitle";
import Map from "@/components/contact/Map";
import Message from "@/components/contact/Message";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header3";
export const metadata = {
  title: "Sign Up",
  description: "Sign Up",
};
import React from "react";
import RegistrationArea from "@/components/signup/RegistrationArea";

export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          {/* <FlatTitle /> */}
          <RegistrationArea/>
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
