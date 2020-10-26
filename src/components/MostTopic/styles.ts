import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border: 0.1rem solid #eee;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};
    max-width: 30rem;
    position: relative;
  `};
`
export const Box = styled.div`
  display: inline-flex;
  max-width: 30rem;
  flex-wrap: wrap;
`

export const Align = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    height: 2.3rem;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
