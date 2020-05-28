import PropTypes from 'prop-types';
import React from 'react';

import { StyledRowComponent } from './styles';

const Row = ({ children, position, justifyContent, alignItems }) => (
  <StyledRowComponent position={position} justifyContent={justifyContent} alignItems={alignItems}>
    { children }
  </StyledRowComponent>
);

Row.propTypes = {
    children      : PropTypes.node.isRequired,
    position      : PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems    : PropTypes.string,
};

Row.defaultProps = {
    position      : 'relative',
    justifyContent: 'auto',
    alignItems    : 'flex-start'
};

export default Row;
