import { Story, Meta } from '@storybook/react/types-6-0'
import TopLanguage, { TopLanguageProps } from '.'

export default {
  title: 'TopLanguage',
  component: TopLanguage
} as Meta

export const Default: Story<TopLanguageProps> = (args) => (
  <TopLanguage {...args} />
)

Default.args = {
  list: [
    { name: 'JavaScript', link: 'JavaScript' },
    { name: 'Python', link: 'Python' },
    { name: 'Java', link: 'Java' },
    { name: 'C++', link: 'C++' },
    { name: 'Ruby', link: 'Ruby' }
  ]
}
