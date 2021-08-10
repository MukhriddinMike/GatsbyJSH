import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const about = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby kitsch af vaporware la croix.</h2>
            <p>
              Plaid polaroid beard biodiesel hashtag. Waistcoat echo park
              fashion axe subway tile shabby chic, master cleanse tattooed
              bushwick.
            </p>
            <p>
              Forage bushwick 8-bit blog master cleanse vegan leggings air plant
              palo kinfolk.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default about
