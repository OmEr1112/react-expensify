import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment';

it('should setup text filter action generator with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type : 'SET_TEXT_FILTER',
    text : ''
  });
});

it('should setup text filter action generator with provided value', () => {
  const text = 'date';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type : 'SET_TEXT_FILTER',
    text
  });
});

it('should setup sort by date action generator', () => {
  expect(sortByDate()).toEqual({ type : 'SORT_BY_DATE', });
});

it('should setup sort by amount action generator', () => {
  expect(sortByAmount()).toEqual({ type : 'SORT_BY_AMOUNT', });
});

it('should setup set start date action generator without value', () => {
  const action = setStartDate();
  expect(action).toEqual({
    type : 'SET_START_DATE',
    startDate : undefined
  });
});

it('should setup set start date action generator with given value', () => {
  const action = setStartDate(moment(123));
  expect(action).toEqual({
    type : 'SET_START_DATE',
    startDate : moment(123)
  });
});

it('should setup set end date action generator without value', () => {
  const action = setEndDate();
  expect(action).toEqual({
    type : 'SET_END_DATE',
    endDate : undefined
  });
});

it('should setup set end date action generator with given value', () => {
  const action = setEndDate(moment(1234));
  expect(action).toEqual({
    type : 'SET_END_DATE',
    endDate : moment(1234)
  });
});