import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import posed from 'react-pose';

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

const Footer = () => (
  <AnimatedContainer>
    <div className="w-full flex justify-center">
      <div className="flex items-center justify-between w-full
        pa-0 md:py-3 md:px-2 bg-white fixed z-10"
        style={{ maxWidth: 1280 }}>
        
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
