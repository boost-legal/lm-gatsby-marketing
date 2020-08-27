import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/page-2">Page Two</Link>
      </li>
      <li>
        <a href="/404">404</a>
      </li>
    </ul>
  </div>
);

export default Nav;
