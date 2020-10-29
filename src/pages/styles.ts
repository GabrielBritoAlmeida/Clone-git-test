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

export const Colum = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

export const ColumRepos = styled.div`
  display: block;
`

export const AlignBox = styled.div`
  display: block;
  margin-left: 4.2rem;
`
