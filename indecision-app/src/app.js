import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(
  <IndecisionApp title='Ornette Coleman Albums' />, 
  document.getElementById('app')
);

/**
 * 
 * side examples illustrating new and old syntax
 * using babel-plugin-transform-class-properties
 * binding features
 * 
 */
class OldSyntax {
  constructor() {
    this.name = 'Mike';
    // old syntax, needs to bind this
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi, my name is ${this.name}`;
  }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

/* ------------------------------------------ */

class NewSyntax {
  name = 'RobK';
  // new syntax, can just use an arrow function
  // since this is bound by the plugin
  getGreeting = () => {
    return `Hi, my name is ${this.name}`;
  }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());