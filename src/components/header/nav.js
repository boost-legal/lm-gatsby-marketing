import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import Link from '../link';

const NavItem = styled(Link)`
  transition: all 200ms ease-in;
  ${tw`text-boost-secondary-70 font-bold relative whitespace-no-wrap
    no-underline text-md md:text-sm z-10 md:mx-3 py-2 md:py-1 md:w-auto w-full
    px-3 md:px-0 text-center rounded`}

  :after {
    bottom: -10px;
    content: ".";
    transition: all 0.4s ease-in;
    ${tw`absolute left-0 right-0 w-full text-transparent bg-boost-gray-30 md:rounded-full
      h-1 opacity-0`}
  }

  :hover {
    ${tw`text-boost-secondary`}
    ::after {
      bottom: -3px;
      width: 100%;
      opacity: 1;
    }
  }

  &.active {
    ${tw`text-boost-primary`}
  }

  @media (max-width: 768px) {
    ${tw`hover:bg-boost-secondary-10`}
    :after{ display: none; }
  }
`;

const Nav = () => (
  <nav className="flex flex-col items-center justify-center md:flex-row
    w-full md:w-auto px-4 md:px-0">
    <NavItem to="/home">Home</NavItem>
    <NavItem to="/features">Features</NavItem>
    <NavItem to="/integrations">Integrations</NavItem>
    <NavItem to="/pricing">Pricing</NavItem>
    <NavItem to="/about-us">About Us</NavItem>
    <NavItem to="/contact">Contact</NavItem>
    {/* Mobile */}
    <NavItem
      to="https://app.lawmatics.com"
      className="block md:hidden">
      Login
    </NavItem>
    {/* Desktop */}
    <Link
      className="border border-boost-secondary-15 rounded px-2 hover:bg-boost-secondary-15
        font-bold text-md md:text-sm text-boost-secondary-70 transition-all duration-300
        hover:text-boost-secondary md:mx-2 hover:opacity-100 h-10 hidden md:flex items-center"
      to="https://app.lawmatics.com"
      target="_blank"
      rel="noreferrer">
      Login
    </Link>
    <Link
      className="text-boost-secondary hover:opacity-100
        bg-boost-warning hover:bg-boost-primary h-10 flex items-center justify-center
        py-2 px-3 rounded uppercase font-bold text-center text-xs mt-3 md:mt-0 md:ml-2
        transition-all ease-in duration-300 whitespace-no-wrap leading-none
        w-full md:w-auto"
      to="/demo">
      Claim your free trial
    </Link>
  </nav>
);

export default Nav;
