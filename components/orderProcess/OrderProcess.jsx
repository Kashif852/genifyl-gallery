import React from 'react';
import "./OrderProcess"
const OrderProcess = () => {
  const processSteps = [
    {
      step: "1",
      title: "Share Your Vision",
      description: "Tell us about your desired artwork. Upload reference photos or describe your idea, specify size and style preferences.",
      icon: "far fa-lightbulb"
    },
    {
      step: "2",
      title: "Get Your Quote",
      description: "Receive a detailed quote based on your requirements. Free consultation with our art expert to discuss details.",
      icon: "far fa-file-invoice"
    },
    {
      step: "3",
      title: "Confirm & Pay",
      description: "Review and approve the quote, make the 50% advance payment to start your project.",
      icon: "far fa-credit-card"
    },
    {
      step: "4",
      title: "Artwork Creation",
      description: "Our artist begins work, sharing progress updates. Review initial sketch and provide feedback.",
      icon: "far fa-paint-brush"
    },
    {
      step: "5",
      title: "Final Review",
      description: "Approve the final artwork, complete remaining payment, and receive your masterpiece.",
      icon: "far fa-check-circle"
    }
  ];

  return (
    <div className="wg-process-section py-32">
      <div className="themesflat-container">

        
        <div className="row mt-16">
          {processSteps.map((step, index) => (
            <div key={index} className="col-lg-15 col-md-6 mb-8">
              <div className="process-box text-center wow fadeInUp">
                <div className="step-number tf-color-blue mb-4">{step.step}</div>
                <div className="icon mb-4">
                  <i className={step.icon}></i>
                </div>
                <h4 className="title mb-3">{step.title}</h4>
                <p className="description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-16">
          <div className="col-12 text-center">
            <div className="additional-info">
              <h5 className="mb-4">Additional Services</h5>
              <div className="service-tags">
                <span className="tag">Frame Selection</span>
                <span className="tag">Digital Copy</span>
                <span className="tag">Rush Orders</span>
                <span className="tag">Global Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;