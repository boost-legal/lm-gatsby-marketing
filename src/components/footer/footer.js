import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import posed from 'react-pose';

import FooterCenterLinks from './FooterCenterLinks';
import Link from '../link';
import Logo from '../../assets/svg/lawmatics-logo.svg';
import Parrot from '../lawmatics/parrot';

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

const CTA = styled(Link)`
  transition: all 200ms ease-in;
  ${tw`text-boost-secondary-70 hover:text-boost-secondary hover:opacity-100
    relative text-sm pb-2`}

  &.active {
    ${tw`hidden`}
  }
`;

const Footer = () => (
  <AnimatedContainer>
    <div className="w-full flex justify-center">
      <div
        className="flex flex-col items-center justify-between w-full
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
            <div className="flex justify-start md:justify-between flex-wrap lg:pl-32
              text-sm text-boost-secondary-70">
              <FooterCenterLinks />
            </div>
          </div>
          <div className="w-full md:w-1/5">
            <CTA
              className="flex items-center justify-center w-full"
              to="/trial">
              <div className="text-boost-secondary bg-boost-warning hover:bg-boost-primary
                  py-4 px-2 mb-2 rounded uppercase font-bold text-center text-xs cursor-pointer
                  transition-all ease-in duration-300 whitespace-no-wrap leading-none
                  w-full md:w-64">
                Claim your free trial
              </div>
            </CTA>
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
