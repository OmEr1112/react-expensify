import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';


it('should filter by text value', () => {
  const filters = {
    text : 'a',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2]]);
});

it('should filter by startDate', () => {
  const filters = {
    text : '',
    sortBy : 'date',
    startDate : moment(-1),
    endDate : undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});

it('should filter by endDate', () => {
  const filters = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : moment(-1)
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2]]);
});

it('should filter by startDate and endDate', () => {
  const filters = {
    text : '',
    sortBy : 'date',
    startDate : moment(0).subtract(5, 'days'),
    endDate : moment(0).add(1, 'days')
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2]]);
});

it('should sort by date', () => {
  const filters = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});

it('should sort by amount', () => {
  const filters = {
    text : '',
    sortBy : 'amount',
    startDate : undefined,
    endDate : undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});

