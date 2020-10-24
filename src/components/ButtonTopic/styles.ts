import styled, { css, DefaultTheme } from 'styled-components'
import { darken, lighten } from 'polished'

import { ButtonTopicProps } from '.'

const wrapperModifiers = {
  verified: (theme: DefaultTheme) => css`
    color: #22863a;
    border: 1px solid #22863a;
    text-align: center;
    background: none;
  `,

  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
  `,

  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
    border: none;
    background: ${lighten(0.03, '#ddeeff')};

    &:hover {
      background: ${darken(0.01, '#ddeeff')};
    }
  `
}

export const Wrapper = styled.button<ButtonTopicProps>`
  ${({ theme, typeButton }) => css`
    font-size: ${theme.font.sizes.xsmall};
    cursor: pointer;
    border-radius: ${theme.border.xxradius};
    padding: 0.1rem 1rem;
    height: 2.2rem;

    ${!!typeButton && wrapperModifiers[typeButton](theme)};
  `};
`
