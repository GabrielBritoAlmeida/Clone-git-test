import Link from 'next/link'

import * as S from './styles'

const BlogProjects = () => (
  <S.Wrapper>
    <S.TitleLayout>Featured Open Source projects</S.TitleLayout>
    <S.BoxLayout>
      <S.BoxLink>
        <S.Image url={'/img/blog/robo.png'} />
        <S.Title>Detectron2</S.Title>
        <S.Description>
          Detectron2 is FAIR s next-generation platform for object detection and
          segmentation.
        </S.Description>
        <S.Link>
          <Link href="https://www.youtube.com/watch?v=eUSgtfK4ivk">
            <a>
              Watch video on YouTube <S.Icon />
            </a>
          </Link>
        </S.Link>
      </S.BoxLink>

      <S.BoxLink>
        <S.Image url={'/img/blog/hermes.svg'} />
        <S.Title>Hermes</S.Title>
        <S.Description>
          A lightweight JavaScript engine optimized for running React Native on
          Android.
        </S.Description>
        <S.Link>
          <Link href="https://pt-br.facebook.com/">
            <a>
              Read the blog <S.Icon />
            </a>
          </Link>
          <Link href="https://thediffpodcast.com/">
            <a>
              Website <S.Icon />
            </a>
          </Link>
        </S.Link>
      </S.BoxLink>

      <S.BoxLink>
        <S.Image url={'/img/blog/hydra.png'} />
        <S.Title>Hydra</S.Title>
        <S.Description>
          A framework for elegantly configuring complex applications.
        </S.Description>
        <S.Link>
          <Link href="https://thediffpodcast.com/">
            <a>
              Listen to the podcast <S.Icon />
            </a>
          </Link>
        </S.Link>
      </S.BoxLink>
    </S.BoxLayout>
    <S.BoxButton>
      <S.ButtonLayout>Explore all projects</S.ButtonLayout>
    </S.BoxButton>
  </S.Wrapper>
)

export default BlogProjects
