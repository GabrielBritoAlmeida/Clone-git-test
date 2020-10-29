import { Story, Meta } from '@storybook/react/types-6-0'
import BlogMenu from '.'

export default {
  title: 'BlogMenu',
  component: BlogMenu
} as Meta

export const Default: Story = (args) => <BlogMenu {...args} />
