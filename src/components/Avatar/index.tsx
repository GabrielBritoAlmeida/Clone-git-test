import * as S from './styles'

export type AvatarProps = {
  url?: string
  link?: string
}

const Avatar = ({ url, link, ...props }: AvatarProps) => (
  <S.WrapperAvatar {...props}>
    {!!url && (
      <>
        <a href={link} target="_blank" rel="noopenner, noreferrer">
          <S.Image src={url} alt="Avatar" />
        </a>
      </>
    )}
  </S.WrapperAvatar>
)

export default Avatar
