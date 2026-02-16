import * as React from "react"

const SubscribeForm = () => {
  return (
    <section className="subscribe-card" aria-label="Blog subscription">
      <h3>Stay Connected</h3>
      <p>
        New posts and updates on elderly care space straight to your inbox.
      </p>
      <form
        name="blog-subscribe"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="subscribe-form"
      >
        <input type="hidden" name="form-name" value="blog-subscribe" />
        <p style={{ display: "none" }}>
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>
        <div className="subscribe-field">
          <label htmlFor="subscribe-name">Your Name</label>
          <input id="subscribe-name" name="name" type="text" required />
        </div>
        <div className="subscribe-field">
          <label htmlFor="subscribe-email">Your Email</label>
          <input id="subscribe-email" name="email" type="email" required />
        </div>
        <div className="subscribe-action">
          <button type="submit">Subscribe</button>
        </div>
      </form>
      <small>2× per month, pure signal, zero fluff.</small>
    </section>
  )
}

export default SubscribeForm
