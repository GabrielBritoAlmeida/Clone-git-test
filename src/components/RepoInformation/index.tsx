import Link from 'next/link'

import ButtonTopic from '../ButtonTopic'

import * as S from './styles'

export type RepoInformationProps = {
  title: string
  link: string
  description: string
  list?: Array<{
    name: string
    link: string
  }>
  mit?: boolean
  networks: number
  networksLink: string
  stars: number
  starsLink: string
  issues: number
  issuesLink: string
  pull: number
  pullsLink: string
  update?: string
  graphic: string
  language: string
}

const handleColor = (name: string) => {
  const expr = name
  const search = expr.toLowerCase()

  switch (search) {
    case 'javascript':
      return '#f1e05a'
    case 'c++':
      return '#f34b7d'
    case 'python':
      return '#3572a5'
    case 'ruby':
      return '#701516'
    default:
      return '#ba5af1'
  }
}

const RepoInformation = ({
  title,
  link,
  description,
  list = [],
  mit,
  networks,
  networksLink,
  stars,
  starsLink,
  issues,
  issuesLink,
  pull,
  pullsLink,
  update,
  graphic,
  language
}: RepoInformationProps) => (
  <S.Wrapper>
    <S.Align>
      <S.AlignBoxTitle>
        <Link href={link}>
          <a>
            <S.Title>{title}</S.Title>
          </a>
        </Link>
        <S.Description>{description}</S.Description>
        {list?.length > 0 && (
          <S.ListTopic>
            {list.map((item) => (
              <>
                <ButtonTopic>{item?.name}</ButtonTopic>
              </>
            ))}
          </S.ListTopic>
        )}
      </S.AlignBoxTitle>
      <S.AlignGraphic>
        <S.Graphic src={graphic} />
      </S.AlignGraphic>
    </S.Align>
    <S.AlignBoxRepo>
      <S.Language>
        <S.IconLanguage colorIcon={handleColor(language)} /> {language}
      </S.Language>
      {!!mit && (
        <S.Mit>
          <S.MitIcon />
          Mit
        </S.Mit>
      )}
      {!!networks && (
        <Link href={networksLink}>
          <a>
            <S.Network>
              <S.NetworkIcon /> {networks}
            </S.Network>
          </a>
        </Link>
      )}
      {!!stars && (
        <Link href={starsLink}>
          <a>
            <S.StarSection>
              <S.StarIcon />
              {stars}
            </S.StarSection>
          </a>
        </Link>
      )}
      {!!issues && (
        <Link href={issuesLink}>
          <a>
            <S.Issues>
              <S.IssuesIcon /> {issues}
            </S.Issues>
          </a>
        </Link>
      )}
      {!!pull && (
        <Link href={pullsLink}>
          <a>
            <S.Pull>
              <S.PullIcon />
              {pull}
            </S.Pull>
          </a>
        </Link>
      )}
      {!!update && (
        <div>
          <S.Update>Update {update}</S.Update>
        </div>
      )}
    </S.AlignBoxRepo>
  </S.Wrapper>
)

export default RepoInformation
