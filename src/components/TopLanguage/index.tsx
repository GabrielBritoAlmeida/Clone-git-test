import * as S from './styles'

export type TopLanguageProps = {
  list: Array<{
    name: string
    link: string
  }>
}

const handleColor = (name: string) => {
  const expr = name
  const search = expr.toLowerCase()

  switch (search) {
    case 'javascript':
      return '#f1e05a'
    case 'c++':
      return '#f34b7d'
    case 'python':
      return '#3572a5'
    case 'ruby':
      return '#701516'
    default:
      return '#ba5af1'
  }
}

const TopLanguage = ({ list = [] }: TopLanguageProps) => (
  <S.Wrapper>
    <S.Title>Top languages</S.Title>
    <S.Box>
      {list.map((item) => (
        <S.Align key={item?.name}>
          <S.Icon colorIcon={handleColor(item?.name)} />
          <S.Name>{item?.name}</S.Name>
        </S.Align>
      ))}
    </S.Box>
  </S.Wrapper>
)

export default TopLanguage
