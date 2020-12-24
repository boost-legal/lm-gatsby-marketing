import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import posed from 'react-pose';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import lmColors from '../helpers/lmColors';

import Link from '../components/link';
import Layout from '../components/layout';
import Section from '../components/section';
import SEO from '../components/seo';
import Arrow from '../assets/svg/link-arrow.svg';

const AnimStagger = posed.div({
  enter: { staggerChildren: 100, delayChildren: 500 },
});
const Anim = posed.span({
  init: { display: 'block', marginLeft: 50 },
  enter: { marginLeft: 0, opacity: 1 },
  exit: { opacity: 0 },
});

const HeroSection = styled.div`
  ${tw`w-full flex flex-col md:flex-row items-center pt-16 relative`}
  background-image: linear-gradient(
    0deg,${lmColors.boostWhite} 0%,${lmColors.boostSecondary10} 85%);
`;

const Hero = styled(Img)`
  margin: 30px 0 0;
  max-width: 615px;
`;

const HeroTitle = styled.h1`
  line-height: 1.1;
  font-size: 45px;
  @media (min-width: 768px) {
    font-size: 55px;
  }
  @media (min-width: 945px) {
    font-size: 65px;
  }
`;

const PreHeader = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: ${lmColors.boostSecondary70};
`;

const List = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 24px 0;
`;

const Check = styled.div`
  ::before{
    content: '';
    font-family: 'boosticons';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: ${lmColors.boostSecondary};
    color: ${lmColors.boostSecondary10};
    border-radius: 100px;
    margin-right: 16px;
  }
`;

const HomePage = ({ data }) => (
  <Layout noStyle maxWidth="100%">
    <SEO title="Cloud Based Intake and Marketing Automation for Law Firms" />

    <HeroSection>
      <Section className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <HeroTitle className="hero pb-0 lg:pb-6 mb-0 lg:mb-6 text-center lg:text-left">
            Grow your firm <br className="hidden md:inline" />like a CEO
          </HeroTitle>
          <div className="w-full flex justify-center flex-fluid-img">
            <Hero
              className="block lg:hidden"
              fluid={[data.heroImage.childImageSharp.fluid]}
              alt="Engage Convert Nurture Grow" />
          </div>
          <p className="text-center lg:text-left text-boost-secondary-70 text-2xl leading-9
            pb-5 lg:pb-8 px-3 lg:px-0 z-20">
            Grow your law firm with the most powerful
            <br className="hidden lg:inline-block" />
            <span className="text-boost-secondary font-bold pr-2 pl-2 lg:pl-0">
              Client Intake
            </span>
            and
            <span className="text-boost-secondary font-bold px-2">
              Marketing Automation CRM
            </span>
            <br className="hidden lg:inline-block" />
            built for the modern practice
          </p>
          <div className="flex items-center justify-center lg:justify-start flex-wrap z-20 pb-6">
            <Link
              to="/trial"
              className="p-2 mb-3 md:mb-0 md:mr-2 md:px-8 py-3 w-10/12 md:w-auto
                text-l uppercase font-extrabold text-center text-boost-secondary
                border border-transparent bg-boost-warning
                hover:bg-boost-primary hover:opacity-100 raise
                rounded flex items-center justify-center transition-all">
              Learn more
            </Link>
            <Link
              to="/demo"
              className="p-2 md:ml-2 md:px-8 py-3 w-10/12 md:w-auto
                text-l uppercase font-extrabold text-center text-boost-secondary
                border border-boost-warning bg-white bg-opacity-50
                hover:bg-white hover:border-boost-primary hover:opacity-100 raise
                rounded flex items-center justify-center transition-all">
              Get a Demo
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <Hero
            className="hidden lg:flex w-full"
            fluid={[data.heroImage.childImageSharp.fluid]}
            alt="Engage Convert Nurture Grow" />
        </div>
      </Section>
    </HeroSection>

    <Section className="w-full flex flex-col lg:flex-row">
      <div
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease"
        className="w-full lg:w-1/2 p-8 rounded-lg lg:mr-4 mb-6 lg:mb-0"
        style={{ backgroundColor: '#FFF6EC' }}>
        <div className="w-full flex flex-col md:flex-row justify-between items-start lg:items-end">
          <div>
            <PreHeader>Best in class</PreHeader>
            <h2 className="leading-9 text-4xl pb-4">
              Client <br className="hidden md:inline" />Intake
            </h2>
          </div>
          <div className="w-full flex items-center justify-center md:justify-end">
            <Img
              className="mb-8"
              style={{ width: 216 }}
              fluid={[data.intakeImg.childImageSharp.fluid]}
              alt="Client Intake" />
          </div>
        </div>
        <p className="text-2xl leading-7">
          Everything you need to get your leads <br className="hidden md:inline" />
          turned into clients
        </p>
        <div className="block mt-8 pb-4">
          <List><Check />Automate your process from lead to client</List>
          <List><Check />Custom forms to gather important info</List>
          <List><Check />Send text messages and emails to engage leads</List>
          <List><Check />Scheduling platform to ensure every lead comes in to see you</List>
        </div>
        <Link to="#" className="font-bold flex text-xl text-boost-primary">
          Learn more
          <Arrow className="ml-2" style={{ fill: `${lmColors.boostPrimary}` }} />
        </Link>
      </div>
      <div
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease"
        className="w-full lg:w-1/2 p-8 rounded-lg lg:ml-4"
        style={{ backgroundColor: '#ECF9FF' }}>
        <div className="w-full flex flex-col md:flex-row justify-between items-start lg:items-end">
          <div>
            <PreHeader>Law firm specific</PreHeader>
            <h2 className="leading-9 text-4xl pb-4">
              Marketing <br className="hidden md:inline" />Automation
            </h2>
          </div>
          <div className="w-full flex items-center justify-center md:justify-end">
            <Img
              className="mb-8"
              style={{ width: 216 }}
              fluid={[data.automationImg.childImageSharp.fluid]}
              alt="Marketing Automation" />
          </div>
        </div>
        <p className="text-2xl leading-7">
          Nurture leads and clients — turning old business <br className="hidden md:inline" />
          into new business
        </p>
        <div className="block mt-8 pb-4">
          <List><Check />Email Marketing suite to engage and nurture contacts and clients</List>
          <List><Check />Custom Reporting and Dashboard, including ROI analysis</List>
          <List><Check />Track where your leads are coming from</List>
          <List><Check />Easily send e.g. birthday emails using our Campaign Builder</List>
        </div>
        <Link to="#" className="font-bold flex text-xl text-boost-blue">
          Learn more
          <Arrow className="ml-2" style={{ fill: `${lmColors.boostBlue}` }} />
        </Link>
      </div>
    </Section>

    <Section>
      <AnimStagger>
        <div
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease">
          <Anim><h1>Heading One</h1></Anim>
        </div>
      </AnimStagger>
    </Section>

  </Layout>
);

export default HomePage;

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
    heroImage: file(relativePath: { eq: "home/hero-trend-up.png" }) {
      childImageSharp {
        fluid(maxWidth: 615) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    intakeImg: file(relativePath: { eq: "home/section-intake.png" }) {
      ...fluidImage
    }
    automationImg: file(relativePath: { eq: "home/section-automation.png" }) {
      ...fluidImage
    }
  }
`;
