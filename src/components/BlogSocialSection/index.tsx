import Link from 'next/link'

import * as S from './styles'

const BlogSocialSection = () => (
  <S.Wrapper>
    <S.BoxLayout>
      <S.BoxLink>
        <S.Title>A tutorial on Using Machine Learning with Detectron2</S.Title>
        <S.Image url={'/img/blog/box-link.jpeg'} />
        <S.Link>
          <Link href="https://www.youtube.com/watch?v=eUSgtfK4ivk">
            <a>
              Watch video on YouTube <S.Icon />
            </a>
          </Link>
        </S.Link>
      </S.BoxLink>

      <S.BoxLink>
        <S.Title>Build a Smart Bookmarking Tool with Rust and Rocket</S.Title>
        <S.Image url={'/img/blog/box-link2.png'} />
        <S.Link>
          <Link href="https://pt-br.facebook.com/">
            <a>
              Read the blog <S.Icon />
            </a>
          </Link>
        </S.Link>
      </S.BoxLink>

      <S.BoxLink>
        <S.Title>The Diff: A Podcast From Facebook Open Source</S.Title>
        <S.Image url={'/img/blog/box-link3.png'} />
        <S.Link>
          <Link href="https://thediffpodcast.com/">
            <a>
              Listen to the podcast <S.Icon />
            </a>
          </Link>
        </S.Link>
      </S.BoxLink>
    </S.BoxLayout>
  </S.Wrapper>
)

export default BlogSocialSection
