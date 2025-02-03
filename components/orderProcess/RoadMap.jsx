"use client";
import React from "react";
import Link from "next/link";
const roadMapItems = [
  {
    number: "01",
    image: "/assets/images/item-background/roadmap-1.png",
    title: "Contact Us",
    description: "Reach out via WhatsApp, email, or contact form. Our team will respond within 24 hours with our painting catalog and options.",
    link: "#",
  },
  {
    number: "02",
    image: "/assets/images/item-background/roadmap-2.png",
    title: "Select Your Artwork",
    description: "Choose from our gallery or catalog of paintings. Share your selected design or reference photos for custom artwork creation.",
    link: "#",
  },
  {
    number: "03",
    image: "/assets/images/item-background/roadmap-3.png",
    title: "Initial Booking",
    description: "Secure your order with just 5% initial payment. Get detailed quote with size options, framing choices, and timeline.",
    link: "#",
  },
  {
    number: "04",
    image: "/assets/images/item-background/roadmap-4.png",
    title: "Art Creation",
    description: "Our expert artists begin crafting your selected masterpiece. Receive progress updates and provide feedback throughout the process.",
    link: "#",
  },
  {
    number: "05",
    image: "/assets/images/item-background/roadmap-5.png",
    title: "Final Payment & Delivery",
    description: "Complete the remaining payment and receive your professionally framed artwork with authenticity certificate and care instructions.",
    link: "#",
  }
];

export default function RoadMap() {
  return (
    <div className="wg-road-map pt-50 pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="road-map-content">
              {roadMapItems.map((item, index) => (
                <div
                  className={`road-map-item item-${index + 1} wow fadeInUp`}
                  key={index}
                  style={{marginBottom: "70px"}}
                >
                  <div className="number">{item.number}</div>
                  {/* <Image src={item.image} alt={item.title} width={270} height={280} /> */}
                  <h4>
                    <a href={item.link}>{item.title}</a>
                  </h4>
                  <p>{item.description}</p>
                  <span className="arrow" >
                    <svg
                     
                      width={51}
                      height={16}
                      viewBox="0 0 51 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.292892 7.29046C-0.0976296 7.68098 -0.0976295 8.31415 0.292893 8.70467L6.65685 15.0686C7.04738 15.4592 7.68054 15.4592 8.07107 15.0686C8.46159 14.6781 8.46159 14.0449 8.07107 13.6544L2.41422 7.99756L8.07107 2.34071C8.46159 1.95018 8.46159 1.31702 8.07107 0.926495C7.68054 0.53597 7.04738 0.53597 6.65685 0.926495L0.292892 7.29046ZM51 6.99756L1 6.99756L1 8.99756L51 8.99756L51 6.99756Z"
                        fill="#6844ED"
                      />
                    </svg>
                  </span>
                  {
                    index === 4 && <div className="col-12 text-center">
                     <div >
                     <Link href="/contact-us" className="tf-button style-2" style={{width: "100%", marginTop: "2rem"}}>
                        <span>Place Your Order Now</span>
                        <i className="icon-arrow-right2" />
                      </Link>
                      <p className="guarantee-text mt-3">
                        100% Money Back Guarantee , Fast Response Within 24 Hours
                      </p>
                     </div>
                  </div>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          {/* Additional Services Banner */}
          <div className="col-12 mb-5">
            <div className="services-banner text-center wow fadeInUp">
              <p className="additional-services" style={{color: "white", fontSize: "1.5rem"}}>
                Additional Premium Services Include:
              </p>
                <p style={{color: "rgb(9, 182, 162)"}}>
                  <span className="service-tag" style={{color: "rgb(9, 182, 162)"}}>Premium Quality Frames</span>
                  <span className="service-tag" style={{color: "rgb(9, 182, 162)"}}>Custom Sizes</span>
                  <span className="service-tag" style={{color: "rgb(9, 182, 162)"}}>Worldwide Shipping</span>
                  <span className="service-tag" style={{color: "rgb(9, 182, 162)"}}>Certificate of Authenticity</span>
                </p>
             
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .additional-services {
          margin: 20px 0;
          color: #666;
        }
        .service-tag {
          display: inline-block;
          margin: 0 10px;
          padding: 5px 15px;
          background: #f5f5f5;
          border-radius: 20px;
          color: #6844ED;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}