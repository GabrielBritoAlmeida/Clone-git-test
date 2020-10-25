import { render, screen } from '@testing-library/react'

import UsedTopic from '.'

describe('<UsedTopic />', () => {
  it('should render the heading', () => {
    const { container } = render(<UsedTopic />)

    expect(
      screen.getByRole('heading', { name: /UsedTopic/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
