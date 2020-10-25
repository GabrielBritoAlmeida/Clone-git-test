import Link from 'next/link'
import ButtonTopic from '../ButtonTopic'

import * as S from './styles'

export type MenuProps = {
  list: Array<{
    icon: string
    name: string
    amount: number
    link: string
    active?: boolean
  }>
}

const Menu = ({ list }: MenuProps) => (
  <S.Wrapper>
    <S.List>
      {list.map((item) => (
        <S.ItemMenu key={item.name} active={!!item.active}>
          <Link href={item.link}>
            <a>
              <S.Image src={item.icon} alt={item.name} />
              <S.Name>{item.name}</S.Name>
              {!!item.amount && (
                <ButtonTopic typeButton="secondary">{item.amount}</ButtonTopic>
              )}
            </a>
          </Link>
        </S.ItemMenu>
      ))}
    </S.List>
  </S.Wrapper>
)

export default Menu
