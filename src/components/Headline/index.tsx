import * as S from './styles'
import Logo from '../Logo'
import ButtonTopic from '../ButtonTopic'

import Link from 'next/link'

export type HeadlineProps = {
  title?: string
  subtitle: string
  local: string
  site: string
}

const Headline = ({
  title = 'Facebook',
  subtitle,
  local,
  site
}: HeadlineProps) => (
  <S.Wrapper>
    <Logo />
    <S.Header>
      <S.Title role="heading" title={title}>
        {title}
      </S.Title>
      <S.Subtitle title={subtitle}>{subtitle}</S.Subtitle>
      <S.AlignLocalSite>
        <S.Local>
          <S.Icon src="/img/icones/local.svg" alt="Icon local" />
          <span>{local}</span>
        </S.Local>
        <S.Site>
          <S.Icon src="/img/icones/local.svg" alt="Icon site" />
          <Link href={site}>
            <a>{site}</a>
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
