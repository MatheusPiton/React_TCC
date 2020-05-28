import styled from 'styled-components';

export const Container = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 5px;
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    color: ${props => props.color};
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
`;