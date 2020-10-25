import * as S from './styles'

export type TypeButtonProps = 'default' | 'secondary' | 'verified'

export type ButtonTopicProps = {
  children: string | number
  typeButton?: TypeButtonProps
}

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
