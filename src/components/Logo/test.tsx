import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the img', () => {
    renderWithTheme(<Logo />)

    expect(
      screen.getByRole('img', { name: /Logo facebook/i })
    ).toBeInTheDocument()
  })
})
