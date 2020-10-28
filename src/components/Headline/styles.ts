import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 101rem;
  height: 10.1rem;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2rem;
  height: 10rem;
`

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.black};
    text-transform: capitalize;
  `}
`

export const Subtitle = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary};
  `};
`

export const Local = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.black};
    margin-right: ${theme.spacings.small};
  `};
`

export const Site = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.black};

    a {
      text-decoration: none;
      color: ${theme.colors.black};

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`

export const Icon = styled.img`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-right: ${theme.spacings.min};
  `};
`
export const VerifiedIcon = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
  `};
`

export const AlignLocalSite = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`
