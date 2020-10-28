import { Story, Meta } from '@storybook/react/types-6-0'
import NotRepoInformation from '.'

export default {
  title: 'NotRepoInformation',
  component: NotRepoInformation
} as Meta

export const Default: Story = (args) => <NotRepoInformation {...args} />
