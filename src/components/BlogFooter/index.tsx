import * as S from './styles'

const BlogFooter = () => (
  <S.Wrapper>
    <div>
      <S.BoxList>
        <S.List>
          <h3>Resources</h3>
          <span>Facebook Open Source Community</span>
          <span> Facebook for Developers </span>
          <span> Facebook Developer Group </span>
          <span> Facebook Research </span>
          <span> Facebook Engineering Community </span>
        </S.List>

        <S.List>
          <h3>GitHub</h3>
          <span> Facebook Open Source </span>
          <span> Facebook Incubator </span>
          <span> Facebook Research </span>
          <span> Facebook Experimental </span>
          <span> Facebook Samples</span>
          <span> PyTorch </span>
          <span> HHVM </span>
          <span> Flow </span>
          <span> GraphQL </span>
        </S.List>
      </S.BoxList>

      <S.BoxBottom>
        <h3>Follow us</h3>
        <S.BoxImage>
          <S.Icon src="/img/blog/twitter.png" alt="logo twitter" />
          <S.Icon src="/img/blog/face.png" alt="logo face" />
        </S.BoxImage>
        <S.ListFooter>
          <span>About</span>
          <span>Carrers</span>
          <span>Code of Conduct</span>
          <span>Privacy</span>
          <span>Cookies</span>
          <span>Teams</span>
          <span>Help</span>
          <div>Facebook @ 2020</div>
        </S.ListFooter>
      </S.BoxBottom>
    </div>
  </S.Wrapper>
)

export default BlogFooter
