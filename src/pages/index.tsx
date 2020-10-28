// import { GetStaticProps } from 'next'
// import axios from 'axios'
import { HomeProps } from '../types/api'

import Headline from 'components/Headline'
import Menu from 'components/Menu'
import SectionSearch from 'components/SectionSearch'
import RepoInformation from 'components/RepoInformation'

import * as S from './styles'

const Home = ({ repos, orgs }: HomeProps) => (
  <S.Wrapper>
    <Headline
      name={orgs?.name}
      description={orgs?.description}
      location={orgs?.location}
      blog={orgs?.blog}
    />
    <Menu
      repositories={orgs.repositories}
      membersWithRole={orgs.membersWithRole}
    />
    <S.Divider />
    <SectionSearch />
    <S.Divider size="101rem" />
    {repos?.length > 0 &&
      repos.map((item) => (
        <RepoInformation
          key={item?.name}
          title={item?.name}
          link={item.html_url}
          description={item?.description}
          mit={item?.license?.key === 'mit'}
          networks={item?.watchers_count}
          networksLink="https://github.com/facebook/fbzmq/network/members"
          stars={item?.stargazers_count}
          starsLink={item?.stargazers_url}
          issues={item?.open_issues_count}
          issuesLink={item?.issue_events_url}
          pull={item?.forks}
          pullsLink={item?.pulls_url}
          graphic="/img/icones/grafico.svg"
          language={item?.language}
        />
      ))}
  </S.Wrapper>
)

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/orgs/facebook/repos', {
    headers: {
      authorization: 'Bearer 81f9f66bbbdf330018440ef107a6936691e25f03'
    }
  })
  const repos = await res.json()

  const resOrg = await fetch('https://api.github.com/orgs/facebook/repos', {
    headers: {
      authorization: 'Bearer 81f9f66bbbdf330018440ef107a6936691e25f03'
    }
  })
  const orgs = await resOrg.json()

  return { props: { repos, orgs } }
}

export default Home
