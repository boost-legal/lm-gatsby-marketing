import React, { useState } from 'react';
import { Link } from 'gatsby';
import posed from 'react-pose';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import Nav from './nav';
import Logo from '../../assets/svg/lawmatics-logo.svg';

const headerHeight = '80px';

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

const HeaderDiv = styled.div`
  max-width: 1320px;
  ${tw`flex items-center justify-between w-full py-0 px-0`}

  @media (min-width: 945px) {
    ${tw`py-3 px-2`}
  }
`;

const Togglebox = styled.div`
  ${tw`bg-white w-full z-10 flex items-center justify-between py-3 px-2`}

  @media (min-width: 945px) {
    ${tw`w-auto py-0 px-0`}
  }
`;

const Toggle = styled.div`
  height: 30px;
  ${tw`flex cursor-pointer px-2`}

  @media (min-width: 945px) {
    ${tw`hidden`}
  }
`;

const Navbox = styled.div`
  ${tw`flex items-center justify-end`}

  @media (max-width: 945px) {
    ${tw`bg-boost-secondary-05 py-8 w-full fixed flex-col left-0 z-1 border-t-4 shadow-xl`}
    transition: all 0.3s ease-in-out;
    top: ${props => (props.open ? '-600px' : headerHeight)};
  }
`;

const Hamburger = styled.div`
  ${tw`bg-boost-secondary-70`}
  width: 30px;
  height: 3px;
  border-radius: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

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
    transform: ${props => (props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)')};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;

const Buffer = styled.div`
  width: 100%;
  height: ${headerHeight};
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatedContainer className="z-50 relative">
        <div className="w-full flex justify-center bg-white fixed">
          <HeaderDiv>
            <Togglebox>
              <Link to="/">
                <Logo className="w-48" />
              </Link>
              <Toggle
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <Hamburger open /> : <Hamburger />}
              </Toggle>
            </Togglebox>
            {isOpen
              ? <Navbox><Nav /></Navbox> : <Navbox open><Nav /></Navbox>}
          </HeaderDiv>
        </div>
      </AnimatedContainer>
      <Buffer />
    </>
  );
};

export default Header;
