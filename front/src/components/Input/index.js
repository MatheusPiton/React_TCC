import PropTypes from 'prop-types';
import React from 'react';
import { Container } from './styles';

const Input = ({
    placeholder,
    border,
    color,
    height,
    width,
    type,
}) => (
    <Container 
        placeholder={placeholder}
        border={border}
        color={color}
        height={height}
        width={width}
        type={type}
    />
);

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    border: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    type: PropTypes.string,
}

Input.defaultProps = {
    border: 'none',
    color: '#FFF',
    width: "320px",
    height: "40px",
    type: 'text',
};

export default Input;
