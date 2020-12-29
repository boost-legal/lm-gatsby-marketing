import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import lmColors from '../helpers/lmColors';

import Link from '../components/link';
import Layout from '../components/layout';
import Section from '../components/section';
import SEO from '../components/seo';
import Arrow from '../assets/svg/link-arrow.svg';
import Quote from '../assets/svg/quote.svg';

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
  margin-bottom: 16px;
  text-transform: uppercase;
  color: ${lmColors.boostSecondary50};
`;

const List = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 20px 0;
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

const QuoteContent = styled.p`
  ${tw`italic leading-8 mb-3`}
  font-size: 20px;
  max-width: 850px;
`;

const QuoteAuthor = styled.p`
  ${tw`mb-0`}
  font-size: 15px;
  color: ${lmColors.boostSecondary50};
  ::before {
    content: '—';
    margin-right: 5px;
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
                text-15 uppercase font-extrabold text-center text-boost-secondary
                border border-transparent bg-boost-warning
                hover:bg-boost-primary hover:opacity-100 raise
                rounded flex items-center justify-center transition-all">
              Learn more
            </Link>
            <Link
              to="/demo"
              className="p-2 md:ml-2 md:px-8 py-3 w-10/12 md:w-auto
                text-15 uppercase font-extrabold text-center text-boost-secondary
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

    {/* CARDS */}
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
          <Arrow className="ml-2 fill-current" />
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
          <Arrow className="ml-2 fill-current" />
        </Link>
      </div>
    </Section>

    {/* QUOTE 1 */}
    <Section>
      <div className="flex flex-col md:flex-row md:items-center justify-center
        mt-2 py-10 md:py-20 px-5 border-t border-b">
        <Quote data-sal="slide-right" data-sal-delay="500" className="md:mr-8 mb-8 md:mb-0" />
        <div className="flex flex-col">
          <QuoteContent>
            Lawmatics is one of the few software that provides such a high level of
            customer service. I love the responsiveness of your company and how often
            you release great features. I will continue to recommend your services
            to my colleagues.
          </QuoteContent>
          <QuoteAuthor>
            Natalie Phan, Natalie Phan Law
          </QuoteAuthor>
        </div>
      </div>
    </Section>

    {/* CRM */}
    <Section>
      <div className="flex flex-col md:flex-row py-10 md:pt-20 items-center justify-center">
        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="w-full md:w-1/2 flex items-center justify-center px-5">
          <Img
            className="block mb-10 md:mb-0"
            style={{ width: 578 }}
            fluid={[data.followupImg.childImageSharp.fluid]}
            alt="Follow-up" />
        </div>
        <div
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="w-full md:w-1/2 flex flex-col px-6">
          <PreHeader>Attorney-client relationship management</PreHeader>
          <h2 className="leading-9 text-4xl mb-0 pb-5">
            Effortless follow-ups
          </h2>
          <p className="text-xl leading-8 mb-0">
            Automate follow-up to ensure that you respond to new potential clients
            immediately. Don&apos;t let anyone fall through the cracks.
          </p>
          <div className="block pt-2 pb-4">
            <List><Check />Greet new leads with a personalized message</List>
            <List><Check />Send out automated reminders and confirmations</List>
            <List><Check />Keep track of all touchpoints in an organized timeline</List>
            <List><Check />Have all client information ready and in one place</List>
          </div>
          <Link to="#" className="font-bold flex text-xl text-boost-secondary">
            Learn more
            <Arrow className="ml-2 fill-current" />
          </Link>
        </div>
      </div>
    </Section>

    {/* MARKETING AUTOMATION */}
    <Section>
      <div className="flex flex-col md:flex-row py-10 md:pt-20 items-center justify-center
        flex-col-reverse">
        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="w-full md:w-1/2 flex flex-col px-6">
          <PreHeader>Marketing Automation</PreHeader>
          <h2 className="leading-9 text-4xl mb-0 pb-5">
            Turn old business into <br className="hidden md:inline" />new business
          </h2>
          <p className="text-xl leading-8 mb-0">
            Engage and re-engage your collected database of past clients and turn them
            into new business. Keep your firm at arm’s reach for them when a new
            opportunity arises.
            The simplest way to create a new stream of revenue!
          </p>
          <div className="block pt-2 pb-4">
            <List><Check />Automated follow up email campaigns</List>
            <List><Check />Deliver e.g. birthday emails automatically with the
              <br className="hidden md:inline" />Email Campaign builder
            </List>
            <List><Check />Track and analyze referral sources and repeat clients</List>
            <List><Check />Create, manage and send newsletters to any segment
              <br className="hidden md:inline" />of clients or leads
            </List>
          </div>
          <Link to="#" className="font-bold flex text-xl text-boost-secondary">
            Learn more
            <Arrow className="ml-2 fill-current" />
          </Link>
        </div>
        <div
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="w-full md:w-1/2 flex items-center justify-center px-5">
          <Img
            className="block mb-10 md:mb-0"
            style={{ width: 520 }}
            fluid={[data.marketingImg.childImageSharp.fluid]}
            alt="Marketing Automation" />
        </div>
      </div>
    </Section>

    {/* QUOTE 2 */}
    <Section>
      <div className="flex flex-col md:flex-row md:items-center justify-center
        mt-2 py-10 md:py-20 px-5 border-t border-b">
        <Quote data-sal="slide-right" data-sal-delay="500" className="md:mr-8 mb-8 md:mb-0" />
        <div className="flex flex-col">
          <QuoteContent>
            I just want to say again that you&apos;ve been exceptionally knowledgeable and helpful.
            This has hands-down been the best on-boarding/training process I&apos;ve been through in
            the legal software industry. We&apos;re excited to get fully transitioned and start making
            use of the awesome features Lawmatics has to offer.
          </QuoteContent>
          <QuoteAuthor>
            Mark Petell, Frye Law Group
          </QuoteAuthor>
        </div>
      </div>
    </Section>

    {/* INTAKE */}
    <Section>
      <div className="flex flex-col md:flex-row py-10 md:pt-20 items-center justify-center">
        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="w-full md:w-1/2 flex items-center justify-center px-5">
          <Img
            className="block mb-10 md:mb-0 lg:mt-16"
            style={{ width: 598 }}
            fluid={[data.clientIntakeImg.childImageSharp.fluid]}
            alt="Client Intake" />
        </div>
        <div
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="w-full md:w-1/2 flex flex-col px-6">
          <PreHeader>Client Intake</PreHeader>
          <h2 className="leading-9 text-4xl mb-0 pb-5">
            Automate your intake process and marketing efforts
          </h2>
          <p className="text-xl leading-8 mb-0">
            Create a repeatable process you can set and forget. Spend time on the most valuable
            tasks and let your CRM handle your intake and marketing efforts.
          </p>
          <div className="block pt-2 pb-4 max-w-lg">
            <List><Check />Respond to new leads via email or text message</List>
            <List><Check />Auto schedule initial consultations and appointment reminders</List>
            <List><Check />Trigger your engagement agreements to be built and sent for e-Signature</List>
            <List><Check />Create beautiful email drip campaigns to ensure consistent
              follow up with clients
            </List>
          </div>
          <Link to="#" className="font-bold flex text-xl text-boost-secondary">
            Learn more
            <Arrow className="ml-2 fill-current" />
          </Link>
        </div>
      </div>
    </Section>

    {/* INTEGRATIONS */}
    <Section>
      <div className="flex flex-col md:flex-row py-10 md:pt-20 items-center justify-center
        flex-col-reverse">
        <div
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="w-full md:w-1/2 flex flex-col px-6">
          <PreHeader>Integrations</PreHeader>
          <h2 className="leading-9 text-4xl mb-0 pb-5">
            Partnering with industry <br className="hidden md:inline" />leading solutions
          </h2>
          <p className="text-xl leading-8 mb-0">
            Expand Lawmatics&apos; capabilities with supported integrations.
            We&apos;re committed to broaden this list to include all major software
            bundles used by the industry.
          </p>
          <Link to="#" className="font-bold flex text-xl text-boost-secondary">
            Learn more
            <Arrow className="ml-2 fill-current" />
          </Link>
        </div>
        <div
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="w-full md:w-1/2 flex items-center justify-center px-5">
          <Img
            className="block mb-10 md:mb-0"
            style={{ width: 552 }}
            fluid={[data.integrationImg.childImageSharp.fluid]}
            alt="Integrations" />
        </div>
      </div>
    </Section>

    {/* QUOTE 3 */}
    <Section className="mt-2 z-10 relative">
      <div className="flex items-center">
        <div className="w-full border-t" />
        <Quote className="px-4 w-20 hidden md:block" />
        <div className="w-full border-t" />
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-center py-10 md:pt-10 px-5">
        <Quote data-sal="slide-right" data-sal-delay="500" className="md:mr-8 mb-8 md:mb-0" />
        <div className="flex flex-col">
          <QuoteContent>
            So very glad we invested in this program when we did. We are getting
            more use out of it than we imagined we would ever have to. We are now
            using an automatic intake form, video-conferencing through GoToMeeting
            for our consultations, and we are going to start using e-sign with
            our rep. agreements.
          </QuoteContent>
          <QuoteAuthor>
            Alicia Bostrack, Orchard Law Firm
          </QuoteAuthor>
        </div>
      </div>
    </Section>

    {/* WAVE */}
    <Section fullWidth className="z-0 relative">
      <div className="flex items-center justify-center">
        <Img
          className="block w-full md:-mt-12 md:-mb-12 lg:-mt-24 lg:-mb-32"
          style={{ maxWidth: 2000 }}
          fluid={[data.bottomWaveHQImg.childImageSharp.fluid]}
          alt="Wave" />
      </div>
    </Section>

    {/* CTA */}
    <Section className="z-10 relative flex flex-col items-center justify-center">
      <h2 className="leading-10 text-4xl mb-0 pb-5 text-center">
        Ready to learn more about growing
        <br className="hidden lg:inline-block" /> your firm with Lawmatics?
      </h2>
      <p className="text-center text-boost-secondary-70 text-2xl leading-9
        px-3 lg:px-0 z-20">
        Sign up for a product demo today
      </p>
      <div className="flex items-center justify-center lg:justify-start flex-wrap z-20 p-2">
        <Link
          to="/trial"
          className="p-2 mb-3 md:mb-0 md:mr-2 md:px-8 py-3 w-10/12 md:w-auto
            text-15 uppercase font-extrabold text-center text-boost-secondary
            border border-transparent bg-boost-warning
            hover:bg-boost-primary hover:opacity-100 raise
            rounded flex items-center justify-center transition-all">
          Learn more
        </Link>
        <Link
          to="/demo"
          className="p-2 md:ml-2 md:px-8 py-3 w-10/12 md:w-auto
            text-15 uppercase font-extrabold text-center text-boost-secondary
            border border-boost-warning bg-white bg-opacity-50
            hover:bg-white hover:border-boost-primary hover:opacity-100 raise
            rounded flex items-center justify-center transition-all">
          Get a Demo
        </Link>
      </div>
      <p className="text-center py-8">
        <Link to="/contact" className="underline">Contact us</Link> if you have any questions
        <span className="px-2 lg:px-3">•</span>
        <a href="tel:18008831105">(800) 883-1105</a>
        <span className="px-2 lg:px-3">•</span>
        <a
          className="underline"
          href="m&#97;il&#116;o&#58;m%6&#49;&#105;l&#64;law%6Dat%69&#99;s%&#50;&#69;%63om">
          mail&#64;lawm&#97;tics&#46;com
        </a>
      </p>
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
    followupImg: file(relativePath: { eq: "home/section-follow-ups.png" }) {
      childImageSharp {
        fluid(maxWidth: 578) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    marketingImg: file(relativePath: { eq: "home/section-marketing.png" }) {
      childImageSharp {
        fluid(maxWidth: 520) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    clientIntakeImg: file(relativePath: { eq: "home/section-client-intake.png" }) {
      childImageSharp {
        fluid(maxWidth: 598) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    integrationImg: file(relativePath: { eq: "home/section-integrations.png" }) {
      childImageSharp {
        fluid(maxWidth: 552) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    bottomWaveHQImg: file(relativePath: { eq: "home/bottom-wave.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
