import { Story, Meta } from '@storybook/react/types-6-0'
import MenuGit from '.'

export default {
  title: 'MenuGit',
  component: MenuGit
} as Meta

export const Default: Story = (args) => <MenuGit {...args} />
