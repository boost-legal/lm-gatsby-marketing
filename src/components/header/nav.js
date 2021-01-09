import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import Link from '../link';

const NavUL = styled.ul`
  ${tw`flex flex-col md:flex-row w-full md:pl-4`}
  li {
    ${tw`flex flex-grow`}
  }
`;

const NavLI = styled.li`
  &.with-dropdown {
    ${tw`flex flex-col`}

    :hover .dropdown{
      ${tw`flex`}
    }
    .dropdown {
      ${tw`hidden flex-col absolute bg-white rounded`}
      min-width: 160px;
      padding-top: 50px;
      
      a {
        ${tw`text-13 font-bold text-center w-full py-2 cursor-pointer`}
        :hover {
          ${tw`bg-boost-secondary-10`}
        }
      }

      @media (max-width: 945px) {
        ${tw`bg-boost-secondary-05`}
      }

      @media (max-width: 768px) {
        ${tw`flex w-full relative bg-transparent pt-0`}
      }
    }
  }
`;

const NavItem = styled(Link)`
  transition: all 200ms ease-in;
  ${tw`text-boost-secondary-70 font-bold relative whitespace-no-wrap
    no-underline z-10 md:mx-3 py-2 md:py-1 md:w-auto w-full
    px-3 md:px-0 text-center rounded text-13`}

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
    ${tw`hover:bg-boost-secondary-10 text-16`}
    :after{ display: none; }
  }
`;

const CTA = styled(Link)`
  &.active {
    ${tw`hidden`}
  }
`;

const Nav = () => (
  <nav className="flex flex-col md:flex-row items-center justify-between
    w-full md:w-auto px-4 md:px-0 flex-grow">
    <NavUL>
      <NavLI><NavItem to="/home">Home</NavItem></NavLI>
      <NavLI><NavItem to="/features">Features</NavItem></NavLI>
      <NavLI><NavItem to="/integrations">Integrations</NavItem></NavLI>
      <NavLI><NavItem to="/pricing">Pricing</NavItem></NavLI>
      <NavLI><NavItem to="/about-us">About Us</NavItem></NavLI>
      {/* // Dropdown template
      <NavLI className="with-dropdown">
        <NavItem to="/about-us">
          About Us <span className="boosticon icon-arrow-down absolute ml-1" />
        </NavItem>
        <div className="dropdown">
          <Link to="#">Link 1</Link>
          <Link to="#">Link 2</Link>
          <Link to="#">Link 3</Link>
        </div>
      </NavLI>
      */}
      <NavLI><NavItem to="/contact">Contact</NavItem></NavLI>
    </NavUL>
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
    <CTA
      className="text-boost-secondary hover:opacity-100
        bg-boost-warning hover:bg-boost-primary h-10 flex items-center justify-center
        py-2 px-3 rounded uppercase font-extrabold text-center text-xs mt-3 md:mt-0 md:ml-2
        transition-all ease-in duration-300 whitespace-no-wrap leading-none
        w-full md:w-auto"
      to="/trial">
      Learn more
    </CTA>
  </nav>
);

export default Nav;
