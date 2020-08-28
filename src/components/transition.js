import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';


class Transition extends PureComponent {
  render() {
    const { children, location, animateOnMount } = this.props;

    const RoutesContainer = posed.div({
      enter: { opacity: 1, delay: 250, delayChildren: 250 },
      exit: { opacity: 0 },
    });

    return (
      <PoseGroup animateOnMount={animateOnMount}>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  animateOnMount: PropTypes.bool,
};

Transition.defaultProps = {
  animateOnMount: false,
}

export default Transition;
