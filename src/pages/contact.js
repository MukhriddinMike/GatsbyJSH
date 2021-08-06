import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To get in Touch?</h3>
            <p>
              Tofu distillery austin, kitsch copper mug meditation hell of
              master cleanse jean shorts readymade meggings skateboard cardigan.
              Banh mi prism banjo raw denim pinterest slow-carb four loko cronut
              photo booth.
            </p>
            <p>Truffaut godard man braid tofu post-ironic tote bag.</p>
            <p>
              Cronut copper mug narwhal viral leggings. Bushwick try-hard
              farm-to-table jean shorts umami, vape kinfolk tofu knausgaard
              ramps affogato austin meggings.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email"></label>
                <input type="text" name="email" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="message"></label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
