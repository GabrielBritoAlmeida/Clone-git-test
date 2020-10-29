import styled, { css } from 'styled-components'

import { darken } from 'polished'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Bell } from '@styled-icons/boxicons-regular/Bell'
import { ArrowDown } from '@styled-icons/evaicons-solid/ArrowDown'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};
    background-color: #24292e;
    height: 6.2rem;
    width: 100%;
    color: ${theme.colors.background};
    font-size: ${theme.font.sizes.small};
    font-weight: bold;
  `};
`
export const BoxLeft = styled.div`
  display: flex;
  align-items: center;
`

export const BoxRight = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled(Github)`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    width: 4.2rem;
    height: 4.2rem;
    margin-right: ${theme.spacings.small};
    cursor: pointer;

    :hover {
      color: ${darken(0.1, '#fafbfc')};
    }
  `};
`

export const Input = styled.input`
  ${({ theme }) => css`
    height: ${theme.spacings.xlarge};
    width: 27.2rem;
    margin-right: ${theme.spacings.small};
    background: none;
    border: 0.1rem solid #4d545b;
    border-radius: ${theme.border.radius};
    padding-left: ${theme.spacings.xsmall};
    color: #ddd;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #bbb;
    }
  `};
`

export const MenuLeft = styled.div`
  display: flex;
`

export const ItemMenuLeft = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.small};
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  `};
`

export const MenuRight = styled.div`
  display: flex;
  align-items: center;
`

export const IconBell = styled(Bell)`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    width: 2rem;
    height: 4rem;
    margin-right: ${theme.spacings.xxsmall};
    cursor: pointer;

    :hover {
      color: ${darken(0.1, '#fafbfc')};
    }
  `};
`
export const IconArrow = styled(ArrowDown)`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    width: 1.5rem;
    height: 4rem;
    margin-right: ${theme.spacings.xsmall};
    cursor: pointer;

    :hover {
      color: ${darken(0.1, '#fafbfc')};
    }
  `};
`
export const IconAdd = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: ${theme.font.sizes.large};
    font-weight: bolder;
    margin-right: ${theme.spacings.min};
    cursor: pointer;

    :hover {
      color: ${darken(0.1, '#fafbfc')};
    }
  `};
`
