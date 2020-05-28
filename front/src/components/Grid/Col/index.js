import PropTypes from 'prop-types';
import React from 'react';

import { StyledCol } from './styles';

const Col = ({
  className,
  children,
  size,
  justifyContent,
  alignItems,
  padding,
}) => (
  <StyledCol
    size={size}
    className={className}
    justifyContent={justifyContent}
    alignItems={alignItems}
    padding={padding}
  >
    {children}
  </StyledCol>
);

Col.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  padding: PropTypes.string,
  className: PropTypes.string,
};

Col.defaultProps = {
  size: 12,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  className: '',
};

export default Col;
