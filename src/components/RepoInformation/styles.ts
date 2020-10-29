import styled, { css } from 'styled-components'

import { CircleFill } from '@styled-icons/bootstrap/CircleFill'
import { GitRepoForked } from '@styled-icons/boxicons-regular/GitRepoForked'
import { Star } from '@styled-icons/bootstrap/Star'
import { BalanceScale } from '@styled-icons/fa-solid/BalanceScale'
import { ErrorWarning } from '@styled-icons/remix-line/ErrorWarning'
import { GitPullRequest } from '@styled-icons/ionicons-outline/GitPullRequest'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    height: 16.5rem;
    width: 65.3rem;
    max-width: 65.3rem;
    padding: ${theme.spacings.large} 0;
    border-bottom: 0.1rem solid #dddd;
  `};
`
export const Align = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AlignBoxRepo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 2rem;
    margin-top: 1.6rem;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.secondary};

    a {
      text-decoration: none;
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.secondary};
    }
  `}
`

export const AlignBoxTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings.min} 0;

    width: 49.5rem;
    max-width: 49.5rem;
    height: 9rem;
    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.primary};
    height: 3rem;
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary};
  `}
`

export const ListTopic = styled.div`
  display: flex;
  align-items: center;
  height: 3.1rem;
  margin: 1.6rem 0;
`

export const Language = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    margin-right: ${theme.spacings.small};
    text-transform: capitalize;
  `}
`
type IconLanguageProps = {
  colorIcon: string
}

export const IconLanguage = styled(CircleFill)<IconLanguageProps>`
  ${({ theme, colorIcon }) => css`
    width: 1.3rem;
    height: 1.3rem;
    color: ${colorIcon};
    margin-right: ${theme.spacings.min};
  `}
`

export const Mit = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    margin-right: ${theme.spacings.small};
  `}
`

export const MitIcon = styled(BalanceScale)`
  ${({ theme }) => css`
    width: 1.6rem;
    height: 1.6rem;
    margin-right: ${theme.spacings.min};
  `}
`

export const Network = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    margin-right: ${theme.spacings.small};

    :hover {
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`

export const NetworkIcon = styled(GitRepoForked)`
  ${({ theme }) => css`
    width: 1.6rem;
    height: 1.6rem;
    margin-right: ${theme.spacings.min};
  `}
`

export const StarSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    margin-right: ${theme.spacings.small};

    :hover {
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`

export const StarIcon = styled(Star)`
  ${({ theme }) => css`
    width: 1.6rem;
    height: 1.6rem;
    margin-right: ${theme.spacings.min};
  `}
`

export const Issues = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    margin-right: ${theme.spacings.small};

    :hover {
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`

export const IssuesIcon = styled(ErrorWarning)`
  ${({ theme }) => css`
    width: 1.6rem;
    height: 1.6rem;
    margin-right: ${theme.spacings.min};
  `}
`

export const Pull = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    margin-right: ${theme.spacings.small};

    :hover {
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`

export const PullIcon = styled(GitPullRequest)`
  ${({ theme }) => css`
    width: 1.6rem;
    height: 1.6rem;
    margin-right: ${theme.spacings.min};
  `}
`
export const Update = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    margin-right: ${theme.spacings.min};
  `}
`

export const Graphic = styled.img`
  width: 14.5rem;
  height: 8rem;
`

export const AlignGraphic = styled.div`
  width: 15.5rem;
  height: 9rem;
  padding: 2.4rem 0;
`
