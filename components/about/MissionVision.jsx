// import { listItems3 } from "@/data/features";
// import React from "react";
// import Image from "next/image";

// export default function Design() {
//   return (
//     <div className="wg-create-design style-2 pb-130 pt-130">
//       <div className="themesflat-container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="content">
//               <div className="heading-section wow fadeInUp style-1">
//                 <h6 className="tf-color-green">Our Purpose</h6>
//                 <div className="main-title">
//                   Empowering Artists to Create and{" "}
//                   <span className="animation-text tf-color-green">
//                     Inspire
//                   </span>
//                 </div>
//               </div>
//               <p className="">
//                 We are dedicated to creating a vibrant artistic ecosystem where creativity 
//                 flourishes, artists thrive, and communities are enriched through the 
//                 transformative power of visual arts.
//               </p>
//               <ul className="list-item">
//                 {listItems3.map((item, index) => (
//                   <li key={index}>
//                     <i className={item.icon} />
//                     {item.text}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import Image from "next/image";

const listItems3 = [
  {
    icon: "far fa-check-circle",
    text: "Empower artists through personalized mentorship and skill development programs"
  },
  {
    icon: "far fa-check-circle",
    text: "Create collaborative spaces where artists can share techniques and inspire each other"
  },
  {
    icon: "far fa-check-circle",
    text: "Preserve traditional artistic methods while embracing contemporary expressions"
  },
  {
    icon: "far fa-check-circle",
    text: "Support artists in building sustainable careers through business education"
  },
  {
    icon: "far fa-check-circle",
    text: "Facilitate cultural exchange programs between artists from diverse backgrounds"
  }
];

export default function Design() {
  return (
    <div className="wg-create-design style-2 pb-130 pt-130" style={{height: "100vh"}}>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                <h6 className="tf-color-green">Our Creative Mission</h6>
                <div className="main-title">
                  Cultivating Human Artistry and{" "}
                  <span className="animation-text tf-color-green">
                    Creative Excellence
                  </span>
                </div>
              </div>
              <p className="">
                We believe in the power of human creativity to transform lives and communities. 
                Our mission is to nurture artistic talent through hands-on training, 
                cultural preservation, and meaningful connections between artists and audiences. 
                By fostering a supportive environment for skill development and creative expression, 
                we help artists realize their full potential and create lasting impact through their work.
              </p>
              <ul className="list-item">
                {listItems3.map((item, index) => (
                  <li key={index}>
                    <i className={item.icon} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}