import { Story, Meta } from '@storybook/react/types-6-0'
import BlogSocialSection, { BlogSocialSectionProps } from '.'

export default {
  title: 'BlogSocialSection',
  component: BlogSocialSection
} as Meta

export const Default: Story<BlogSocialSectionProps> = (args) => (
  <BlogSocialSection {...args} />
)
