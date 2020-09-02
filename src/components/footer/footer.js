import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import posed from 'react-pose';

import Link from "../link"
import Logo from "../../assets/svg/lawmatics-logo.svg";
import parrot from "../../assets/images/parrot.gif"


const Parrot = styled.span`
  background-image: url(${parrot});
  background-size: contain;
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-left: 5px;
  margin-right: 3px;
`

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const LMLink = styled(Link)`
  transition: all 200ms ease-in;
  ${tw`text-boost-secondary-70 hover:text-boost-secondary hover:opacity-100
    relative text-sm pb-2`}

  &.active {
    ${tw`text-boost-primary`}
  }
  `

const Footer = () => (
  <AnimatedContainer>
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center justify-between w-full
        pa-0 pb-20 md:py-16 md:px-2 bg-white z-10"
        style={{ maxWidth: 1320 }}>
        
        {/* Footer Links */}
        <div className="flex flex-wrap justify-between w-full pb-10 md:pb-20 px-5 md:px-0">
          <div className="w-full md:w-1/5 flex justify-center md:justify-start">
            <Link to="/">
              <Logo className="w-32 hover:opacity-75
                transition-opacity duration-500 ease-in-out" />
            </Link>
          </div>
          <div className="w-full md:w-3/5 py-10 md:py-0">
            <div class="flex justify-center md:justify-between flex-wrap lg:pl-32
              text-sm text-boost-secondary-70">
              <div class="flex flex-col w-1/3">
                <LMLink to="/">Home</LMLink>
                <LMLink to="/features">Features</LMLink>
                <LMLink to="/integrations">Integrations</LMLink>
                <LMLink to="/pricing">Pricing</LMLink>
                <LMLink to="/blog">Blog</LMLink>
              </div>
              <div class="flex flex-col w-1/3">
                <LMLink to="/contact">Contact</LMLink>
                <LMLink to="/about-us">About Us</LMLink>
                <LMLink
                  to="https://help.lawmatics.com"
                  target="_blank"
                  rel="noreferrer">
                    Help
                </LMLink>
                <LMLink
                  to="https://docs.lawmatics.com"
                  target="_blank"
                  rel="noreferrer">
                    API Documentation
                </LMLink>
                <LMLink
                  to="http://status.lawmatics.com"
                  target="_blank"
                  rel="noreferrer">
                    System Status
                </LMLink>
              </div>
              <div class="flex flex-col w-1/3">
               <LMLink to="/privacy-policy">Privacy policy</LMLink>
               <LMLink to="/terms-of-use">Terms of use</LMLink>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/5">
            <LMLink
              className="flex items-center justify-center w-full"
              to="/demo">
                <div className="text-boost-secondary bg-boost-warning hover:bg-boost-primary
                  py-4 px-2 mb-2 rounded uppercase font-bold text-center text-xs cursor-pointer
                  transition-all ease-in duration-300 whitespace-no-wrap leading-none
                  w-full md:w-64">
                    Claim your free trial
                </div>
            </LMLink>
          </div>
        </div>
        
        {/* Footnotes */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full
          text-boost-secondary-30 text-xs">
          <div className="flex flex-row items-center">
            © {new Date().getFullYear()}
            <span className="pl-1 pr-3">— Lawmatics</span>
            <a
              href="https://www.facebook.com/Lawmatics-156829925019246/"
              target="_blank"
              rel="noreferrer"
              className="text-boost-secondary-70 text-base">
              <span className="eleganticon social_facebook" />
            </a>
            <a
              href="https://twitter.com/lawmatics"
              target="_blank"
              rel="noreferrer"
              className="text-boost-secondary-70 text-base pl-3">
              <span className="eleganticon social_twitter" />
            </a>
          </div>
          <div className="italic">
            Crafted with <Parrot /> in San Diego, CA
          </div>
        </div>
      </div>
    </div>
  </AnimatedContainer>
);

export default Footer;
