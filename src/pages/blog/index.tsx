import * as S from './styles'

import BlogHeader from 'components/BlogHeader'
import BlogSocialSection from 'components/BlogSocialSection'
import BlogProjects from 'components/BlogProjects'
import BlogFooter from 'components/BlogFooter'

const Blog = () => (
  <>
    <S.Wrapper>
      <BlogHeader />
      <BlogSocialSection />
      <BlogProjects />
      <BlogFooter />
    </S.Wrapper>
  </>
)

export default Blog
