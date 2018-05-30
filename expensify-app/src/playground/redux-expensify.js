import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/*------------------------------------------
  GENERATORS
------------------------------------------*/

// #region ----- ADD_EXPENSE generator
const addExpense = (
    {
      description='', 
      note='', 
      amount=0, 
      createdAt=0
    } = {}
  ) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
);
// #endregion

// #region ----- REMOVE_EXPENSE generator
const removeExpense = ( {id}={} ) => ({
  type: 'REMOVE_EXPENSE',
  id
});
// #endregion

// #region ----- EDIT_EXPENSE generator
const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
// #endregion

// #region ----- SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
// #endregion

// #region ----- SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
// #endregion

// #region ----- SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
// #endregion

// #region ----- SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});
// #endregion

// #region ----- SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
// #endregion



/*------------------------------------------
  REDUCERS
------------------------------------------*/

// #region ----- EXPENSES reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];

    case 'REMOVE_EXPENSE':
      return state.filter( ({id}) => {
        return id !== action.id;
      });

    case 'EDIT_EXPENSE':
      // use spread operator to overwrite
      // properties in expense that have
      // changed via action.updates
      return state.map( (expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};
// #endregion

// #region ----- FILTERS reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };

    default:
      return state;
  }
};
// #endregion

// #region ----- STORE creation
/** 
 * using combineReducers for the expenses and filters
 * reducers defined above
 */
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
// #endregion

// subscription
store.subscribe( () => {
  console.log( store.getState() );
});

/**
 * Dispatch testing
 */

// const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
// const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

// store.dispatch( removeExpense({ id: expense1.expense.id }) );

// store.dispatch( editExpense( expense2.expense.id, {amount: 500} ));

// store.dispatch( setTextFilter('rent') );
// store.dispatch( setTextFilter() );

// store.dispatch( sortByAmount() ); // amount
// store.dispatch( sortByDate() );   // date

store.dispatch( setStartDate(125) );   // startDate to 125
store.dispatch( setStartDate() );      // startDate to undefined
store.dispatch( setEndDate(1250) );   // endDate to 1250


// ----- TESTS -----

/**
 * 94: Spreading objects
 * 
 * In order for this to work, the babel-plugin-transform-object-rest-spread
 * plugin is required. Install it and at it to plugins in .babelrc
 */
const user = {
  name: 'Jan',
  age: 24
};

// age is being overriden in the log here, as long as it
// occurs in order
console.log({
  ...user,
  age: 27,
  location: 'Philadelphia',
});