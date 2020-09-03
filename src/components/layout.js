import React from "react"
import PropTypes from "prop-types"

import Header from "./header/header"
import Footer from "./footer/footer"
import '../styles/global.less'


const Layout = ({ children, className, maxWidth, noStyle }) => {
  return (
    <>
      <Header />
      <div
        className={className}
        style={{
          maxWidth: maxWidth,
          margin: noStyle || '0 auto',
          padding: noStyle || '0 0.5rem 1.5rem',
        }}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  noStyle: PropTypes.bool,
}

Layout.defaultProps = {
  maxWidth: '1320px',
  noStyle: false,
  className: '',
}

export default Layout
