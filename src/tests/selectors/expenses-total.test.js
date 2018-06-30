import expenses from '../fixtures/expenses';
import total from '../../selectors/expenses-total';

it('should total all given expenses', () => {
  const result = total(expenses);
  expect(result).toBe(114195);
});
