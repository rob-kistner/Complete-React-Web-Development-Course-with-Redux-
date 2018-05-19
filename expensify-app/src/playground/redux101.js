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
 * Reducers: rules
 * ---------------------------------
 * 1. Reducers are pure functions: the state and the action,
 * nothing else should be passed in. They should also never 
 * change anything outside of the reducer (state)
 * 
 * 2. Never change state or action
 * They should just return an object representing the new state
 * 
 */
const countReducer = ( state = { count: 0 }, action ) => {
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
};

/**
 * the store
 */
const store = createStore( countReducer );

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

store.dispatch(resetCount());
