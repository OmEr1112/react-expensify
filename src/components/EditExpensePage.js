import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export const EditExpensePage = ({ expense, editExpense, removeExpense, history }) => {
  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(singleExpense) => {
          editExpense(expense.id, singleExpense);
          history.push('/');
        }}
      />
      <button onClick={() => {
        removeExpense({id : expense.id});
        history.push('/');
      }}
      >Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense : state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => ({
  editExpense : (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense : ({ id }) => dispatch(removeExpense({ id }))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);