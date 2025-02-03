"use client";

export default function CommentForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="comment-form">
      <div className="columns flex justify-between gap20">
        <fieldset className="name">
          <input
            type="text"
            placeholder="Full Name"
            className="mb-30"
            name="name"
            tabIndex={2}
            defaultValue=""
            aria-required="true"
            required
          />
        </fieldset>
        <fieldset className="email">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="mb-30"
            name="email"
            tabIndex={2}
            defaultValue=""
            aria-required="true"
            required
          />
        </fieldset>
      </div>
      <fieldset className="website">
        <input
          type="text"
          placeholder="Website"
          className="mb-30"
          name="website"
          tabIndex={2}
          defaultValue=""
          aria-required="true"
          required
        />
      </fieldset>
      <fieldset className="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Message"
          className="mb-30"
          tabIndex={4}
          aria-required="true"
          required
          defaultValue={""}
        />
      </fieldset>
      <div className="">
        <button className="" type="submit">
          Send Comments
        </button>
      </div>
    </form>
  );
}
