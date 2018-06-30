import { createStore } from 'redux';

// Action Generators
const incrementCount = ({ incrementBy } = {}) => {
  incrementBy = typeof incrementBy === 'number' ? incrementBy : 1;
  return {
    type : 'INCREMENT',
    incrementBy
  };
};

const decrementCount = ({ decrementBy } = {}) => {
  decrementBy = typeof decrementBy === 'number' ? decrementBy : 1;
  return {
    type : 'DECREMENT',
    decrementBy : decrementBy
  };
};

const setCount = ({ count }) => {
  count = typeof count === 'number' ? count : undefined;
  return {
    type : 'SET',
    count
  }
};

const resetCount = () => ({
  type : 'RESET'
});

// Reducer
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count : state.count + action.incrementBy
      };
    case 'DECREMENT':
    
      return {
        count : state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count : 0
      };
    default:
      return state;
  }
}


// Create Store
const store = createStore(countReducer);


// Subscribe to a store
const unsub = store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch actions
store.dispatch(incrementCount({ incrementBy: 6 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 7 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count : 98 }));

store.dispatch(resetCount());

// Unsubscribe to the store

unsub();
