import React, {Component} from 'react';
import { createStore } from 'redux';

/**
 * Action generators - functions that return action objects
 * 
 * destructuring payload parameters with a default value,
 * must be initialized to empty object literal
 * 
 */

const incrementCount = ({ incrementBy = 3 } = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

// forcing user to set the count
const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET',
});


/**
 * the store
 */
const store = createStore( ( state = { count: 0 }, action ) => {
  switch(action.type) {

    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
      
    case 'SET':
      return {
        count: action.count
      }

    case 'RESET':
      return {
        count: 0
      }

    default:
      return state;

  }
});


/**
 * called the subscription after attaching it to a variable,
 * in this case 'unsubscribe', will remove the subscription
 */
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});


// simplified calls to set store values using 
// the generators above
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

store.dispatch(resetCount());



// remove subscription now!
// unsubscribe();
