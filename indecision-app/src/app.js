import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

/**
 * example of children nested into component
 */
const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  );
}

const template = (
  <div>
    <h1>Template Section</h1>
    <p>This is my page</p>
  </div>
);

/**
 * shows use of children in render function
 */
ReactDOM.render(
  (
    <Layout>
      {template}
    </Layout>
  ),
  document.getElementById('app')
);