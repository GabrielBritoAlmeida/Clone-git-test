import Link from 'next/link'
import ButtonTopic from '../ButtonTopic'

import * as S from './styles'

export type MenuProps = {
  public_repos?: number
  membersWithRole?: number
  active?: boolean
}

const Menu = ({ public_repos, membersWithRole, active }: MenuProps) => (
  <S.Container>
    <S.Wrapper>
      <S.List>
        <S.ItemMenu active>
          <Link href={'https://github.com/facebook'}>
            <a>
              <S.Image src="/img/icones/repo.svg" alt="icon repo" />
              <S.Name>Repositórios</S.Name>
              {!!public_repos && (
                <ButtonTopic typeButton="secondary">{public_repos}</ButtonTopic>
              )}
            </a>
          </Link>
        </S.ItemMenu>

        <S.ItemMenu active={!!active}>
          <Link href={'https://github.com/orgs/facebook/packages'}>
            <a>
              <S.Image src="/img/icones/packge.svg" alt="icon packge" />
              <S.Name>Packages</S.Name>
            </a>
          </Link>
        </S.ItemMenu>

        <S.ItemMenu active={!!active}>
          <Link href={'https://github.com/orgs/facebook/people'}>
            <a>
              <S.Image src="/img/icones/people.svg" alt="icon people" />
              <S.Name>People</S.Name>
              {!!membersWithRole && (
                <ButtonTopic typeButton="secondary">
                  {membersWithRole}
                </ButtonTopic>
              )}
            </a>
          </Link>
        </S.ItemMenu>

        <S.ItemMenu active={!!active}>
          <Link href={'https://github.com/orgs/facebook/projects'}>
            <a>
              <S.Image src="/img/icones/project.svg" alt="icon project" />
              <S.Name>Projects</S.Name>
            </a>
          </Link>
        </S.ItemMenu>
      </S.List>
    </S.Wrapper>
  </S.Container>
)

export default Menu
