import { render, screen } from '@testing-library/react'

import RepoInformation from '.'

describe('<RepoInformation />', () => {
  it('should render the heading', () => {
    const { container } = render(<RepoInformation />)

    expect(
      screen.getByRole('heading', { name: /RepoInformation/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
