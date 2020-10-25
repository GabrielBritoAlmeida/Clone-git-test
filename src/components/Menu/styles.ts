import styled, { css } from 'styled-components'

const wrapperModifiers = {
  active: () => css`
    font-weight: bold;
    border-bottom: 0.2rem solid #f9826c;
  `
}

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 0.1rem solid #eee;
`

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 112rem;
  min-width: 75rem;
`
type ItemMenuProps = {
  active: boolean
}

export const ItemMenu = styled.li<ItemMenuProps>`
  ${({ theme, active }) => css`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    cursor: pointer;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
    }

    ${!!active && wrapperModifiers.active};
  `};
`

export const Image = styled.img`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`

export const Name = styled.span`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall};
  `}
`
