import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';

import Nav from './nav';
import Logo from "../../images/lawmatics-logo.svg";


const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <div className="flex items-center justify-center w-full py-3 px-2 bg-white">
      <div
        className="flex items-center w-full justify-between"
        style={{ maxWidth: 1280 }}>
        <Link to="/">
          <Logo className="w-48" />
        </Link>

        <Nav />
      </div>
    </div>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
