import React, { Component } from 'react';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './App.css';
import 'react-dates/lib/css/_datepicker.css';
import { addExpense } from './actions/expenses';
//import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 4000, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 3000, createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 5000, createdAt: 1500 }));

//store.dispatch(setTextFilter('bill'));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}


export default App;
