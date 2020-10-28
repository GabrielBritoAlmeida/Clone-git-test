import Link from 'next/link'

import Avatar from '../Avatar'

import * as S from './styles'

export type BoxPeopleProps = {
  titulo?: string
  count: number | string
  list: Array<{
    url: string
    link: string
  }>
}

const BoxPeople = ({ titulo = 'People', count, list = [] }: BoxPeopleProps) => (
  <S.Wrapper>
    <S.AlignTitle>
      <Link href="https://github.com/orgs/facebook/people">
        <a>
          <S.Title>{titulo}</S.Title>
        </a>
      </Link>
      <S.AlignCount>
        <S.Count>{count}</S.Count>
        <S.Icon>icon</S.Icon>
      </S.AlignCount>
    </S.AlignTitle>
    <S.BoxAvatar>
      {list.map((item) => (
        <Avatar key={item?.link} url={item?.url} link={item?.link} />
      ))}
    </S.BoxAvatar>
  </S.Wrapper>
)

export default BoxPeople
