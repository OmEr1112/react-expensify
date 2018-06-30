import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

it('should set default expenses state', () => {
  expect(expensesReducer(undefined, { type : '@@INIT' })).toEqual([]);
});

it('should remove expense by id', () => {
  const action = {
    type : 'REMOVE_EXPENSE',
    id : expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

it('should not remove expense if id not found', () => {
  const action = {
    type : 'REMOVE_EXPENSE',
    id : '22'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});


it('should add an expense', () => {
  const expense = {
    id : '11',
    description : 'some text value',
    amount : 222.22,
    note : '',
    createdAt : 32424
  };
  const action = {
    type : 'ADD_EXPENSE',
    expense
  } 
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

it('should edit expense by id', () => {
  const updates = {
    description : 'new description'
  }
  const action = {
    type : 'EDIT_EXPENSE',
    id : expenses[1].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(updates.description);
});

it('should not edit expense if id not found', () => {
  const action = {
    type : 'EDIT_EXPENSE',
    id : '22'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

