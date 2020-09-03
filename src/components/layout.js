import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header/header';
import Footer from './footer/footer';
import '../styles/global.less';

const Body = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  padding: 80px 0.5rem 1.5rem;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Body className="sm:px-3 md:px-3">
      <main>{children}</main>
    </Body>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
