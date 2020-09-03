import React from 'react';
import PropTypes from 'prop-types';
import Transition from '../components/transition';

const wrapPageElement = ({ element, props }) => <Transition animateOnMount {...props}>{element}</Transition>;

wrapPageElement.propTypes = {
  element: PropTypes.any,
  props: PropTypes.any,
};

export default wrapPageElement;
