import React, { useState, useEffect } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import Link from '../link';
import Nav from './nav';
import Logo from '../../assets/svg/lawmatics-logo.svg';

const headerHeight = 106;

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
  ${tw`flex items-baseline justify-between w-full`}

  @media (max-width: 945px) {
    ${tw`bg-boost-secondary-05 py-8 w-full fixed flex-col left-0 z-1 border-t-4 shadow-xl`}
    transition: all 0.3s ease-in-out;
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
  user-select: none;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    user-select: none;
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
  height: ${headerHeight}px;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const scrolled = scrollTop > headerHeight;
  const smHeaderHeight = 70;

  return (
    <>
      <AnimatedContainer className="z-50 relative">
        <div
          className="w-full flex justify-center bg-white fixed
            transition-all duration-200 ease-in"
          style={{ height: scrolled ? smHeaderHeight : headerHeight }}>
          <HeaderDiv>
            <Togglebox>
              <Link to="/">
                <Logo className="-mt-2" style={{ maxWidth: 180, width: '100%' }} />
              </Link>
              <Toggle
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <Hamburger open /> : <Hamburger />}
              </Toggle>
            </Togglebox>
            {isOpen ? (
              <Navbox
                style={{ top: scrolled ? smHeaderHeight : headerHeight }}>
                <Nav />
              </Navbox>
            ) : <Navbox style={{ top: -7 * headerHeight }}><Nav /></Navbox>}
          </HeaderDiv>
        </div>
      </AnimatedContainer>
      <Buffer />
    </>
  );
};

export default Header;
