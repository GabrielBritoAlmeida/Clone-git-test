import { Story, Meta } from '@storybook/react/types-6-0'
import ButtonTopic, { ButtonTopicProps } from '.'

export default {
  title: 'ButtonTopic',
  component: ButtonTopic,
  args: {
    children: 'verified'
  }
} as Meta

export const Default: Story<ButtonTopicProps> = (args) => (
  <ButtonTopic {...args} />
)
