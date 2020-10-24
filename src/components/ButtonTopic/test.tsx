import { render, screen } from '@testing-library/react'

import ButtonTopic from '.'

describe('<ButtonTopic />', () => {
  it('should render the heading', () => {
    const { container } = render(<ButtonTopic />)

    expect(
      screen.getByRole('heading', { name: /ButtonTopic/i })
    ).toBeInTheDocument()
  })
})
