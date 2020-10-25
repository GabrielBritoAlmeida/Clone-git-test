import { Story, Meta } from '@storybook/react/types-6-0'
import SectionSearch from '.'

export default {
  title: 'SectionSearch',
  component: SectionSearch
} as Meta

export const Default: Story = (args) => <SectionSearch {...args} />
