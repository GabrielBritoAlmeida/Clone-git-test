export type HeadlineProps = {
  description: string
  location: string
  login: string
  websiteUrl: string
}

export type MenuProps = {
  repositories: number
  membersWithRole: number
}

export type HomeProps = {
  headline: HeadlineProps
  menu: MenuProps
}
