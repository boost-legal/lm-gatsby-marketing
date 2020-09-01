import React, { useState } from 'react';
import { Link } from 'gatsby';
import posed from 'react-pose';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import Nav from './nav';
import Logo from "../../assets/images/lawmatics-logo.svg";


const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100px',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Toggle = styled.div`
  height: 30px;
  ${tw`flex md:hidden cursor-pointer px-2`}
`

const Navbox = styled.div`
  ${tw`flex items-center justify-end`}

  @media (max-width: 768px) {
    ${tw`bg-boost-secondary-05 py-8 w-full fixed flex-col left-0 z-1 border-t-4 shadow-xl`}
    transition: all 0.3s ease-in-out;
    top: ${props => (props.open ? "-300px" : "80px")};
  }
`

const Hamburger = styled.div`
  ${tw`bg-boost-secondary-70`}
  width: 30px;
  height: 3px;
  border-radius: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    border-radius: 3px;
    ${tw`bg-boost-secondary-70`}
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <AnimatedContainer>
      <div className="w-full flex justify-center">
        <div className="flex items-center justify-between w-full
          pa-0 md:py-3 md:px-2 bg-white fixed z-10"
          style={{ maxWidth: 1280 }}>
          <div className="bg-white w-full md:w-auto z-10
            flex items-center justify-between py-3 px-2 md:py-0 md:px-0">
            <Link to="/">
              <Logo className="w-48" />
            </Link>
            <Toggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
          </div>
          {isOpen ?
          <Navbox><Nav /></Navbox> : <Navbox open><Nav /></Navbox>}
        </div>
      </div>
    </AnimatedContainer>)
};

export default Header;
