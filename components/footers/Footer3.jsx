"use client";
import { menuItems3 } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
export default function Footer3() {
  return (
    <footer id="footer" className="style-2">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-6">
            <div className="content">
              <div className="logo-footer" id="logo-footer">
                <Link href={`/`}>
                  <Image
                    id="logo_footer"
                    src="/assets/images/logo/logo-blue.png"
                    width={166}
                    height={40}
                    alt="image"
                    data-retina="/assets/images/logo/logo-blue@2x.png"
                  />
                </Link>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natuse voluptatems
                <br />
                accusantium doloremque laudantium
              </p>
              <div className="box-email">
                <i className="icon-mail" />
                <a href="mailto:infogenifyl@gmail.com">infogenifyl@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box-subscribe">
              <h4>
                Subscribe Our <span className="tf-color-blue">Newsletter</span>
              </h4>
              <p className="mb-20">
                Get every single updates to subscribe our newsletter
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="comment-form"
              >
                <fieldset className="email">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className=""
                    name="email"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="">
                  <button className="" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="footer-bottom">
              <ul className="">
                {menuItems3.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
              <p className="text mb-0">
                Copyright @{new Date().getFullYear()},
                <a className="tf-color-blue" href="#">
                  genifyl
                </a>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
