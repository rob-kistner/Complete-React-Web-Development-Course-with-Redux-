import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

const tmpl = React.createElement('p', {}, 'Testing 123');

ReactDOM.render(
  tmpl,
  document.getElementById('app')
);