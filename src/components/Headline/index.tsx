import * as S from './styles'
import Logo from '../Logo'
import ButtonTopic from '../ButtonTopic'

import Link from 'next/link'

export type HeadlineProps = {
  name?: string
  description: string
  location: string
  blog: string
}

const Headline = ({
  name = 'Facebook',
  description,
  location,
  blog
}: HeadlineProps) => (
  <S.Wrapper>
    <Logo />
    <S.Header>
      <S.Title role="heading" title={name}>
        {name}
      </S.Title>
      <S.Subtitle title={description}>{description}</S.Subtitle>
      <S.AlignLocalSite>
        <S.Local>
          <S.Icon src="/img/icones/local.svg" alt="Icon local" />
          <span>{location}</span>
        </S.Local>
        <S.Site>
          <S.Icon src="/img/icones/local.svg" alt="Icon site" />
          <Link href={blog}>
            <a>{blog}</a>
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
