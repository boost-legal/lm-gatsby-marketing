import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, className, maxWidth, noStyle, fullWidth }) => (
  <div
    className={`${fullWidth ? 'w-full relative' : ''} ${className}`}
    style={{
      maxWidth: fullWidth ? 'none' : maxWidth,
      margin: noStyle || '0 auto',
      padding: noStyle || '0 0.5rem 1.5rem',
    }}>
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  noStyle: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Section.defaultProps = {
  className: '',
  maxWidth: '1320px',
  noStyle: false,
  fullWidth: false,
};

export default Section;
