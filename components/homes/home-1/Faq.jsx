"use client";
import Accordion from "@/components/common/Accordion";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Faq() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="faqs-wrap">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center wow fadeInUp">
                <h6>FAQs</h6>
                <div className="main-title">
                  Frequently Asked{" "}
                  <span className="animation-text">questions</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="flat-accordion">
                <Accordion />
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-wrap wow fadeInUp">
                <Image
                  src="/assets/images/bg-section/image-05.png"
                  width={560}
                  height={360}
                  alt="image"
                />
                <a onClick={() => setOpen(true)} className="popup-youtube">
                  <div className="icon">
                    <i className="icon-play" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Y8XpQpW5OVY"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
