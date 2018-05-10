import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import Error404 from '../components/Error404'

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

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit"  component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={Error404} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default AppRouter;

