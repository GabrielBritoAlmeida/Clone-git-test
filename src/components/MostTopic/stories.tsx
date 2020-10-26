import { Story, Meta } from '@storybook/react/types-6-0'
import UsedTopic, { UsedTopicProps } from '.'

export default {
  title: 'MostTopic',
  component: UsedTopic
} as Meta

export const Default: Story<UsedTopicProps> = (args) => <UsedTopic {...args} />

Default.args = {
  list: [
    { name: 'JavaScript', link: 'JavaScript' },
    { name: 'Python', link: 'Python' },
    { name: 'Java', link: 'Java' },
    { name: 'C++', link: 'C++' },
    { name: 'Ruby', link: 'Ruby' }
  ]
}
