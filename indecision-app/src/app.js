import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(
  <IndecisionApp
    title='Ornette Coleman Albums'
    options={[
      'The Twilight Zone', 
      'Asylum',
      'Black Sabbath'
    ]} 
    />, 
  document.getElementById('app')
);