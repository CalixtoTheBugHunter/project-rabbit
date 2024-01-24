import { render } from '@testing-library/react'
import Header from '../header'
 
it('renders Header unchanged', () => {
  const { container } = render(<Header />)
  expect(container).toMatchSnapshot()
})