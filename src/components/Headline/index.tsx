import * as S from './styles'
import Logo from '../Logo'
import ButtonTopic from '../ButtonTopic'

import Link from 'next/link'

export type HeadlineProps = {
  login?: string
  description: string
  location: string
  websiteUrl: string
}

const Headline = ({
  login = 'Facebook',
  description,
  location,
  websiteUrl
}: HeadlineProps) => (
  <S.Wrapper>
    <Logo />
    <S.Header>
      <S.Title role="heading" title={login}>
        {login}
      </S.Title>
      <S.Subtitle title={description}>{description}</S.Subtitle>
      <S.AlignLocalSite>
        <S.Local>
          <S.Icon src="/img/icones/local.svg" alt="Icon local" />
          <span>{location}</span>
        </S.Local>
        <S.Site>
          <S.Icon src="/img/icones/local.svg" alt="Icon site" />
          <Link href={websiteUrl}>
            <a>{websiteUrl}</a>
          </Link>
          <S.VerifiedIcon>
            <ButtonTopic typeButton="verified">Verified</ButtonTopic>
          </S.VerifiedIcon>
        </S.Site>
      </S.AlignLocalSite>
    </S.Header>
  </S.Wrapper>
)

export default Headline
