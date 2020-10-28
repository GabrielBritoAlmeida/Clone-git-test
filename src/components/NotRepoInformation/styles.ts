import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 16.5rem;
    width: 65.3rem;
    max-width: 65.3rem;
    padding: ${theme.spacings.large} 0;
    border-bottom: 0.1rem solid #dddd;
  `};
`
