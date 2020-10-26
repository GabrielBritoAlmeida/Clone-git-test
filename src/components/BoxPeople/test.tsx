import { render, screen } from '@testing-library/react'

import BoxPeople from '.'

describe('<BoxPeople />', () => {
  it('should render the heading', () => {
    const { container } = render(<BoxPeople />)

    expect(
      screen.getByRole('heading', { name: /BoxPeople/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
