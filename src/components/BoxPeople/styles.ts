import styled, { css } from 'styled-components'

import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'

import { WrapperAvatar } from '../Avatar/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border: 0.1rem solid #eee;
    border-radius: ${theme.border.radius};
    min-width: 30rem;
    max-width: 30rem;
    padding: ${theme.spacings.small};
    margin-top: 2rem;
  `};
`

export const AlignTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: ${theme.colors.black};

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`

export const AlignCount = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Count = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Icon = styled(ArrowIosForwardOutline)`
  ${({ theme }) => css`
    height: 2rem;
    width: 2rem;
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    height: 2.3rem;
    margin-bottom: ${theme.spacings.small};
  `}
`
export const BoxAvatar = styled.div`
  display: inline-flex;
  max-width: 30rem;
  flex-wrap: wrap;

  ${WrapperAvatar} {
    margin: 0.1rem;
  }
`
