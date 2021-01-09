import React, { useState, useEffect } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Cookies from 'js-cookie';

import Link from '../link';
import Nav from './nav';
import Logo from '../../assets/svg/lawmatics-logo.svg';
import Arrow from '../../assets/svg/link-arrow.svg';

const headerHeight = 106;
const topBarHeight = 46;

const AnimatedContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
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
    transition: all .3s ease-in-out;
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
    transition: all .3s linear;
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

const TopBar = styled.div`
  ${tw`flex flex-row items-center justify-between w-full bg-boost-primary-15`}
  max-height: 0;
  height: ${topBarHeight}px;
  transition: max-height .3s ease-in-out;
  &.closed {
    height: 0;
    max-height: 0;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [barOpen, setBarOpen] = useState(Cookies.get('barOpen') !== 'false');
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    Cookies.set('barOpen', barOpen);
  }, [barOpen]);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const scrolled = scrollTop > 0;
  const smHeaderHeight = 70;
  const topBarCurrentHeight = barOpen && scrollTop === 0 ? topBarHeight : 0;

  return (
    <>
      <AnimatedContainer className="z-50 relative">
        <TopBar
          className="z-10 relative overflow-hidden"
          style={{ maxHeight: topBarCurrentHeight }}>
          <div className="hidden md:flex w-10" />
          <div className="flex flex-col md:flex-row items-center md:items-baseline
            justify-center w-full">
            <div className="text-14 text-center text-boost-primary-dark leading-4">
              <em>New eBook: </em>
              <strong>Building a Foundation for Growth</strong>
            </div>
            <Link to="#" className="pl-3 text-14 flex items-center font-bold leading-4">
              Check it out
              <Arrow className="ml-2 fill-current w-4" />
            </Link>
          </div>
          <div className="flex p-2 md:w-10">
            <div
              role="presentation"
              onClick={() => setBarOpen(false)}>
              <div className="boosticon icon-exit cursor-pointer" />
            </div>
          </div>
        </TopBar>
        <div
          className={`w-full flex justify-center bg-white fixed
            transition-all duration-200 ease-in z-0 header-${scrolled ? 'scrolled' : 'top'}`}
          style={{ height: scrolled ? smHeaderHeight : headerHeight,
            boxShadow: '0 -100px 0 100px white' }}>
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
                className="nav-open"
                style={{ top: scrolled ? smHeaderHeight + topBarCurrentHeight
                  : headerHeight + topBarCurrentHeight }}>
                <Nav />
              </Navbox>
            ) : (
              <Navbox
                className="nav-closed"
                style={{ top: -7 * headerHeight }}>
                <Nav />
              </Navbox>
            )}
          </HeaderDiv>
        </div>
      </AnimatedContainer>
      <Buffer />
    </>
  );
};

export default Header;
