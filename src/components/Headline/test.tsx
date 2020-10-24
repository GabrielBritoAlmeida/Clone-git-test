import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Headline from '.'

const args = {
  title: 'Facebook',
  subtitle: 'subtitle',
  local: 'Menlo Park, California',
  site: 'https://opensource.fb.com'
}

describe('<Headline />', () => {
  it('should render the title', () => {
    renderWithTheme(<Headline {...args} />)

    expect(
      screen.getByRole('heading', { name: /facebook/i })
    ).toBeInTheDocument()
  })
})
