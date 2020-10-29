import { HomeProps } from '../types/api'

import Headline from 'components/Headline'
import Menu from 'components/Menu'
import SectionSearch from 'components/SectionSearch'
import RepoInformation from 'components/RepoInformation'
import NotRepoInformation from 'components/NotRepoInformation'
import TopLanguage from 'components/TopLanguage'
import MostTopic from 'components/MostTopic'
import BoxPeople from 'components/BoxPeople'
import MenuGit from 'components/MenuGit'

import * as S from './styles'

const listLanguage = [
  { name: 'JavaScript', link: 'JavaScript' },
  { name: 'Python', link: 'Python' },
  { name: 'Java', link: 'Java' },
  { name: 'C++', link: 'C++' },
  { name: 'Ruby', link: 'Ruby' }
]

const listMost = [
  { name: 'JavaScript', link: 'JavaScript' },
  { name: 'Python', link: 'Python' },
  { name: 'Java', link: 'Java' },
  { name: 'C++', link: 'C++' },
  { name: 'Ruby', link: 'Ruby' }
]

const listPeople = [
  { url: '/img/avatar.jpeg', link: 'teste/avatar' },
  { url: '/img/avatar.jpeg', link: 'teste/avatar2' },
  { url: '/img/avatar.jpeg', link: 'teste/avatar3' },
  { url: '', link: 'teste/avatar13' },
  { url: '/img/avatar.jpeg', link: 'teste/avatar4' },
  { url: '/img/avatar.jpeg', link: 'teste/avatar5' },
  { url: '', link: 'teste/avatar23' },
  { url: '/img/avatar.jpeg', link: 'teste/avatar6' },
  { url: '/img/avatar.jpeg', link: 'teste/avatar7' },
  { url: '/img/avatar.jpeg', link: 'teste/avatar8' }
]

const Home = ({ repos, orgs, menu }: HomeProps) => (
  <>
    <MenuGit />
    <S.Wrapper>
      <Headline
        name={orgs?.name}
        description={orgs?.description || 'description...'}
        location={orgs?.location || 'location...'}
        blog={orgs?.blog || 'blog...'}
      />
      <Menu
        public_repos={menu?.public_repos}
        membersWithRole={menu?.membersWithRole}
      />
      <S.Divider />
      <SectionSearch />
      <S.Divider size="101rem" />
      <S.Colum>
        <S.ColumRepos>
          {repos?.length > 0 ? (
            repos.map((item) => (
              <div key={item?.name}>
                <RepoInformation
                  title={item?.name}
                  link={item?.html_url}
                  description={item?.description}
                  mit={item?.license?.key === 'mit'}
                  networks={item?.watchers_count}
                  networksLink={`https://github.com/facebook/${item?.name}/network/members`}
                  stars={item?.stargazers_count}
                  starsLink={item?.stargazers_url}
                  issues={item?.open_issues_count}
                  issuesLink={item?.issue_events_url}
                  pull={item?.forks}
                  pullsLink={item?.pulls_url}
                  update="1 hour"
                  graphic="/img/icones/grafico.svg"
                  language={item?.language}
                />
              </div>
            ))
          ) : (
            <NotRepoInformation />
          )}
        </S.ColumRepos>
        <S.AlignBox>
          <TopLanguage list={listLanguage} />
          <MostTopic list={listMost} />
          <BoxPeople list={listPeople} count={168} />
        </S.AlignBox>
      </S.Colum>
    </S.Wrapper>
  </>
)

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/orgs/facebook/repos')
  const repos = await res.json()

  const resOrg = await fetch('https://api.github.com/orgs/facebook')
  const orgs = await resOrg.json()

  return { props: { repos, orgs } }
}

export default Home
