import React from 'react';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import posed from 'react-pose';
import styled from 'styled-components';
import tw from 'tailwind.macro';

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

const Divider = styled.div`
  ${tw`w-full z-10 bottom-0 block absolute bg-no-repeat pointer-events-none`}
  background-image: url(/svg/divider.svg);
  background-size: 100% 100px;
  height: 100px;
`;

const KitchenSink = ({ data }) => (
  <Layout noStyle maxWidth="100%">
    <SEO title="Kitchensink" />

    <Section fullWidth className="bg-boost-secondary-05">
      <h6>Full-width Section</h6>
    </Section>

    <Section fullWidth className="bg-boost-secondary-10 relative">
      <h6>Full-width Section w Divider</h6>
      <Divider />
    </Section>

    <Section className="bg-boost-secondary-05">
      <h6>Regular Section</h6>
      <div className="flex items-center justify-center flex-wrap z-20 pb-6">
        <Link
          to="/trial"
          className="p-2 m-2 md:px-8 w-10/12 md:w-auto h-12 md:h-16
            text-l uppercase font-bold text-center text-boost-secondary
            border border-transparent bg-boost-warning
            hover:bg-boost-primary hover:opacity-100 raise
            rounded flex items-center justify-center transition-all">
          CTA Primary
        </Link>
        <Link
          to="/demo"
          className="p-2 m-2 md:px-8 w-10/12 md:w-auto h-12 md:h-16
            text-l uppercase font-bold text-center text-boost-secondary
            border border-boost-warning bg-white bg-opacity-50
            hover:bg-white hover:border-boost-primary hover:opacity-100 raise
            rounded flex items-center justify-center transition-all">
          CTA Secondary
        </Link>
      </div>
    </Section>

    <Section>
      <h6>Typography + Staggered Animation</h6>
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
      <h6>Gatsby Images</h6>
      <div className="w-full flex flex-col lg:flex-row flex-fluid-img">
        <Img fluid={data.imageOne.childImageSharp.fluid} alt="One" title="One" />
        <Img fluid={data.imageTwo.childImageSharp.fluid} alt="Two" title="Two" />
        <Img fluid={data.imageThree.childImageSharp.fluid} alt="Three" title="Three" />
      </div>
    </Section>
  </Layout>
);

export default KitchenSink;

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
    heroImageMobile: file(relativePath: { eq: "home/hero-ecng-vert.png" }) {
      ...fluidImage
    }
  }
`;
