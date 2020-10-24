import * as S from './styles'

export type LogoProps = {
  image?: string
}

const Logo = ({ image = '/img/logo.png' }: LogoProps) => (
  <S.Wrapper src={image} arial-label="logo facebook" title="logo facebook" />
)

export default Logo
