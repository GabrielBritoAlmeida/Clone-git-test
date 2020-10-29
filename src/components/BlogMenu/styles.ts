import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem;
  width: 100%;
`
export const Logo = styled.img`
  width: 15.6rem;
  height: 5rem;
  margin-left: 5rem;
  cursor: pointer;
`

export const MenuRight = styled.div`
  display: flex;
  margin-right: 4rem;
`

export const ItemMenuRight = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    position: relative;
    cursor: pointer;
    margin-right: 5rem;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        bottom: -1rem;
        display: block;
        height: 0.2rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.3s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          padding: 0 1rem;
          margin-left: -1rem;
          width: 100%;
          left: 0;
        }
      }
    }
  `};
`
