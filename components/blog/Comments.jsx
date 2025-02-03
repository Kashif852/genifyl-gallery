import React from "react";
import Image from "next/image";

export default function Comments() {
  return (
    <div className="widget-comment">
      <div className="title">Popular Comments</div>
      <ul>
        <li className="comment-box">
          <Image
            src="/assets/images/avatar/avatar-02.png"
            width={200}
            height={200}
            alt="image"
          />
          <div className="comment-right">
            <div className="top">
              <h6 className="name">William L. Jackson</h6>
              <div className="date">May 25, 2023</div>
            </div>
            <p className="">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse molestiae consequatur qui dolorem eum fugiat voluptas
            </p>
            <div className="reply">
              <a href="#" className="tf-button-default">
                Reply <i className="icon-arrow-right2" />
              </a>
            </div>
          </div>
        </li>
        <li className="comment-box rep">
          <Image
            src="/assets/images/avatar/avatar-03.png"
            width={200}
            height={200}
            alt="image"
          />
          <div className="comment-right">
            <div className="top">
              <h6 className="name">James M. Stovall</h6>
              <div className="date">May 25, 2023</div>
            </div>
            <p className="">
              At vero eos et accusamus et iusto dignissimos ducimus blanditiis
              sapiente praesentium voluptatum deleniti atque
            </p>
            <div className="reply">
              <a href="#" className="tf-button-default">
                Reply <i className="icon-arrow-right2" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
