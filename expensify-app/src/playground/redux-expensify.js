import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'aiowenfzd',
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

const demoReducers = () => {
  
};