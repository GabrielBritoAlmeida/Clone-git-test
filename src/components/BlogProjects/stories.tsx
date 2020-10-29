import { Story, Meta } from '@storybook/react/types-6-0'
import BlogProjects from '.'

export default {
  title: 'BlogProjects',
  component: BlogProjects
} as Meta

export const Default: Story = (args) => <BlogProjects {...args} />
