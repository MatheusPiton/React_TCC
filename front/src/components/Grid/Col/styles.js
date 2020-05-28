import styled, { css } from 'styled-components';

export const StyledCol = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${props => props.padding || props.theme.spacing.padding10};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};

  ${props =>
    props.size &&
    css`
      flex: 0 1 ${(100 / 12) * props.size}%;
      max-width: ${(100 / 12) * props.size}%;
    `}
`;
