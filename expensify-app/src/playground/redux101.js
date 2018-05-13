import React, {Component} from 'react';
import { createStore } from 'redux';


/**
 * 
NOTE: Installed 3.7.2 of Redux 
in case its just not working

 * 
 * initializing state on createStore as the parameter
 * to the anonymous function
 * 
 * second argument is the action itself
 * 
 */
const store = createStore( ( state = { count: 0 }, action ) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
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
 * using Actions to dispatch...
 * Increment using Actions
 * Decrement using Actions
 * Reset using Actions
 */
store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState());
