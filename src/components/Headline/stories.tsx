import { Story, Meta } from '@storybook/react/types-6-0'
import Headline, { HeadlineProps } from '.'

export default {
  title: 'Headline',
  component: Headline,
  args: {
    title: 'Facebook',
    subtitle:
      'We are working to build community through open source technology. NB: members must have two-factor auth.',
    local: 'Menlo Park, California',
    site: 'https://opensource.fb.com'
  }
} as Meta

export const Default: Story<HeadlineProps> = (args) => (
  <div
    style={{
      margin: '2rem',
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '112rem'
    }}
  >
    <Headline {...args} />
  </div>
)
