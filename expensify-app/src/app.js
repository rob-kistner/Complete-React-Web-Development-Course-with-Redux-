import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboardPage = () => {
  return (
    <div>
      This is from my dashboard component
    </div>
  );
}

const AddExpensePage = () => {
  return (
    <div>
      <h1>ADD EXPENSE</h1>
      <p>You'd ADD a new expense here</p>
    </div>
  );
}

const EditExpensePage = () => {
  return (
    <div>
    <h1>EDIT EXPENSE</h1>
    <p>This is where you'd go to EDIT a specific expense</p>
    </div>
  );
}

const HelpPage = () => {
  return (
    <div>
      <h1>HELP</h1>
      <p>You'd get HELP for the app here.</p>
    </div>
  );
}

const Error404 = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page Not Found.</p>
    </div>
  );
}


/**
 * router
 * 
 * !!IMPORTANT
 * In order for router to work, you need to alter 
 * the webpack.config.js file to use index.html for all 
 * 404's
 * 
 * Change:
 * ---
 *   devServer: {
      contentBase: path.join(__dirname, '/public'),
      historyApiFallback: true
    }
 * ---
 * 
 * exact={true} needed to keep original page from 
 * bleeding over into /create
 * 
 * <Switch> goes down the Route list in order searching 
 * for a match. This allows us to create the catch-all at the end 
 * for Error404
 * 
 */
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit"  component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(
  routes,
  document.getElementById('app')
);