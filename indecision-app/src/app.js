import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss';

import IndecisionApp from './components/IndecisionApp';


ReactDOM.render(
  <IndecisionApp title="Ornette Coleman Albums" />,
  document.getElementById('app')
);