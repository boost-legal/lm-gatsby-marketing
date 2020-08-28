import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';


const NavItem = styled(Link)`
  transition: all 200ms ease-in;
  ${tw`text-boost-secondary-70 font-bold relative lg:text-sm whitespace-no-wrap
    no-underline lg:mx-3`}

  :after {
    bottom: -10px;
    content: ".";
    transition: all 0.4s ease-in;
    ${tw`absolute left-0 right-0 w-full text-transparent bg-boost-gray-30 rounded-full
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
  ${tw`text-md z-10 mx-4`}
`

const Nav = () => (
  <div class="flex">
    <NavItem to="/home">Home</NavItem>
    <NavItem to="/page-2">Page Two</NavItem>
    <NavItem to="/404">404</NavItem>
  </div>
);

export default Nav;
