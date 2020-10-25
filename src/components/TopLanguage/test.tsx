import { render, screen } from '@testing-library/react'

import TopLanguage from '.'

describe('<TopLanguage />', () => {
  it('should render the heading', () => {
    const { container } = render(<TopLanguage />)

    expect(
      screen.getByRole('heading', { name: /TopLanguage/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
