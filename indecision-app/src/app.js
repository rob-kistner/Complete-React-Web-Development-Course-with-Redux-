import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import IndecisionApp from './components/IndecisionApp';


ReactDOM.render(
  <IndecisionApp
    title="Ornette Coleman"
    subtitle="The crown prince of free"
    />,
  document.getElementById('app')
);