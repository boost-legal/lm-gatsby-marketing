import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = (props) => (
  <Layout>
    <SEO title="" customTitle="Lawmatics - Cloud Based Intake and Marketing Automation for Law Firms" />
    <h1>Heading One</h1>
    <p>Text</p>
    <div className="w-full flex flex-fluid-img">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="One" />
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="Two" />
        <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="Three" />
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