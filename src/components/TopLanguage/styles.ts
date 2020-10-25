import styled, { css } from 'styled-components'

import { CircleFill } from '@styled-icons/bootstrap/CircleFill'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    border: 0.1rem solid #eee;
    padding: ${theme.spacings.small};
    max-width: 30rem;
    position: relative;
  `};
`
export const Box = styled.main`
  display: inline-flex;
  max-width: 30rem;
  flex-wrap: wrap;
`

export const Icon = styled(CircleFill)`
  ${({ theme }) => css`
    width: 1.3rem;
    height: 1.3rem;
    color: yellow;
    margin-right: ${theme.spacings.min};
  `};
`

export const Align = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.xxsmall};
    margin-right: ${theme.spacings.small};
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    height: 2.3rem;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
