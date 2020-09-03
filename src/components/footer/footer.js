import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import posed from 'react-pose';
import titleize from 'titleize';

import Link from '../link';
import Logo from '../../assets/svg/lawmatics-logo.svg';
import parrot from '../../assets/images/parrot.gif';

const Parrot = styled.span`
  background-image: url(${parrot});
  background-size: contain;
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-left: 5px;
  margin-right: 3px;
`;

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

const FOOTER_CENTER_LINKS = [{
  id: 'home',
  to: '/home',
}, {
  id: 'features',
  to: '/features',
}, {
  id: 'integrations',
  to: '/integrations',
}, {
  id: 'pricing',
  to: '/pricing',
}, {
  id: 'blog',
  to: '/blog',
}, {
  id: 'contact',
  to: '/contact',
}, {
  id: 'about-us',
  to: '/about-us',
}, {
  id: 'help',
  to: 'https://help.lawmatics.com',
}, {
  id: 'api-documentation',
  to: 'https://docs.lawmatics.com',
}, {
  id: 'system-status',
  to: 'http://status.lawmatics.com',
}, {
  id: 'privacy-policy',
  to: '/privacy-policy',
}, {
  id: 'api-documentation',
  to: 'https://docs.lawmatics.com',
}, {
  id: 'terms-of-use',
  to: '/terms-of-use',
}];

const MAX_LINKS_PER_COL = 5;

const NUM_COLUMNS = Math.ceil(FOOTER_CENTER_LINKS.length / MAX_LINKS_PER_COL);

const renderLinkTitle = (id, title) => title || titleize(id.replace(/[-]+/g, ' '));

const renderFooterLink = ({ to, id, title }) => (
  <LMLink key={id} to={to} target={to.includes('http') ? '_blank' : ''}>
    {renderLinkTitle(id, title)}
  </LMLink>
);

// This function autobuckets link data to autoflow
const bucketFooterLinks = () => FOOTER_CENTER_LINKS.reduce((acc, curr, idx) => {
  const bucketIdx = Math.floor(idx / MAX_LINKS_PER_COL);
  acc[bucketIdx] = [].concat((acc[bucketIdx] || []), curr);
  return acc;
}, []);

const renderBucket = bucketLinks => (
  <div className={`flex flex-col w-1/${NUM_COLUMNS}`}>
    {bucketLinks.map(renderFooterLink)}
  </div>
);

const renderFooterLinks = () => bucketFooterLinks().map(renderBucket);

const LMLink = styled(Link)`
  transition: all 200ms ease-in;
  ${tw`text-boost-secondary-70 hover:text-boost-secondary hover:opacity-100
    relative text-sm pb-2`}

  &.active {
    ${tw`text-boost-primary`}
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
            <div className="flex justify-center md:justify-between flex-wrap lg:pl-32
              text-sm text-boost-secondary-70">
              {renderFooterLinks()}
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
