"use client";

export default function Features2() {
  return (
    <div className="wg-create-design-2 pt-130 pb-130">
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-xl-5 col-md-6">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6 className="">Need Any Help</h6>
                <div className="main-title">
                  Have Any Questions <br />
                  on your <span className="animation-text">minds</span>
                </div>
              </div>
              <p className="">
                We denounce with righteous indignation and dislike <br />
                men who are beguile demoralized charms
              </p>
              <ul className="list-item mb-30">
                <li>
                  <i className="icon-tick" />
                  Save time Rapid AI-driven generation.
                </li>
                <li>
                  <i className="icon-tick" />
                  No Outdates Continuous code documentation refresh.
                </li>
                <li>
                  <i className="icon-tick" />
                  Consistency Consistent code documentation
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-5 col-md-6">
            <div className="wg-feedback wow fadeInUp">
              <h3>Send us Message</h3>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="comment-form"
              >
                <fieldset className="email">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="style-1 mb-10"
                    name="email"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset>
                  <select name="" id="" className="style-1 mb-10">
                    <option value="Subject">Subject</option>
                    <option value="Subject">AI</option>
                    <option value="Subject">Media</option>
                  </select>
                </fieldset>
                <fieldset className="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    className="style-1 mb-15"
                    tabIndex={4}
                    aria-required="true"
                    required
                    defaultValue={""}
                  />
                </fieldset>
                <div className="">
                  <button className="" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
