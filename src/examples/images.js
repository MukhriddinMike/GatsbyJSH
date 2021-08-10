import React from "react"
import styled from "styled-components"
//import big from "../assets/images/big.jpg"
import { StaticImage } from "gatsby-plugin-image"
const images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained/default</h4>
        {/*<StaticImage src="../assets/images/big.jpg" alt="food" />
       <img src={big} alt="food" /> */}
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          //height={400}
          className="example-img"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid;
  }
  .example-img {
    border-radius: 1rem;
    height: 300px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    height: 200px;
  }
`
export default images
