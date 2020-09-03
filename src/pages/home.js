import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import posed from 'react-pose';

import Layout from '../components/layout';
import Section from '../components/section';
import SEO from '../components/seo';

const AnimStagger = posed.div({
  enter: { staggerChildren: 100, delayChildren: 500 },
});
const Anim = posed.span({
  init: { display: 'block', marginLeft: 50 },
  enter: { marginLeft: 0, opacity: 1 },
  exit: { opacity: 0 },
});

const IndexPage = ({ data }) => (
  <Layout noStyle maxWidth="100%">
    <SEO title="Cloud Based Intake and Marketing Automation for Law Firms" />
    <div className="w-full flex flex-col lg:flex-row flex-fluid-img justify-center">
      <Img
        fluid={props.data.heroImage.childImageSharp.fluid}
        alt="Engage Convert Nurture Grow"
        style={{ maxWidth: 1706, marginLeft: -253, marginRight: -253 }} />
    </div>
    <Section>
      <AnimStagger>
        <Anim><h1>Heading One</h1></Anim>
        <Anim><h2>Heading Two</h2></Anim>
        <Anim><h3>Heading Three</h3></Anim>
        <Anim><h4>Heading Four</h4></Anim>
        <Anim><h5>Heading Five</h5></Anim>
        <Anim><h6>Heading Six</h6></Anim>
        <Anim><p>Text</p></Anim>
        <Anim>Boost icon: <span className="boosticon icon-logo" /></Anim>
        <Anim>Elegant icon: <span className="eleganticon icon_images" /></Anim>
      </AnimStagger>
    </Section>
    <Section>
      <div className="w-full flex flex-col lg:flex-row flex-fluid-img">
        <Img fluid={data.imageOne.childImageSharp.fluid} alt="One" title="One" />
        <Img fluid={data.imageTwo.childImageSharp.fluid} alt="Two" title="Two" />
        <Img fluid={data.imageThree.childImageSharp.fluid} alt="Three" title="Three" />
      </div>
    </Section>
  </Layout>
);

export default IndexPage;

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
    heroImage: file(relativePath: { eq: "home/hero-ecng.png" }) {
      childImageSharp {
        fluid(maxWidth: 1706) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
