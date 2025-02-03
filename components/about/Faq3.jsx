import React from "react";
import Accordion from "../common/Accordion";
import { faqs4 } from "@/data/faq";
import Image from "next/image";

export default function Faq3() {
  return (
    <div className="faqs-wrap wrap-faqs-3">
      <div className="item1" />
      <div className="item2" />
      <Image
        className="item3"
        src="/assets/images/avatar/user-01.png"
        width={215}
        height={215}
        alt="image"
      />
      <Image
        className="item4"
        src="/assets/images/avatar/user-04.png"
        width={240}
        height={240}
        alt="image"
      />
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-md-8">
            <div className="heading-section wow fadeInUp text-center">
              <div className="main-title">
                Frequently Asked{" "}
                <span className="animation-text">questions</span>
              </div>
              <div className="text">
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque <br />
                totam rem aperiam eaque quae abillo inventore veritatis
              </div>
            </div>
            <div className="flat-accordion2">
              <Accordion faqData={faqs4} toggleClass="flat-toggle2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
