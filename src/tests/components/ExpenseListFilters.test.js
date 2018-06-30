import React from 'react';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, filtersData } from '../fixtures/filters';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

// Math.random mock function
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

let dispatch, wrapper; //setStartDate, setEndDate;

beforeEach(() => {
  // setStartDate = jest.fn();
  // setEndDate = jest.fn();
  dispatch = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      dispatch={dispatch}
      filters={filters}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

it('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseListFilters correctly with given filters data', () => {
  wrapper.setProps({
    filters : filtersData
  });
  expect(wrapper).toMatchSnapshot();
});

it('should render text change', () => {
  const value = 'value';
  wrapper.find('input').at(0).simulate('change', {
    target : { value }
  });
  expect(dispatch).toHaveBeenLastCalledWith(setTextFilter(value));
});

it('should sort by date', () => {
  wrapper.setProps({
    filters : filtersData
  });
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target : { value }
  });
  expect(dispatch).toHaveBeenLastCalledWith(sortByDate());
});

it('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target : { value }
  });
  expect(dispatch).toHaveBeenLastCalledWith(sortByAmount());
});


it('should handle date changes', () => {
  const startDate = moment(0).subtract(2, 'years');
  const endDate = moment(0).add(3, 'years');

  const instance = wrapper.instance();
  
  // props.onDatesChange invoking the instance of this.onDatesChange
  expect(wrapper.find(DateRangePicker).prop('onDatesChange')).toBe((instance.onDatesChange));
  
  // creating a spy
  const spy = jest.spyOn(instance, 'onDatesChange');
  instance.onDatesChange({ startDate, endDate });
  expect(spy).toHaveBeenCalledWith({ startDate, endDate });

  // dispatch invoked twice
  expect(dispatch).toHaveBeenCalledTimes(2);

  // expect(dispatch).toHaveBeenLastCalledWith(2);
});

it('should handle calenderFocused changes', () => {
  // Allowed values
  const calenderFocused = 'startDate' || 'endDate' || null;

  wrapper.find(DateRangePicker).prop('onFocusChange')(calenderFocused);
  expect(wrapper.state('calenderFocused')).toBe("startDate");
});
