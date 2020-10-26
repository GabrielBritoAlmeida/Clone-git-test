import Link from 'next/link'

import * as S from './styles'

export type BoxPeopleProps = {
  titulo: string
  count: number | string
  list: Array<{
    name: string
    link: string
  }>
}

const BoxPeople = ({ titulo, count, list = [] }: BoxPeopleProps) => (
  <S.Wrapper>
    <S.AlignTitle>
      <Link href="#">
        <a>
          <S.Title>{titulo}</S.Title>
        </a>
      </Link>
      <S.AlignCount>
        <S.Count>{count}</S.Count>
        <S.Icon>icon</S.Icon>
      </S.AlignCount>
    </S.AlignTitle>
    <div>List Avatar</div>
  </S.Wrapper>
)

export default BoxPeople
