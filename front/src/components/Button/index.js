import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './styles';

const Button = ({
    children,
    onClick,
    backgroundColor,
    border,
    color,
    height,
    width
}) => (
    <Container 
        border={border}
        color={color}
        onClick={onClick}
        backgroundColor={backgroundColor}
        height={height}
        width={width}
    >
        {children}
    </Container>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
    border: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => {},
    backgroundColor: '#5B2E90',
    border: 'none',
    color: '#FFF',
    width: '185px',
    height: '35px',
};

export default Button;
