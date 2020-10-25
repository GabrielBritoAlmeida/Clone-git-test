import { Story, Meta } from '@storybook/react/types-6-0'
import RepoInformation, { RepoInformationProps } from '.'

export default {
  title: 'RepoInformation',
  component: RepoInformation
} as Meta

export const Default: Story<RepoInformationProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <RepoInformation mit {...args} />
  </div>
)

Default.args = {
  title: 'create-react-app',
  description: 'Set up a modern web app by running one command.',
  networks: 200,
  networksLink: '#link',
  stars: 2.5,
  starsLink: '#link',
  issues: 20,
  issuesLink: '#link',
  pull: 8,
  update: '1 hour',
  graphic: '/img/icones/grafico.svg',
  list: [
    { name: 'react', link: '#react' },
    { name: 'python', link: '#python' },
    { name: 'javascript', link: '#javascript' },
    { name: 'php', link: '#php' }
  ]
}
