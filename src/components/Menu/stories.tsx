import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Menu {...args} />
  </div>
)

Default.args = {
  list: [
    {
      name: 'Repositório',
      link: 'https://github.com/facebook',
      icon: '/img/icones/repo.svg',
      amount: 124,
      active: true
    },
    {
      name: 'Packages',
      link: 'https://github.com/orgs/facebook/packages',
      icon: '/img/icones/packge.svg',
      amount: 0
    },
    {
      name: 'People',
      link: 'https://github.com/orgs/facebook/people',
      icon: '/img/icones/people.svg',
      amount: 168
    },
    {
      name: 'Projects',
      link: 'https://github.com/orgs/facebook/projects',
      icon: '/img/icones/project.svg',
      amount: 0
    }
  ]
}
