import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Input = styled.input`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
    border-radius: ${theme.border.xradius};
    font-size: ${theme.font.sizes.small};
    height: 3.2rem;
    width: 41rem;
    border: 0.1rem solid #ddd;
    padding-left: 3rem;

    :focus {
      outline: none;
      box-shadow: 0 0 0.2rem 0.25rem #bdcaf2;
      border-radius: ${theme.border.xradius};
      border: 0.1rem solid ${theme.colors.primary};
    }

    ::placeholder {
      color: #999;
    }
  `}
`
export const Cont = styled.div`
  position: relative;
`
export const Image = styled.img`
  position: absolute;
  left: 1rem;
  top: 0.8rem;
  opacity: 0.3;
`

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3.2rem;
    border: 0.1rem solid #eee;
    border-radius: ${theme.border.xradius};
    background: none;
    margin-right: ${theme.spacings.min};
    padding-right: 1.5rem;
    padding-left: 2rem;
    font-size: ${theme.font.sizes.small};
    cursor: pointer;

    :hover {
      background: ${darken(0.04, '#fff')};
    }

    :focus {
      outline: none;
    }

    span {
      color: ${lighten(0.4, '#24292e')};
      margin: 0 0.4rem;
    }
  `}
`

export const Icon = styled(ArrowDropDown)`
  width: 2rem;
  height: 2rem;
`
