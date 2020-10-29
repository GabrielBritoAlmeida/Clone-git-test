import styled, { css } from 'styled-components'

import { ExternalLinkOutline } from '@styled-icons/evaicons-outline/ExternalLinkOutline'

export const Wrapper = styled.main`
  height: 87.6rem;
  width: 100%;
  background: #f2f2f2;

  padding: 6.5rem;
`

export const TitleLayout = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    color: ${theme.colors.black};
    font-size: 4.2rem;
    font-weight: bold;
    height: 4.8rem;
    margin-bottom: 10rem;
  `};
`

export const ButtonLayout = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    color: #395798;
    background-color: none;
    border: 0.2rem solid #395798;
    font-weight: lighter;
    font-size: ${theme.font.sizes.medium};
    border-radius: ${theme.border.radius};
    height: 5rem;
    width: 22.1rem;

    :focus {
      outline: none;
    }

    :hover {
      color: #fafafa;
      background-color: #395798;
    }
  `};
`

export const BoxButton = styled.div`
  max-width: 130rem;

  display: flex;
  justify-content: center;
  margin-top: 18rem;
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
  max-height: 23.5rem;

  display: block;
`

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    font-weight: bold;
    height: 2.1rem;
    margin-bottom: 0.4rem;
  `};
`

export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.medium};
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
    width: 10rem;
    height: 7.7rem;
    margin-bottom: 2rem;

    background-image: url(${url});
    background-position: center center;
    background-size: cover;
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    display: inline-flex;

    color: #3578e5;
    font-size: ${theme.font.sizes.medium};
    font-weight: lighter;

    a {
      text-decoration: none;
      color: #3578e5;
      display: flex;
      align-items: center;
      margin-right: ${theme.spacings.large};

      &:hover {
        text-decoration: underline;
      }
    }
  `};
`
