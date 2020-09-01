import React from 'react';
import { Link } from 'gatsby';
import posed from 'react-pose';


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
          text-boost-secondary-30 text-sm">
          <div className="flex flex-row">
            © {new Date().getFullYear()}
            <span className="pl-1 pr-3">— Lawmatics</span>
            <div className="et-social-icon et-social-facebook">
              <a href="https://www.facebook.com/Lawmatics-156829925019246/" className="icon">
                Facebook
              </a>
            </div>
            <div className="et-social-icon et-social-twitter pl-2">
              <a href="https://twitter.com/lawmatics" className="icon">
                Twitter
              </a>
            </div>
          </div>
          <div className="italic">
            Crafted with <span className="parrot"></span> in San Diego, CA
          </div>
        </div>
      </div>
    </div>
  </AnimatedContainer>
);

export default Footer;
