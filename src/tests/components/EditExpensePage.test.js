import React from 'react';
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push : jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[1]}
    />
  );
});


it('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle EditExpense', () => {
  wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

it('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({
    id : expenses[1].id
  });
});