import styled, { css } from 'styled-components'

import { ExternalLinkOutline } from '@styled-icons/evaicons-outline/ExternalLinkOutline'

export const Wrapper = styled.main`
  height: 46rem;
  width: 100%;
  background: #fafafa;

  padding: 6.5rem;
`
export const BoxLayout = styled.div`
  max-width: 130rem;
  flex-wrap: wrap;

  display: flex;
  justify-content: space-between;
  margin: auto;
`

export const BoxLink = styled.div`
  max-width: 39.5rem;
  max-height: 32rem;

  display: block;
`

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    font-weight: bold;
    margin-bottom: 2rem;
    height: 4.2rem;
  `};
`

export const Icon = styled(ExternalLinkOutline)`
  width: 2rem;
  height: 1.9rem;
  margin-left: 0.2rem;
  color: #3578e5;
`

type ImageProps = {
  url: string
}

export const Image = styled.div<ImageProps>`
  ${({ url }) => css`
    width: 39.5rem;
    height: 22.2rem;
    margin-bottom: 2rem;

    background-image: url(${url});
    background-position: center center;
    background-size: cover;
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    color: #3578e5;
    font-size: ${theme.font.sizes.medium};
    font-weight: lighter;

    a {
      text-decoration: none;
      color: #3578e5;
      display: flex;
      align-items: center;

      &:hover {
        text-decoration: underline;
      }
    }
  `};
`
