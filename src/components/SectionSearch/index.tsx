import * as S from './styles'

const SectionSearch = () => (
  <S.Wrapper>
    <S.Cont>
      <S.Image src="/img/icones/search.svg" alt="input search" />
      <S.Input type="text" placeholder="Find a repository..." />
    </S.Cont>
    <S.Button>
      Type: <span>All</span> <S.Icon />
    </S.Button>
    <S.Button>
      Language: <span>All</span> <S.Icon />
    </S.Button>
  </S.Wrapper>
)

export default SectionSearch
