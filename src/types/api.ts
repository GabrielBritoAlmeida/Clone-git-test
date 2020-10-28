import { RepoInformationProps } from '../components/RepoInformation'
import { HeadlineProps } from '../components/Headline'
import { MenuProps } from '../components/Menu'

export type HomeProps = {
  repos: RepoInformationProps
  orgs: HeadlineProps
  menu: MenuProps
}
