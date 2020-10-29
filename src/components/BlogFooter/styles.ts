import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  height: 56.1rem;
  width: 100%;
  background: #565a5f;
  padding: 6.5rem;
`

export const BoxList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60rem;
  height: 28.4rem;
`

export const List = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-width: 20rem;

    > h3 {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.background};
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      font-size: ${theme.font.sizes.xsmall};
      color: #cccccc;
      margin-bottom: ${theme.spacings.xsmall};
      cursor: pointer;

      :hover {
        color: ${theme.colors.background};
      }
    }
  `};
`

export const BoxBottom = styled.div`
  ${({ theme }) => css`
    display: block;
    > h3 {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.background};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const BoxImage = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
`
export const Icon = styled.img`
  ${({ theme }) => css`
    height: ${theme.font.sizes.xxlarge};
    width: ${theme.font.sizes.xxlarge};
    margin-right: ${theme.spacings.medium};
    cursor: pointer;
  `}
`
export const ListFooter = styled.div`
  ${({ theme }) => css`
    display: flex;

    > span {
      font-size: ${theme.font.sizes.xsmall};
      color: #cccccc;
      margin-bottom: ${theme.spacings.xsmall};
      margin-right: ${theme.spacings.medium};

      cursor: pointer;

      :hover {
        color: ${theme.colors.background};
      }
    }

    > div {
      font-size: ${theme.font.sizes.xsmall};
      color: #cccccc;
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`
