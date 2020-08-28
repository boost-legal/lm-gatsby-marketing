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
    <Link to="/">
      <h4>Footer</h4>
    </Link>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </AnimatedContainer>
);

export default Footer;
