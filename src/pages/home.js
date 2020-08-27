import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = (props) => (
  <Layout>
    <SEO title="" customTitle="Lawmatics - Cloud Based Intake and Marketing Automation for Law Firms" />
    <h1>Heading One</h1>
    <h2>Heading Two</h2>
    <h3>Heading Three</h3>
    <h4>Heading Four</h4>
    <h5>Heading Five</h5>
    <h6>Heading Six</h6>
    <p>Text</p>
    <div className="w-full flex flex-col lg:flex-row flex-fluid-img">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="One" title="One" />
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="Two" title="Two" />
        <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="Three" title="Three" />
    </div>
    
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;
export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "home/one.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "home/two.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "home/three.jpg" }) {
      ...fluidImage
    }
  }
`;