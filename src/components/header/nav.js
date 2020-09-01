import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';


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
`

const Nav = () => (
  <nav className="flex flex-col items-center justify-center md:flex-row
    w-full md:w-auto px-4 md:px-0">
    <NavItem to="/home" activeClassName="active">Home</NavItem>
    <NavItem to="/page-2" activeClassName="active">Page Two</NavItem>
    <NavItem to="/404" activeClassName="active">404</NavItem>
  </nav>
);

export default Nav;
