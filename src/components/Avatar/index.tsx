import * as S from './styles'

export type AvatarProps = {
  url?: string
  link?: string
  size?: string
}

const Avatar = ({ url, link, size = '4.7rem', ...props }: AvatarProps) => (
  <S.WrapperAvatar size={size} {...props}>
    {!!url && (
      <>
        <a href={link} target="_blank" rel="noopenner, noreferrer">
          <S.Image src={url} alt="Avatar" size={size} />
        </a>
      </>
    )}
  </S.WrapperAvatar>
)

export default Avatar
