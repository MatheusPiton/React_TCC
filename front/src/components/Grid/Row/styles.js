import styled from 'styled-components';

export const StyledRowComponent = styled.div`
  position: ${props => props.position};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: ${props => props.alignItems};
  padding: ${props => props.padding};
  justify-content: ${props => props.justifyContent};
`;
