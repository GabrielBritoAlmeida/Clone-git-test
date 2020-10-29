import styled, { css } from 'styled-components'

type ImageProps = {
  size: string
}

export const WrapperAvatar = styled.div<ImageProps>`
  ${({ size }) => css`
    background-color: #eee;
    height: ${size};
    width: ${size};
    border-radius: 50%;
  `}
`

export const Image = styled.img<ImageProps>`
  ${({ size }) => css`
    height: ${size};
    width: ${size};
    border-radius: 50%;
  `}
`
