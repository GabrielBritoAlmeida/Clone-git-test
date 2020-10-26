import { Story, Meta } from '@storybook/react/types-6-0'
import BoxPeople, { BoxPeopleProps } from '.'

export default {
  title: 'BoxPeople',
  component: BoxPeople
} as Meta

export const Default: Story<BoxPeopleProps> = (args) => <BoxPeople {...args} />

Default.args = {
  titulo: 'People',
  count: 168
}
