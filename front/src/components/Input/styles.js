import styled from 'styled-components';

export const Container = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 5px;
    border: ${props => props.border};
    color: ${props => props.color};
    font-weight: 600;
    font-size: 13px;
    text-align: center;
`;
