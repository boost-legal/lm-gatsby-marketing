import React from "react"
import PropTypes from "prop-types"


const Section = ({ children, className, maxWidth, noStyle }) => {
  return (
    <div
      className={className}
      style={{
        maxWidth: maxWidth,
        margin: noStyle || '0 auto',
        padding: noStyle || '0 0.5rem 1.5rem',
      }}>
      <main>{children}</main>
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  noStyle: PropTypes.bool,
}

Section.defaultProps = {
  maxWidth: '1320px',
  noStyle: false,
  className: '',
}

export default Section
