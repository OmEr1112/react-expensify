import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

it('should setup remove expense action generator', () => {
  const action = removeExpense({ id : '123ahr' });
  expect(action).toEqual({
    type : 'REMOVE_EXPENSE',
    id : '123ahr'
  });
});


it('should setup edit expense action generator', () => {
  const action = editExpense('123ahr', { note : 'someValue', amount : 234.66});
  expect(action).toEqual({
    type : 'EDIT_EXPENSE',
    id : '123ahr',
    updates : {
      note : 'someValue',
      amount : 234.66
    }
  });
});


it('should setup add expense action generator with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type : 'ADD_EXPENSE',
    expense : {
      note : '',
      description : '',
      amount : 0,
      createdAt : 0,
      id : expect.any(String)
    }
  });
});


it('should setup add expense action generator with provided values', () => {
  const expenseObject = {
    note : 'someValue',
    amount : 234.66,
    description : 'some value',
    createdAt : 12345
  };
  const action = addExpense(expenseObject);
  expect(action).toEqual({
    type : 'ADD_EXPENSE',
    expense : {
      ...expenseObject,
      id : expect.any(String)
    }
  });
});