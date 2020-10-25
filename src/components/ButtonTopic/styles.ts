import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonTopicProps } from '.'

const wrapperModifiers = {
  verified: () => css`
    color: #22863a;
    border: 1px solid #22863a;
    text-align: center;
    background: none;
  `,

  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    border: none;
    background: #ddd;
    padding: 0.1rem 0.6rem;
  `,

  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
    border: none;
    background: #f1f8ff;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.04, '#f1f8ff')};
    }
  `
}

export const Wrapper = styled.button<ButtonTopicProps>`
  ${({ theme, typeButton }) => css`
    font-size: ${theme.font.sizes.xsmall};
    border-radius: ${theme.border.xxradius};
    padding: 0.1rem 1rem;
    height: 2.3rem;
    cursor: pointer;

    ${!!typeButton && wrapperModifiers[typeButton](theme)};
  `};
`
