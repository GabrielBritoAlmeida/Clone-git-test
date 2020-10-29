import * as S from './styles'

import Avatar from '../Avatar'

const MenuGit = () => (
  <S.Wrapper>
    <S.BoxLeft>
      <S.Logo />

      <S.Input type="text" placeholder="Search or Jump to..." />

      <S.MenuLeft>
        <S.ItemMenuLeft>Pull requests</S.ItemMenuLeft>
        <S.ItemMenuLeft>Issues</S.ItemMenuLeft>
        <S.ItemMenuLeft>Marketplace</S.ItemMenuLeft>
        <S.ItemMenuLeft>Explore</S.ItemMenuLeft>
      </S.MenuLeft>
    </S.BoxLeft>
    <S.BoxRight>
      <S.MenuRight>
        <S.IconBell />
        <S.IconAdd>+</S.IconAdd>
        <S.IconArrow />
        <Avatar url="/img/avatarGabs.jpg" size="2rem" />
        <S.IconArrow />
      </S.MenuRight>
    </S.BoxRight>
  </S.Wrapper>
)

export default MenuGit
