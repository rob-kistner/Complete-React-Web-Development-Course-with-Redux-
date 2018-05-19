import { createStore, combineReducers } from 'redux';

/**
 * Expense reducers...
 * - - - - - - - - - - - -
 * ADD_EXPENSE
 * REMOVE_EXPENSE
 * EDIT_EXPENSE
 * 
 * Filter reducers...
 * - - - - - - - - - - - -
 * SET_TEXT_FILTER
 * SORT_BY_DATE
 * SORT_BY_AMOUNT
 * SET_START_DATE
 * SET_END_DATE
 */

/**
 * Expenses reducer
 */
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return state;
    case 'REMOVE_EXPENSE':
      return state;
    case 'EDIT_EXPENSE':
      return state;
    default:
      return state;
  }
};

/**
 * Filters reducer
 */
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return state;
    case 'SORT_BY_DATE':
      return state;
    case 'SORT_BY_AMOUNT':
      return state;
    case 'SET_START_DATE':
      return state;
    case 'SET_END_DATE':
      return state;
    default:
      return state;
  }
};

/**
 * Store creation
 * 
 * using combineReducers for the expenses and filters
 * reducers defined above
 */
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());


const demoState = {
  expenses: [{
    id: 'oblwenfzd',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 120000, // in pennies to avoid rounding errors
    createdAt: 0 // will be a timestamp
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

