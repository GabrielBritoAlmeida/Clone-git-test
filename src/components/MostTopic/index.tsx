import * as S from './styles'

import ButtonTopic from '../ButtonTopic'

export type UsedTopicProps = {
  list: Array<{
    name: string
    link: string
  }>
}

const UsedTopic = ({ list = [] }: UsedTopicProps) => (
  <S.Wrapper>
    <S.Title>Most used topics</S.Title>
    <S.Box>
      {list.map((item) => (
        <S.Align key={item.name}>
          <ButtonTopic as="a" href={item.link}>
            {item.name}
          </ButtonTopic>
        </S.Align>
      ))}
    </S.Box>
  </S.Wrapper>
)

export default UsedTopic
