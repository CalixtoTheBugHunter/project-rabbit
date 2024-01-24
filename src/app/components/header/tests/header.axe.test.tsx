import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../header'

expect.extend(toHaveNoViolations);

test('Header pass axe', async () => {
  const { container } = render(<Header />);
  expect(await axe(container)).toHaveNoViolations();
});