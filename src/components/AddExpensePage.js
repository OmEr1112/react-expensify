import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export const AddExpensePage = ({ addExpense, history }) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        addExpense(expense);
        history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  addExpense : expense => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);