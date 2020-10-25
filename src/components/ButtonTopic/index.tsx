import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type TypeButtonProps = 'default' | 'secondary' | 'verified'

export type ButtonTopicProps = {
  children: string | number
  typeButton?: TypeButtonProps
  as?: React.ElementType
} & ButtonTypes

const ButtonTopic = ({
  children,
  typeButton = 'default',
  ...props
}: ButtonTopicProps) => (
  <S.Wrapper typeButton={typeButton} {...props}>
    {children}
  </S.Wrapper>
)

export default ButtonTopic
