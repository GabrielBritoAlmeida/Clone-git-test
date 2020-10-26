import * as S from './styles'

export type TopLanguageProps = {
  list: Array<{
    name: string
    link: string
  }>
}

const TopLanguage = ({ list = [] }: TopLanguageProps) => (
  <S.Wrapper>
    <S.Title>Top languages</S.Title>
    <S.Box>
      {list.map((item) => (
        <S.Align key={item.name}>
          <S.Icon /> <S.Name>{item.name}</S.Name>
        </S.Align>
      ))}
    </S.Box>
  </S.Wrapper>
)

export default TopLanguage
