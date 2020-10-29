import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  height: 54rem;
  width: 100%;
  background-image: url('/img/blog/blog-header.jpeg');
  background-position: center center;
  background-size: cover;
`

export const Text = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: 4.2rem;
    font-weight: bold;
  `}
`
export const BoxText = styled.div`
  width: 50rem;
  flex-wrap: wrap;

  position: absolute;
  left: 15%;
  top: 26%;
`
