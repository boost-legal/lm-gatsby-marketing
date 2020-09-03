import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, to, activeClassName, partiallyActive, target, ...other }) => {
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        target={target || internal ? '' : '_blank'}
        activeClassName={activeClassName || 'active'}
        partiallyActive={partiallyActive}
        {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  partiallyActive: PropTypes.bool,
  target: PropTypes.string,
};

Link.defaultProps = {
  activeClassName: null,
  partiallyActive: false,
  target: null,
};

export default Link;
