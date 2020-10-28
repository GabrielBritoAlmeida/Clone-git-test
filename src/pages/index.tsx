import { GetStaticProps } from 'next'
import client from 'graphql/client'
import GET_HOME from 'graphql/queries/getHome'
import { HomeProps } from '../types/api'

import Headline from 'components/Headline'
import Menu from 'components/Menu'

import * as S from './styles'

const Home = ({ headline, menu }: HomeProps) => (
  <S.Wrapper>
    <Headline {...headline} />
    <Menu {...menu} />
  </S.Wrapper>
)

export const getStaticProps: GetStaticProps = async () => {
  const { organization } = await client.request(GET_HOME)

  return {
    props: {
      headline: organization,
      menu: {
        repositories: organization.repositories.totalCount,
        membersWithRole: organization.membersWithRole.totalCount
      }
    }
  }
}

export default Home
