import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { isMoment } from 'moment';

it('should render Expenseform correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

it('should render Expenseform correctly with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

it('should render error for invalid form submision', () =>{
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault : () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
})

it('should set description on input change', () => {
  const value = 'description text';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target : { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

it('should set note on input change', () => {
  const value = 'note text';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target : { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

it('should set amount on input change', () => {
  const value = '123';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target : { value }
  });
  expect(wrapper.state('amount')).toBe(value);
});

it('should not set amount on invalid input change', () => {
  const value = '12.333';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target : { value }
  });
  expect(wrapper.state('amount')).toBe('');
});

it('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm 
    expense={expenses[2]}
    onSubmit={onSubmitSpy}
  />);
  wrapper.find('form').simulate('submit', {
    preventDefault : () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description : expenses[2].description,
    note : expenses[2].note,
    amount : expenses[2].amount,
    createdAt : expenses[2].createdAt,
  });
});

it('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toBe(now);
  //expect(wrapper.find('withStyles(SingleDatePicker)').exists()).toBe(true);
});

it('should set calenderFocused on change', () => {
  const focused = false;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
  expect(wrapper.state('calenderFocused')).toBe(focused);
});