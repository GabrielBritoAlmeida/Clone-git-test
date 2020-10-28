import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem;
`
type DividerProps = {
  size?: string | number
}

export const Divider = styled.div<DividerProps>`
  ${({ size }) => css`
    width: 100%;
    border-top: 0.1rem solid #eee;
    width: ${size ? size : '100%'};
  `}
`
